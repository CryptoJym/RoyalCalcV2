"use client";

import { useRoyalCalcStore } from '@/lib/store';
import { useForm } from 'react-hook-form';
import { MainCalculatorInputs } from '@/lib/schemas';

export default function CalculatorForm() {
  const { inputs, setInput } = useRoyalCalcStore();
  const { register, handleSubmit } = useForm<MainCalculatorInputs>({
    defaultValues: {
      investmentAmountUSD: inputs.investmentAmountUSD,
      stakingDurationYears: String(inputs.stakingDurationYears) as any,
      projectedAnnualReturnRate: inputs.projectedAnnualReturnRate,
    },
  });

  const onSubmit = (data: MainCalculatorInputs) => {
    setInput('investmentAmountUSD', data.investmentAmountUSD);
    setInput('stakingDurationYears', data.stakingDurationYears);
    setInput('projectedAnnualReturnRate', data.projectedAnnualReturnRate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Investment Amount (USD)</label>
        <input type="number" step="0.01" className="w-full border rounded p-2" {...register('investmentAmountUSD', { valueAsNumber: true })} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Staking Duration (years)</label>
        <select className="w-full border rounded p-2" {...register('stakingDurationYears')}> 
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Projected Annual Return Rate (%)</label>
        <input type="number" step="0.01" className="w-full border rounded p-2" {...register('projectedAnnualReturnRate', { valueAsNumber: true })} />
      </div>

      <button type="submit" className="bg-royal-gold text-brand_white px-4 py-2 rounded w-full hover:opacity-90">Calculate</button>
    </form>
  );
} 