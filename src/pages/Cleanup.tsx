import { getServiceBySlug } from '../data/services'
import { ServicePage } from './ServicePage'

const service = getServiceBySlug('cleanup')!

export function Cleanup() {
  return <ServicePage service={service} />
}
