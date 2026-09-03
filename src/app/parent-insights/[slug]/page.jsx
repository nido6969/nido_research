import ParentInsightDetailPage from '../../../views/ParentInsightDetailPage';
import { PARENT_INSIGHTS_DATA } from '../../../data/researchData';

export function generateStaticParams() {
  return PARENT_INSIGHTS_DATA.topics.map((topic) => ({
    slug: topic.slug || topic.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const topic = PARENT_INSIGHTS_DATA.topics.find(t => t.slug === slug || t.id === slug) || PARENT_INSIGHTS_DATA.topics[0];
  
  return {
    title: `${topic.title} | Parent Insights | NIDO Research`,
    description: topic.quote || (topic.body?.[0] || '').slice(0, 160),
  };
}

export default function Page() {
  return <ParentInsightDetailPage />;
}
