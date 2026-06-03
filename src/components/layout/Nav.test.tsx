import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Nav } from './Nav'

describe('Nav', () => {
  it('renders the company name and phone number', () => {
    render(<MemoryRouter><Nav /></MemoryRouter>)
    expect(screen.getByText(/Andy's Wildlife Solutions/i)).toBeInTheDocument()
    expect(screen.getByText(/555.*000.*0000/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<MemoryRouter><Nav /></MemoryRouter>)
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    render(<MemoryRouter><Nav /></MemoryRouter>)
    const hamburger = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
    await userEvent.click(hamburger)
    expect(screen.getByRole('navigation', { name: 'Mobile menu' })).toBeInTheDocument()
  })
})
