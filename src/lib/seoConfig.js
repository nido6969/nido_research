// SEO Configuration & Reusable Metadata Helper for NIDO Research Institute
// Canonical domain: https://research.nidomontessori.in

export const SITE_URL = 'https://research.nidomontessori.in';
export const SITE_NAME = 'NIDO Research Institute';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.png`;

/**
 * Normalizes path into an absolute canonical URL with trailing slash.
 * Respects Next.js trailingSlash: true configuration.
 */
export function getCanonicalUrl(path = '') {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) return `${SITE_URL}/`;
  return `${SITE_URL}/${cleanPath}/`;
}

/**
 * Reusable metadata builder conforming to Next.js App Router Metadata API.
 * Ensures consistent canonicals, Open Graph, Twitter cards, and robots directives.
 */
export function constructMetadata({
  title,
  description,
  path = '',
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Nido Research Institute — Understanding Childhood. Nurturing Tomorrow.',
  type = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors,
  extraMeta = {},
}) {
  const canonical = getCanonicalUrl(path);
  const finalTitle = title.includes('Nido') || title.includes('NIDO') ? title : `${title} | ${SITE_NAME}`;

  const robotsDirective = noIndex
    ? {
        index: false,
        follow: true,
        googleBot: {
          index: false,
          follow: true,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      };

  const openGraph = {
    type,
    locale: 'en_IN',
    url: canonical,
    siteName: SITE_NAME,
    title: finalTitle,
    description,
    images: [
      {
        url: image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  };

  if (publishedTime) {
    openGraph.publishedTime = publishedTime;
  }
  if (modifiedTime) {
    openGraph.modifiedTime = modifiedTime;
  }
  if (authors && authors.length > 0) {
    openGraph.authors = authors;
  }

  return {
    title: {
      absolute: finalTitle,
    },
    description,
    alternates: {
      canonical,
    },
    robots: robotsDirective,
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description,
      images: [image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`],
    },
    other: {
      'geo.region': 'IN-TG',
      'geo.placename': 'Bachupally, Hyderabad, Telangana, India',
      'geo.position': '17.553145;78.3838549',
      'ICBM': '17.553145, 78.3838549',
      ...extraMeta,
    },
  };
}
