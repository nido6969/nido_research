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

  const title = study.shortTitle ? `${study.shortTitle} — Research Study` : study.title;
  const description = study.summary || (study.fullOverview ? study.fullOverview.slice(0, 160) : '');

  const isCaseStudy = slug === 'building-a-montessori-school-from-the-ground-up-case-study';
  const extraMeta = isCaseStudy
    ? {
        citation_title: study.title,
        citation_author: study.leadAuthor || 'Shobha Goyal',
        citation_publication_date: '2026/08/29',
        citation_pdf_url: 'https://research.nidomontessori.in/Nido_Montessori_Founding_Case_Study.pdf',
      }
    : {};

  return constructMetadata({
    title,
    description,
    path: `research-studies/${slug}`,
    image: study.image,
    type: 'article',
    publishedTime: '2026-08-29',
    authors: study.leadAuthor ? [study.leadAuthor] : undefined,
    extraMeta,
  });
}

export default function Page() {
  return <StudyDetailPage />;
}
