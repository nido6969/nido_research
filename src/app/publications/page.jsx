import PublicationsPage from '../../views/PublicationsPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Publications & Research Papers | NIDO Research Institute',
  description: 'Browse empirical early childhood observational research, monographs, and the Founding Case Study of Nido Montessori Preschool Bachupally.',
  path: 'publications',
});

export default function Page() {
  return <PublicationsPage />;
}
