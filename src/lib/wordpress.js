const DEFAULT_WORDPRESS_URL =
  "https://blognidomontessoriin-14b003d.ingress-earth.ewp.live";
const DEFAULT_CATEGORY = "research";
const CACHE_MS = 15_000;

let articleCache = null;

function wordpressOrigin() {
  const raw =
    process.env.WORDPRESS_URL ||
    process.env.NEXT_PUBLIC_WORDPRESS_URL ||
    DEFAULT_WORDPRESS_URL;
  return String(raw).trim().replace(/\/+$/, "");
}

export function wordpressAdminUrl() {
  return `${wordpressOrigin()}/wp-admin`;
}

function categorySlug() {
  return (process.env.WORDPRESS_CATEGORY || DEFAULT_CATEGORY).trim().toLowerCase();
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeWpHtml(html) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "");
}

function formatWpDate(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function featuredImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  const url = media?.source_url || media?.media_details?.sizes?.medium?.source_url;
  return url || "/images/featured-play-based-learning.png";
}

function categoryName(post) {
  const groups = post?._embedded?.["wp:term"] ?? [];
  for (const group of groups) {
    const named = group.find((term) => term?.name);
    if (named?.name) return named.name;
  }
  return "Research";
}

function mapPost(post) {
  const title = stripTags(post.title?.rendered ?? "Untitled");
  const excerpt = stripTags(post.excerpt?.rendered ?? "");
  const html = sanitizeWpHtml(post.content?.rendered ?? "");
  const plain = stripTags(html);
  const slug = post.slug;

  return {
    id: slug,
    slug,
    fromCms: true,
    badge: "PUBLISHED",
    tag: categoryName(post),
    date: formatWpDate(post.date),
    title,
    question: excerpt || plain.slice(0, 180),
    summary: excerpt || plain.slice(0, 280),
    image: featuredImage(post),
    areaName: categoryName(post),
    status: "Published",
    html,
    excerpt: excerpt || plain.slice(0, 220),
  };
}

async function getJson(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: AbortSignal.timeout(12000),
      });
      if (response.status === 404) continue;
      if (!response.ok) continue;
      return { payload: await response.json(), response };
    } catch (error) {
      console.warn("WordPress request failed", url, error);
    }
  }
  return null;
}

async function categoryId(origin, slug) {
  const result = await getJson([
    `${origin}/wp-json/wp/v2/categories?slug=${encodeURIComponent(slug)}`,
    `${origin}/index.php?rest_route=/wp/v2/categories&slug=${encodeURIComponent(slug)}`,
  ]);
  if (!result || !Array.isArray(result.payload) || !result.payload[0]?.id) return null;
  return result.payload[0].id;
}

async function fetchPostsPage(origin, page, categoryIdValue) {
  const query = `per_page=100&page=${page}&_embed=1&status=publish&categories=${categoryIdValue}`;
  const result = await getJson([
    `${origin}/wp-json/wp/v2/posts?${query}`,
    `${origin}/index.php?rest_route=/wp/v2/posts&${query}`,
  ]);
  if (!result || !Array.isArray(result.payload)) return null;
  const totalPages = Number(result.response.headers.get("X-WP-TotalPages") || "1") || 1;
  return { posts: result.payload, totalPages };
}

export async function getResearchArticles() {
  const now = Date.now();
  if (articleCache && articleCache.expires > now) {
    return articleCache.articles;
  }

  const origin = wordpressOrigin();
  const catId = await categoryId(origin, categorySlug());
  if (!catId) {
    articleCache = { expires: now + CACHE_MS, articles: [] };
    return [];
  }

  const first = await fetchPostsPage(origin, 1, catId);
  if (!first) {
    articleCache = { expires: now + CACHE_MS, articles: [] };
    return [];
  }

  const collected = [...first.posts];
  for (let page = 2; page <= first.totalPages; page += 1) {
    const next = await fetchPostsPage(origin, page, catId);
    if (!next) break;
    collected.push(...next.posts);
  }

  const articles = collected.map(mapPost);
  articleCache = { expires: now + CACHE_MS, articles };
  return articles;
}
