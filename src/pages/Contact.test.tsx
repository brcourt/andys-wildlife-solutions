import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders h1 "Contact Andy\'s Wildlife Solutions"', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Contact Andy's Wildlife Solutions"
    )
  })

  it('renders phone link with href="tel:5550000000"', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )
    const phoneLink = screen.getByRole('link', { name: /\(555\) 000-0000/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:5550000000')
  })

  it('renders form with name, phone, and message fields', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /phone/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
  })

  it('renders submit button with text "Send Message"', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })
})
