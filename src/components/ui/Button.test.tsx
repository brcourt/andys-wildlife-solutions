import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Button } from './Button'

describe('Button', () => {
  it('renders as an anchor tag with href when href prop provided', () => {
    render(<Button href="tel:5550000000" variant="primary">Call Now</Button>)
    expect(screen.getByRole('link', { name: 'Call Now' })).toHaveAttribute('href', 'tel:5550000000')
  })

  it('renders as a button element when no href provided', () => {
    render(<Button variant="primary">Submit</Button>)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('renders as a RouterLink when to prop provided', () => {
    render(
      <MemoryRouter>
        <Button to="/services" variant="secondary">View Services</Button>
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'View Services' })).toBeInTheDocument()
  })
})
