import ParentInsightDetailPage from '../../../views/ParentInsightDetailPage';
import { PARENT_INSIGHTS_DATA } from '../../../data/researchData';
import { constructMetadata } from '../../../lib/seoConfig';

export function generateStaticParams() {
  return PARENT_INSIGHTS_DATA.topics.map((topic) => ({
    slug: topic.slug || topic.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const topic = PARENT_INSIGHTS_DATA.topics.find((t) => t.slug === slug || t.id === slug) || PARENT_INSIGHTS_DATA.topics[0];

  const rawDescription = topic.quote || (topic.body?.[0] || '');
  const cleanDescription = rawDescription.replace(/^[“”"]/g, '').replace(/[“”"]$/g, '').slice(0, 160);

  return constructMetadata({
    title: `${topic.title} — Parent Insights`,
    description: cleanDescription,
    path: `parent-insights/${slug}`,
    type: 'article',
  });
}

export default function Page() {
  return <ParentInsightDetailPage />;
}
