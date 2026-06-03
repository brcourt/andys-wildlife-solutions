import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ServicePage } from './ServicePage'
import { getServiceBySlug } from '../data/services'

describe('ServicePage', () => {
  it('renders the hero headline', () => {
    const service = getServiceBySlug('wildlife-removal')
    if (!service) throw new Error('Service not found')

    render(
      <MemoryRouter>
        <ServicePage service={service} />
      </MemoryRouter>
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Wildlife Removal')
  })

  it('renders the animals label heading', () => {
    const service = getServiceBySlug('wildlife-removal')
    if (!service) throw new Error('Service not found')

    render(
      <MemoryRouter>
        <ServicePage service={service} />
      </MemoryRouter>
    )

    const headings = screen.getAllByRole('heading')
    const animalsHeading = headings.find(h => h.textContent?.includes('Animals We Remove'))
    expect(animalsHeading).toBeInTheDocument()
  })

  it('renders the process section heading', () => {
    const service = getServiceBySlug('wildlife-removal')
    if (!service) throw new Error('Service not found')

    render(
      <MemoryRouter>
        <ServicePage service={service} />
      </MemoryRouter>
    )

    const headings = screen.getAllByRole('heading')
    const processHeading = headings.find(h => h.textContent?.includes('Our Process'))
    expect(processHeading).toBeInTheDocument()
  })
})
