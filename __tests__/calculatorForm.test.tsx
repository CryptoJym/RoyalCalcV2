import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CalculatorForm from '../components/core/CalculatorForm'

describe('CalculatorForm validation', () => {
  it('shows error for negative investment amount', async () => {
    render(<CalculatorForm />)
    const amountInput = screen.getByLabelText(/investment amount/i)
    fireEvent.change(amountInput, { target: { value: '-5' } })
    fireEvent.click(screen.getByRole('button', { name: /calculate/i }))

    expect(await screen.findByText(/investment must be positive/i)).toBeInTheDocument()
  })
})
