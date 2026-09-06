import StudyDetailPage from '../../../views/StudyDetailPage';
import { FEATURED_STUDIES } from '../../../data/researchData';
import { constructMetadata } from '../../../lib/seoConfig';

export function generateStaticParams() {
  return FEATURED_STUDIES.map((study) => ({
    slug: study.slug || study.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const study = FEATURED_STUDIES.find((s) => s.slug === slug || s.id === slug) || FEATURED_STUDIES[0];

  return constructMetadata({
    title: study.shortTitle ? `${study.shortTitle} — Research Study` : study.title,
    description: study.summary || (study.fullOverview ? study.fullOverview.slice(0, 160) : ''),
    path: `research-studies/${slug}`,
    noIndex: true,
  });
}

export default function Page() {
  return <StudyDetailPage />;
}
