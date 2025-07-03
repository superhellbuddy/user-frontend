import { useMemo } from 'react'
import { getCurrentBrand, type BrandInfo } from '../config/brandConfig'

export function useBrand(): BrandInfo {
  const brand = useMemo(() => {
    return getCurrentBrand()
  }, [])
  
  return brand
} 