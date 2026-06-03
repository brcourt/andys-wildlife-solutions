import { getServiceBySlug } from '../data/services'
import { ServicePage } from './ServicePage'

const service = getServiceBySlug('snake-removal')!

export function SnakeRemoval() {
  return <ServicePage service={service} />
}
