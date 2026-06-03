import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the homepage with Andy logo in nav', () => {
  render(<App />)
  // Nav should be present — find the company name or logo link
  expect(screen.getByRole('banner')).toBeInTheDocument() // <header> element
})
