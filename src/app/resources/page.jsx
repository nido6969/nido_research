import ResourcesPage from '../../views/ResourcesPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Educational Articles & Prepared Environment Guides | NIDO Research Institute',
  description: 'Curated pedagogical essays, practical parenting reflections, and observation guides on the prepared environment and child development.',
  path: 'resources',
});

export default function Page() {
  return <ResourcesPage />;
}
