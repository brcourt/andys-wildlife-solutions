import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders h1 "Frequently Asked Questions"', () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Frequently Asked Questions')
  })

  it('renders first FAQ question "How much does wildlife removal cost?"', () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    )
    expect(screen.getByText('How much does wildlife removal cost?')).toBeInTheDocument()
  })

  it('clicking the first question reveals its answer', async () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', { name: /How much does wildlife removal cost?/ })
    await userEvent.click(button)
    expect(screen.getByText(/Pricing depends on the animal/)).toBeInTheDocument()
  })

  it('clicking an open question again hides the answer', async () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', { name: /How much does wildlife removal cost?/ })
    await userEvent.click(button)
    expect(screen.getByText(/Pricing depends on the animal/)).toBeInTheDocument()
    await userEvent.click(button)
    expect(screen.queryByText(/Pricing depends on the animal/)).not.toBeInTheDocument()
  })
})
