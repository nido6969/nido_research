import ProjectsPage from '../../views/ProjectsPage';
import { constructMetadata } from '../../lib/seoConfig';

export const metadata = constructMetadata({
  title: 'Longitudinal Inquiries & Classroom Cohorts | NIDO Research Institute',
  description: 'Explore multi-year longitudinal research cohorts investigating executive function, spatial cognition, language acquisition, and mixed-age dynamics.',
  path: 'projects',
});

export default function Page() {
  return <ProjectsPage />;
}
