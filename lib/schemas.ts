import { z } from 'zod';

export const MainCalculatorInputsSchema = z.object({
  investmentAmountUSD: z
    .number({ required_error: 'Investment amount is required' })
    .positive('Investment must be positive'),
  stakingDurationYears: z.enum(['1', '2']).transform(Number),
  projectedAnnualReturnRate: z
    .number({ required_error: 'Return rate is required' })
    .min(0, 'Minimum 0%')
    .max(100, 'Maximum 100%'),
});

export type MainCalculatorInputs = z.infer<typeof MainCalculatorInputsSchema>; 