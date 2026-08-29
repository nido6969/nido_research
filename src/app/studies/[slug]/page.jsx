import StudyDetailPage from '../../../views/StudyDetailPage';
import { FEATURED_STUDIES } from '../../../data/researchData';

export function generateStaticParams() {
  return FEATURED_STUDIES.map((study) => ({
    slug: study.slug || study.id,
  }));
}

export function generateMetadata({ params }) {
  const study = FEATURED_STUDIES.find(s => s.slug === params.slug || s.id === params.slug) || FEATURED_STUDIES[0];
  return {
    title: study.title,
    description: study.fullOverview ? study.fullOverview.slice(0, 160) : study.summary,
  };
}

export default function Page() {
  return <StudyDetailPage />;
}
