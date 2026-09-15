import { notFound } from 'next/navigation';
import StudyDetailPage from '../../../views/StudyDetailPage';
import { FEATURED_STUDIES } from '../../../data/researchData';
import { constructMetadata } from '../../../lib/seoConfig';
import { getResearchArticles } from '../../../lib/wordpress';

export const revalidate = 15;
export const dynamicParams = true;

async function findStudy(slug) {
  const fromFeatured = FEATURED_STUDIES.find((study) => study.slug === slug || study.id === slug);
  if (fromFeatured) return fromFeatured;
  const cmsStudies = await getResearchArticles();
  return cmsStudies.find((study) => study.slug === slug || study.id === slug) || null;
}

export function generateStaticParams() {
  return FEATURED_STUDIES.map((study) => ({
    slug: study.slug || study.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const study = (await findStudy(slug)) || FEATURED_STUDIES[0];

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

export default async function Page({ params }) {
  const resolvedParams = await params;
  const study = await findStudy(resolvedParams?.slug);
  if (!study) notFound();
  return <StudyDetailPage study={study} />;
}
