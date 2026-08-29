import ResearchPage from '../../../views/ResearchPage';

export function generateStaticParams() {
  return [
    { subtab: 'approach' },
    { subtab: 'areas' },
    { subtab: 'methodology' },
    { subtab: 'ethics' }
  ];
}

export const metadata = {
  title: 'Research Methodology & Approach | Early Childhood Observation',
  description: 'Explore NIDO Research Institute methodology, 8 developmental domains, naturalistic observational protocols, and ethical standards.',
};

export default function Page() {
  return <ResearchPage />;
}
