import { getCurrentBrand } from '../config/brandConfig'

export function getBrandFromSubdomain(): string {
    const brand = getCurrentBrand()
    return brand.id
}