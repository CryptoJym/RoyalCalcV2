export interface ProjectedYieldOutputs {
  totalProjectedReturnUSD: number;
  roiPercentage: number;
  yearlyBreakdown: Array<{ year: number; projectedYieldUSD: number; cumulativeReturnUSD: number }>;
}

/**
 * Simple financial round helper.
 */
function financialRound(value: number, decimals: number): number {
  return Number(Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals);
}

export function calculateProjectedYield(
  initialInvestmentUSD: number,
  stakingDurationYears: number,
  assetPortfolioAnnualGrowthRate: number
): ProjectedYieldOutputs {
  let yieldMultiplier = 1;
  if (stakingDurationYears === 1) yieldMultiplier = 1.2;
  else if (stakingDurationYears >= 2) yieldMultiplier = 1.4;

  const effectiveAnnualRate = (assetPortfolioAnnualGrowthRate / 100) * yieldMultiplier;

  const yearlyBreakdown: ProjectedYieldOutputs['yearlyBreakdown'] = [];
  let cumulativeReturn = 0;

  for (let year = 1; year <= stakingDurationYears; year++) {
    const yearlyYield = initialInvestmentUSD * effectiveAnnualRate;
    cumulativeReturn += yearlyYield;
    yearlyBreakdown.push({
      year,
      projectedYieldUSD: financialRound(yearlyYield, 2),
      cumulativeReturnUSD: financialRound(cumulativeReturn, 2),
    });
  }

  const roi = initialInvestmentUSD > 0 ? (cumulativeReturn / initialInvestmentUSD) * 100 : 0;

  return {
    totalProjectedReturnUSD: financialRound(cumulativeReturn, 2),
    roiPercentage: financialRound(roi, 1),
    yearlyBreakdown,
  };
} 