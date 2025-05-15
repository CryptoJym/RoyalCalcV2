import CalculatorForm from '@/components/core/CalculatorForm';
import ResultsPanel from '@/components/core/ResultsPanel';

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-display mb-4 text-royal-black">RoyalCalc – Yield Projection</h1>
      <CalculatorForm />
      <ResultsPanel />
    </div>
  );
} 