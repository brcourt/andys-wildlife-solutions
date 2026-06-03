import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { WildlifeRemoval } from './WildlifeRemoval'
import { SnakeRemoval } from './SnakeRemoval'
import { RodentControl } from './RodentControl'
import { DamageRepair } from './DamageRepair'
import { Cleanup } from './Cleanup'

describe('Service pages render without crashing', () => {
  it('WildlifeRemoval renders with correct title', () => {
    render(
      <MemoryRouter>
        <WildlifeRemoval />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Wildlife Removal')
  })

  it('SnakeRemoval renders with correct title', () => {
    render(
      <MemoryRouter>
        <SnakeRemoval />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Snake Removal')
  })

  it('RodentControl renders with correct title', () => {
    render(
      <MemoryRouter>
        <RodentControl />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Rodent Control')
  })

  it('DamageRepair renders with correct title', () => {
    render(
      <MemoryRouter>
        <DamageRepair />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Damage Repair')
  })

  it('Cleanup renders with correct title', () => {
    render(
      <MemoryRouter>
        <Cleanup />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Cleanup & Decontamination')
  })
})
