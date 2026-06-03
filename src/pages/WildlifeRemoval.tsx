import { getServiceBySlug } from '../data/services'
import { ServicePage } from './ServicePage'

const service = getServiceBySlug('wildlife-removal')!

export function WildlifeRemoval() {
  return <ServicePage service={service} />
}
