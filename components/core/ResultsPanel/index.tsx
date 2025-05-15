"use client";

import { useRoyalCalcStore } from '@/lib/store';

export default function ResultsPanel() {
  const { outputs } = useRoyalCalcStore();

  if (!outputs) {
    return (
      <div className="mt-8 text-center text-neutral-platinum_gray">Enter values and calculate to see results.</div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow-sm bg-brand_white">
          <div className="text-sm text-neutral-platinum_gray">Total Projected Return</div>
          <div className="text-2xl font-display text-royal-gold">${outputs.totalProjectedReturnUSD.toLocaleString()}</div>
        </div>
        <div className="p-4 border rounded shadow-sm bg-brand_white">
          <div className="text-sm text-neutral-platinum_gray">ROI %</div>
          <div className="text-2xl font-display text-royal-gold">{outputs.roiPercentage.toFixed(1)}%</div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Yearly Breakdown</h3>
        <table className="w-full text-sm border">
          <thead className="bg-neutral-platinum_gray/20">
            <tr>
              <th className="p-2 text-left">Year</th>
              <th className="p-2 text-left">Yield (USD)</th>
              <th className="p-2 text-left">Cumulative (USD)</th>
            </tr>
          </thead>
          <tbody>
            {outputs.yearlyBreakdown.map((row) => (
              <tr key={row.year} className="odd:bg-brand_white even:bg-neutral-platinum_gray/10">
                <td className="p-2">{row.year}</td>
                <td className="p-2">${row.projectedYieldUSD.toLocaleString()}</td>
                <td className="p-2">${row.cumulativeReturnUSD.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 