import ResourceDetailPage from '../../../views/ResourceDetailPage';
import { RESOURCES_DATA } from '../../../data/researchData';
import { constructMetadata } from '../../../lib/seoConfig';

export function generateStaticParams() {
  return RESOURCES_DATA.articles.map((article) => ({
    slug: article.slug || article.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = RESOURCES_DATA.articles.find((a) => a.slug === slug || a.id === slug) || RESOURCES_DATA.articles[0];

  const cleanTitle = article.title.replace(/^[“”"]/g, '').replace(/[“”"]$/g, '');
  const rawDescription = article.subtitle || (article.sections?.[0]?.content || '');
  const cleanDescription = rawDescription.replace(/^[“”"]/g, '').replace(/[“”"]$/g, '').slice(0, 160);

  return constructMetadata({
    title: `${cleanTitle} — Montessori Resources`,
    description: cleanDescription,
    path: `resources/${slug}`,
    type: 'article',
  });
}

export default function Page() {
  return <ResourceDetailPage />;
}
