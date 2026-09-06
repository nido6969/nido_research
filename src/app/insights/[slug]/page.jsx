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

  return constructMetadata({
    title: `${topic.title} — Parent Insights`,
    description: topic.quote || (topic.body?.[0] || '').slice(0, 160),
    path: `parent-insights/${slug}`,
    noIndex: true,
  });
}

export default function Page() {
  return <ParentInsightDetailPage />;
}
