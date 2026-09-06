import ContactPage from '../../views/ContactPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Contact & Campus Location | NIDO Research Institute',
  description: 'Connect with NIDO Research Institute and Nido Montessori Preschool in Bachupally, Hyderabad. Campus address, verified phone, email, and location map.',
  path: 'contact',
});

export default function Page() {
  return <ContactPage />;
}
