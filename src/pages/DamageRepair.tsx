import { getServiceBySlug } from '../data/services'
import { ServicePage } from './ServicePage'

const service = getServiceBySlug('damage-repair')!

export function DamageRepair() {
  return <ServicePage service={service} />
}
