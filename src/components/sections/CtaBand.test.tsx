import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline and phone link', () => {
    render(<CtaBand headline="Ready to help?" subheadline="Call us today." />)
    expect(screen.getByText('Ready to help?')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'tel:5550000000')
  })
})
