import { getServiceBySlug } from '../data/services'
import { ServicePage } from './ServicePage'

const service = getServiceBySlug('rodent-control')!

export function RodentControl() {
  return <ServicePage service={service} />
}
