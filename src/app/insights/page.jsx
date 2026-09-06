import ParentInsightsPage from '../../views/ParentInsightsPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Parent Insights & Naturalistic Observation Guides',
  description: 'Evidence-based early childhood insights and practical parenting guides derived directly from Montessori classroom observations.',
  path: 'parent-insights',
  noIndex: true,
});

export default function Page() {
  return <ParentInsightsPage />;
}
