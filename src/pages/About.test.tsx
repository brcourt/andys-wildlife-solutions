import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { About } from './About'

describe('About', () => {
  it('renders h1 with "About Andy\'s Wildlife Solutions"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Andy\'s Wildlife Solutions')
  })

  it('renders h2 "Our Story"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 2, name: /Our Story/ })).toBeInTheDocument()
  })

  it('renders h2 "What We Stand For"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 2, name: /What We Stand For/ })).toBeInTheDocument()
  })

  it('renders phone link with correct href', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const phoneLink = screen.getByRole('link', { name: /Call/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:3177906240')
  })
})
