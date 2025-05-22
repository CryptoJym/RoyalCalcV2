import { create } from 'zustand';
import { MainCalculatorInputs, MainCalculatorInputsSchema } from './schemas';
import { calculateProjectedYield, ProjectedYieldOutputs } from './calculator';

interface RoyalCalcState {
  inputs: MainCalculatorInputs;
  outputs: ProjectedYieldOutputs | null;
  setInput: (name: keyof MainCalculatorInputs, value: any) => void;
  reset: () => void;
}

const defaultInputs: MainCalculatorInputs = MainCalculatorInputsSchema.parse({
  investmentAmountUSD: 10000,
  stakingDurationYears: '1',
  projectedAnnualReturnRate: 10,
});

export const useRoyalCalcStore = create<RoyalCalcState>((set, get) => ({
  inputs: defaultInputs,
  outputs: calculateProjectedYield(
    defaultInputs.investmentAmountUSD,
    Number(defaultInputs.stakingDurationYears),
    defaultInputs.projectedAnnualReturnRate
  ),

  setInput: (name, value) => {
    set((state) => ({
      inputs: { ...state.inputs, [name]: value },
    }));
    const { inputs } = get();
    const parsed = MainCalculatorInputsSchema.safeParse(inputs);
    if (parsed.success) {
      const validated = parsed.data;
      set({
        outputs: calculateProjectedYield(
          validated.investmentAmountUSD,
          validated.stakingDurationYears,
          validated.projectedAnnualReturnRate
        ),
      });
    } else {
      set({ outputs: null });
    }
  },

  reset: () =>
    set({
      inputs: defaultInputs,
      outputs: calculateProjectedYield(
        defaultInputs.investmentAmountUSD,
        Number(defaultInputs.stakingDurationYears),
        defaultInputs.projectedAnnualReturnRate
      ),
    }),
})); 