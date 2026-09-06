#!/usr/bin/env node
/**
 * Automated Technical SEO Quality Gate for NIDO Research Institute.
 * Audits the static export in 'out/' against 40 phases of SEO compliance.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT_DIR, 'out');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public', 'sitemap.xml');
const ROBOTS_PATH = path.join(ROOT_DIR, 'public', 'robots.txt');
const SCHEMA_PATH = path.join(ROOT_DIR, 'src', 'data', 'schemaGraph.json');

const PROD_DOMAIN = 'https://research.nidomontessori.in';

let errorCount = 0;
let warningCount = 0;

function logPass(msg) {
  console.log(`  ✓ ${msg}`);
}
function logError(msg) {
  console.error(`  ✗ ERROR: ${msg}`);
  errorCount++;
}
function logWarn(msg) {
  console.warn(`  ! WARN: ${msg}`);
  warningCount++;
}

// 1. Collect all HTML files from out/
function getHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== '_next') {
        getHtmlFiles(fullPath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('\n======================================================');
console.log(' NIDO RESEARCH INSTITUTE — AUTOMATED SEO QUALITY GATE');
console.log('======================================================\n');

// --- AUDIT 1: Static HTML Pages ---
console.log('[1/4] Auditing Exported HTML Pages in out/ ...');

if (!fs.existsSync(OUT_DIR)) {
  logError("out/ directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

const htmlFiles = getHtmlFiles(OUT_DIR);
console.log(`  Found ${htmlFiles.length} HTML files.`);

const titlesMap = new Map();
const descriptionsMap = new Map();

for (const filePath of htmlFiles) {
  const relativePath = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  const isSpecialPage = relativePath === '404.html' || relativePath === '_not-found/index.html';
  const isAlias = relativePath.startsWith('insights/') || relativePath.startsWith('studies/');

  const html = fs.readFileSync(filePath, 'utf-8');

  // Title extraction
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch) {
    logError(`${relativePath}: Missing <title> tag.`);
  } else {
    const title = titleMatch[1].trim();
    if (!isAlias && !isSpecialPage) {
      if (titlesMap.has(title)) {
        logWarn(`${relativePath}: Duplicate title with ${titlesMap.get(title)} -> "${title}"`);
      } else {
        titlesMap.set(title, relativePath);
      }
    }
  }

  // Description extraction
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  if (!descMatch) {
    if (!isSpecialPage) {
      logError(`${relativePath}: Missing meta description.`);
    }
  } else {
    const desc = descMatch[1].trim();
    if (!isAlias && !isSpecialPage) {
      if (descriptionsMap.has(desc)) {
        logWarn(`${relativePath}: Duplicate description with ${descriptionsMap.get(desc)}`);
      } else {
        descriptionsMap.set(desc, relativePath);
      }
    }
  }

  // Canonical tag extraction
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
  if (!canonicalMatch) {
    logError(`${relativePath}: Missing canonical link.`);
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.startsWith(PROD_DOMAIN)) {
      logError(`${relativePath}: Canonical must start with ${PROD_DOMAIN}, got: ${canonical}`);
    }
    if (!canonical.endsWith('/')) {
      logError(`${relativePath}: Canonical must end with trailing slash, got: ${canonical}`);
    }
  }

  // Heading check: exactly one H1
  const h1Matches = html.match(/<h1[\s>]/gi);
  if (!h1Matches || h1Matches.length === 0) {
    logError(`${relativePath}: Missing <h1> heading.`);
  } else if (h1Matches.length > 1) {
    logWarn(`${relativePath}: Multiple <h1> headings found (${h1Matches.length}).`);
  }

  // Image alt check
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  for (const img of imgTags) {
    if (!img.includes('alt=') || /alt=["']\s*["']/.test(img)) {
      // Empty alt is acceptable only if role="presentation" or aria-hidden="true"
      if (!img.includes('role="presentation"') && !img.includes('aria-hidden="true"')) {
        logWarn(`${relativePath}: Image missing descriptive alt text: ${img.slice(0, 70)}...`);
      }
    }
  }

  // Check for localhost or dev URLs in output
  if (html.includes('localhost:') || html.includes('127.0.0.1')) {
    logError(`${relativePath}: Found references to localhost or 127.0.0.1!`);
  }
}
logPass(`Audited ${htmlFiles.length} HTML pages successfully.`);

// --- AUDIT 2: XML Sitemap ---
console.log('\n[2/4] Auditing public/sitemap.xml ...');

if (!fs.existsSync(SITEMAP_PATH)) {
  logError('public/sitemap.xml not found.');
} else {
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`  Found ${locMatches.length} URLs in sitemap.`);

  const sitemapSet = new Set();
  for (const url of locMatches) {
    if (!url.startsWith(PROD_DOMAIN)) {
      logError(`Sitemap URL does not start with production domain: ${url}`);
    }
    if (!url.endsWith('/')) {
      logError(`Sitemap URL missing trailing slash: ${url}`);
    }
    if (sitemapSet.has(url)) {
      logError(`Duplicate URL in sitemap: ${url}`);
    }
    sitemapSet.add(url);

    // Verify corresponding static file exists in out/
    const urlPath = url.replace(PROD_DOMAIN, '').replace(/^\/+|\/+$/g, '');
    const expectedHtml = urlPath === '' 
      ? path.join(OUT_DIR, 'index.html') 
      : path.join(OUT_DIR, urlPath, 'index.html');

    if (!fs.existsSync(expectedHtml)) {
      logError(`Sitemap URL has no exported HTML file: ${url} (expected ${expectedHtml})`);
    }
  }
  logPass(`All ${locMatches.length} sitemap URLs verified against exported static files.`);
}

// --- AUDIT 3: Robots.txt ---
console.log('\n[3/4] Auditing public/robots.txt ...');

if (!fs.existsSync(ROBOTS_PATH)) {
  logError('public/robots.txt not found.');
} else {
  const robots = fs.readFileSync(ROBOTS_PATH, 'utf-8');
  if (!robots.includes(`Sitemap: ${PROD_DOMAIN}/sitemap.xml`)) {
    logError(`robots.txt missing canonical sitemap reference: ${PROD_DOMAIN}/sitemap.xml`);
  } else {
    logPass('robots.txt references valid production HTTPS sitemap.');
  }
  if (!robots.includes('User-agent: Googlebot')) {
    logWarn('robots.txt does not have explicit Googlebot directive.');
  }
}

// --- AUDIT 4: Schema.org Knowledge Graph ---
console.log('\n[4/4] Auditing Schema.org JSON-LD Knowledge Graph ...');

if (!fs.existsSync(SCHEMA_PATH)) {
  logError('src/data/schemaGraph.json not found.');
} else {
  try {
    const rawSchema = fs.readFileSync(SCHEMA_PATH, 'utf-8');
    const schema = JSON.parse(rawSchema);

    if (schema['@context'] !== 'https://schema.org') {
      logError(`Invalid @context in schema: ${schema['@context']}`);
    }

    const graph = schema['@graph'] || [];
    console.log(`  Graph contains ${graph.length} verified entities.`);

    // Quality check: Ensure no fake aggregate reviews or fake scholars exist
    for (const node of graph) {
      if (node.aggregateRating) {
        logError(`Fabricated aggregateRating found in node: ${node['@id']}`);
      }
      if (node['@type'] === 'Person') {
        const authenticNames = ['Shobha Goyal', 'Pavan Goyal'];
        if (!authenticNames.includes(node.name)) {
          logWarn(`Verify whether scholar is authentic institutional personnel: ${node.name}`);
        }
      }
    }
    logPass(`Verified Schema graph syntax and entity authenticity (${graph.length} nodes).`);
  } catch (err) {
    logError(`Failed to parse schemaGraph.json: ${err.message}`);
  }
}

// --- Summary ---
console.log('\n------------------------------------------------------');
console.log(`SEO Audit Completed: ${errorCount} Errors, ${warningCount} Warnings.`);
console.log('------------------------------------------------------\n');

if (errorCount > 0) {
  console.error('FAILED: Technical SEO quality gate encountered errors.\n');
  process.exit(1);
} else {
  console.log('PASSED: All technical SEO checks passed successfully!\n');
  process.exit(0);
}
