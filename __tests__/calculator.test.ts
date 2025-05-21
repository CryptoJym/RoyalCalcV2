import { describe, it, expect } from 'vitest'
import { calculateProjectedYield } from '../lib/calculator'

describe('calculateProjectedYield', () => {
  it('computes projected yield for 1-year staking', () => {
    const result = calculateProjectedYield(1000, 1, 10)
    expect(result.totalProjectedReturnUSD).toBe(120)
    expect(result.roiPercentage).toBe(12)
    expect(result.yearlyBreakdown).toEqual([
      { year: 1, projectedYieldUSD: 120, cumulativeReturnUSD: 120 },
    ])
  })

  it('computes projected yield for 2-year staking', () => {
    const result = calculateProjectedYield(1000, 2, 10)
    expect(result.totalProjectedReturnUSD).toBe(280)
    expect(result.roiPercentage).toBe(28)
    expect(result.yearlyBreakdown).toEqual([
      { year: 1, projectedYieldUSD: 140, cumulativeReturnUSD: 140 },
      { year: 2, projectedYieldUSD: 140, cumulativeReturnUSD: 280 },
    ])
  })
})
