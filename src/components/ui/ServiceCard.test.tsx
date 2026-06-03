import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ServiceCard } from './ServiceCard'

describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(
      <MemoryRouter>
        <ServiceCard emoji="🦝" title="Wildlife Removal" description="Raccoons, squirrels, opossums" to="/services/wildlife-removal" />
      </MemoryRouter>
    )
    expect(screen.getByText('Wildlife Removal')).toBeInTheDocument()
    expect(screen.getByText('Raccoons, squirrels, opossums')).toBeInTheDocument()
  })

  it('links to the service page', () => {
    render(
      <MemoryRouter>
        <ServiceCard emoji="🦝" title="Wildlife Removal" description="Raccoons, squirrels, opossums" to="/services/wildlife-removal" />
      </MemoryRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/services/wildlife-removal')
  })
})
