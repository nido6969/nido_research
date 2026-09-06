import ParentInsightsPage from '../../views/ParentInsightsPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Parent Insights & Naturalistic Observation Guides | NIDO Research Institute',
  description: 'Evidence-based early childhood insights and practical parenting guides derived directly from authentic Montessori classroom observations.',
  path: 'parent-insights',
});

export default function Page() {
  return <ParentInsightsPage />;
}
