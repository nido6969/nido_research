import HomePage from '../views/HomePage';
import { constructMetadata } from '../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Nido Montessori Research Institute | Montessori Education Research',
  description: 'NIDO Research Institute conducts naturalistic classroom observations, longitudinal developmental cohorts, and empirical Montessori pedagogical research in Bachupally, Hyderabad.',
  path: '',
});

export default function Page() {
  return <HomePage />;
}
