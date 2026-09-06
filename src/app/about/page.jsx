import AboutPage from '../../views/AboutPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'About the Institute & Guiding Principles | NIDO Research Institute',
  description: 'Learn about NIDO Research Institute, our founding story emerging from Nido Montessori Preschool Bachupally, and our six guiding principles for child-centered observational research.',
  path: 'about',
});

export default function Page() {
  return <AboutPage />;
}
