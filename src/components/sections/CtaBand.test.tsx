import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline and phone link', () => {
    render(<MemoryRouter><CtaBand headline="Ready to help?" subheadline="Call us today." /></MemoryRouter>)
    expect(screen.getByText('Ready to help?')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'tel:5550000000')
  })
})
