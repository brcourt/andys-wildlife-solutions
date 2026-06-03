import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'

describe('Home', () => {
  it('renders the hero headline', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Wildlife Problems? We\'ve Got You Covered.')
  })

  it('renders the CtaBand headline', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 2, name: /Ready to Get Rid of the Problem\?/ })).toBeInTheDocument()
  })
})
