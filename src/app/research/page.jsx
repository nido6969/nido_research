import ResearchPage from '../../views/ResearchPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Research Framework & Observation Methodology | NIDO Research Institute',
  description: 'Explore our research methodology, 8 developmental domains, naturalistic observational protocols, and institutional child ethics at NIDO Research Institute.',
  path: 'research',
});

export default function Page() {
  return <ResearchPage />;
}
