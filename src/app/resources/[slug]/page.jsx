import ResourceDetailPage from '../../../views/ResourceDetailPage';
import { RESOURCES_DATA } from '../../../data/researchData';

export function generateStaticParams() {
  return RESOURCES_DATA.articles.map((article) => ({
    slug: article.slug || article.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = RESOURCES_DATA.articles.find(a => a.slug === slug || a.id === slug) || RESOURCES_DATA.articles[0];
  
  return {
    title: `${article.title.replace(/^[“”"]/g, '').replace(/[“”"]$/g, '')} | NIDO Montessori Resources`,
    description: article.subtitle || (article.sections?.[0]?.content || '').slice(0, 160),
  };
}

export default function Page() {
  return <ResourceDetailPage />;
}
