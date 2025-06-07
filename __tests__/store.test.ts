import { describe, it, expect } from 'vitest'
import { useRoyalCalcStore } from '../lib/store'
import { calculateProjectedYield } from '../lib/calculator'

const defaultOutputs = calculateProjectedYield(10000, 1, 10)

describe('useRoyalCalcStore reset', () => {
  it('resets outputs to default values', () => {
    const store = useRoyalCalcStore.getState()
    // change state to something else
    store.setInput('investmentAmountUSD', 5000)
    expect(useRoyalCalcStore.getState().outputs).not.toEqual(defaultOutputs)

    store.reset()

    expect(useRoyalCalcStore.getState().outputs).toEqual(defaultOutputs)
  })
})
