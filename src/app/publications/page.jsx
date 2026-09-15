import PublicationsPage from '../../views/PublicationsPage';
import { constructMetadata } from '../../lib/seoConfig';
import { getResearchArticles } from '../../lib/wordpress';

export const revalidate = 15;

export const metadata = constructMetadata({
  title: 'Publications & Research Papers | NIDO Research Institute',
  description: 'Browse empirical early childhood observational research, monographs, and the Founding Case Study of Nido Montessori Preschool Bachupally.',
  path: 'publications',
});

export default async function Page() {
  const cmsStudies = await getResearchArticles();
  return <PublicationsPage cmsStudies={cmsStudies} />;
}
