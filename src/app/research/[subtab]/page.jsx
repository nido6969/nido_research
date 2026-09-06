import ResearchPage from '../../../views/ResearchPage';
import { constructMetadata } from '../../../lib/seoConfig';

const SUBTAB_SEO = {
  approach: {
    title: 'Research Approach & Pedagogical Foundations',
    description: 'Discover the philosophical grounding and evidence-rooted inquiry driving early childhood research at NIDO Research Institute.',
  },
  areas: {
    title: 'Research Areas & Developmental Domains',
    description: 'Explore the 8 core developmental domains observed across Montessori environments, from spatial cognition to executive function.',
  },
  methodology: {
    title: 'Observation Methodology & Protocols',
    description: 'Understand our naturalistic, non-intrusive observational protocols and longitudinal tracking methodologies in prepared environments.',
  },
  ethics: {
    title: 'Research Ethics & Child Protection Standards',
    description: 'Learn how NIDO Research Institute safeguards child dignity, psychological safety, and privacy through rigorous ethical guidelines.',
  },
};

export function generateStaticParams() {
  return [
    { subtab: 'approach' },
    { subtab: 'areas' },
    { subtab: 'methodology' },
    { subtab: 'ethics' },
  ];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const subtab = resolvedParams?.subtab || 'approach';
  const data = SUBTAB_SEO[subtab] || SUBTAB_SEO.approach;

  return constructMetadata({
    title: data.title,
    description: data.description,
    path: `research/${subtab}`,
  });
}

export default function Page() {
  return <ResearchPage />;
}
