// Simple brand configuration for logos, text, and company info
export interface BrandInfo {
  id: string
  name: string
  logos: {
    primary: string
  }
  domains: string[]
}

// ResolveMyClaim brand configuration
export const resolveMyClaimBrand: BrandInfo = {
  id: 'resolvemyclaim',
  name: 'ResolveMyClaim',
  logos: {
    primary: '/assets/brands/resolvemyclaim/logo-primary.png',
  },
  domains: ['resolvemyclaim.co.uk', 'resolvemyclaim.com', 'localhost'],
}

// BlueClaims brand configuration
export const blueClaimsBrand: BrandInfo = {
  id: 'blueclaims',
  name: 'BlueClaims',
  logos: {
    primary: '/assets/brands/blueclaims/logo-primary.png',
  },
  domains: ['blueclaims.com', 'blueclaims.co.uk'],
}

// Brand registry
export const brands: Record<string, BrandInfo> = {
  resolvemyclaim: resolveMyClaimBrand,
  blueclaims: blueClaimsBrand,
}

// Helper function to get current brand based on domain
export function getCurrentBrand(): BrandInfo {
  try {
    const hostname = window.location.hostname
    
    // Find brand that matches current domain
    const brand = Object.values(brands).find(b => 
      b.domains.some(domain => 
        hostname === domain || 
        hostname.includes(domain.split('.')[0]) ||
        hostname.endsWith(`.${domain}`)
      )
    )
    
    return brand || resolveMyClaimBrand // Default fallback
  } catch {
    // Fallback for SSR or when window is not available
    return resolveMyClaimBrand
  }
}

// Helper to get brand by ID
export function getBrandById(brandId: string): BrandInfo {
  return brands[brandId] || resolveMyClaimBrand
} 