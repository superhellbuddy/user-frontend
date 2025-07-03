import { type ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { themes } from './index'
import { getBrandFromSubdomain } from '../utils/getbrand'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Get brand and apply theme
  const getBrand = () => {
    try {
      const brand = getBrandFromSubdomain()
      return brand in themes ? brand : 'resolvemyclaim'
    } catch {
      return 'resolvemyclaim'
    }
  }

  const currentBrand = getBrand()
  const theme = themes[currentBrand as keyof typeof themes] || themes.resolvemyclaim

  return (
    <ChakraProvider value={theme}>
      {children}
    </ChakraProvider>
  )
} 