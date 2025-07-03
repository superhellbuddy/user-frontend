import { createSystem } from "@chakra-ui/react"

export const blueClaimsTheme = createSystem({}, {
  theme: {
    tokens: {
      colors: {
        // Brand colors - expanded blue palette
        brand: {
          50: { value: "#EFF6FF" },   // Very light blue
          100: { value: "#DBEAFE" },  // Light blue
          200: { value: "#BFDBFE" },  // Lighter blue
          300: { value: "#93C5FD" },  // Light blue
          400: { value: "#60A5FA" },  // Medium light blue
          500: { value: "#3B82F6" },  // Primary blue (current)
          600: { value: "#2563EB" },  // Slightly darker
          700: { value: "#1D4ED8" },  // Dark blue
          800: { value: "#1E3A8A" },  // Darker blue (current)
          900: { value: "#1E3A8A" },  // Darkest blue
        },
        // Secondary color palette
        secondary: {
          50: { value: "#F0F9FF" },
          500: { value: "#0EA5E9" },  // Sky blue
          600: { value: "#0284C7" },
          700: { value: "#0369A1" },
        },
        // Accent color palette  
        accent: {
          50: { value: "#F0F9FF" },
          500: { value: "#06B6D4" },  // Cyan accent
          600: { value: "#0891B2" },
          700: { value: "#0E7490" },
        },
        // Status colors
        success: {
          50: { value: "#ECFDF5" },
          500: { value: "#10B981" },
          600: { value: "#059669" },
          700: { value: "#047857" },
        },
        warning: {
          50: { value: "#FFFBEB" },
          500: { value: "#F59E0B" },
          600: { value: "#D97706" },
          700: { value: "#B45309" },
        },
        error: {
          50: { value: "#FEF2F2" },
          500: { value: "#EF4444" },
          600: { value: "#DC2626" },
          700: { value: "#B91C1C" },
        },
        // Comprehensive gray scale (cooler grays for blue theme)
        gray: {
          50: { value: "#F8FAFC" },
          100: { value: "#F1F5F9" },
          200: { value: "#E2E8F0" },
          300: { value: "#CBD5E1" },
          400: { value: "#94A3B8" },
          500: { value: "#64748B" },
          600: { value: "#475569" },
          700: { value: "#334155" },
          800: { value: "#1E293B" },
          900: { value: "#0F172A" },
        },
      },
      fonts: {
        heading: { value: `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` },
        body: { value: `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` },
        mono: { value: `ui-monospace, 'Cascade Code', Consolas, 'Courier New', monospace` },
      },
      fontWeights: {
        light: { value: 300 },
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 },
        extrabold: { value: 800 },
      },
      fontSizes: {
        xs: { value: "0.75rem" },     // 12px
        sm: { value: "0.875rem" },    // 14px  
        md: { value: "1rem" },        // 16px
        lg: { value: "1.125rem" },    // 18px
        xl: { value: "1.25rem" },     // 20px
        "2xl": { value: "1.5rem" },   // 24px
        "3xl": { value: "1.875rem" }, // 30px
        "4xl": { value: "2.25rem" },  // 36px
        "5xl": { value: "3rem" },     // 48px
      },
      lineHeights: {
        tight: { value: 1.25 },
        normal: { value: 1.5 },
        relaxed: { value: 1.625 },
      },
      // Spacing and layout (slightly different from ResolveMyClaim)
      radii: {
        sm: { value: "0.25rem" },     // 4px - more angular
        md: { value: "0.375rem" },    // 6px
        lg: { value: "0.5rem" },      // 8px
        xl: { value: "0.75rem" },     // 12px
        "2xl": { value: "1rem" },     // 16px
        full: { value: "9999px" },
      },
      shadows: {
        sm: { value: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" },
        md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
        lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
        xl: { value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }, // More dramatic shadow
      },
    },
    semanticTokens: {
      colors: {
        // Text colors
        "text.primary": { value: "{colors.gray.900}" },
        "text.secondary": { value: "{colors.gray.600}" },
        "text.muted": { value: "{colors.gray.500}" },
        "text.inverse": { value: "white" },
        
        // Background colors
        "bg.primary": { value: "white" },
        "bg.secondary": { value: "{colors.gray.50}" },
        "bg.muted": { value: "{colors.gray.100}" },
        "bg.inverse": { value: "{colors.gray.900}" },
        
        // Border colors
        "border.primary": { value: "{colors.gray.200}" },
        "border.secondary": { value: "{colors.gray.300}" },
        "border.focus": { value: "{colors.brand.500}" },
        
        // Button semantic tokens
        "button.primary.bg": { value: "{colors.brand.500}" },
        "button.primary.hover": { value: "{colors.brand.600}" },
        "button.primary.active": { value: "{colors.brand.700}" },
        "button.primary.text": { value: "white" },
        
        "button.secondary.bg": { value: "transparent" },
        "button.secondary.hover": { value: "{colors.brand.50}" },
        "button.secondary.active": { value: "{colors.brand.100}" },
        "button.secondary.text": { value: "{colors.brand.600}" },
        "button.secondary.border": { value: "{colors.brand.500}" },
        
        // Form input semantic tokens
        "input.bg": { value: "white" },
        "input.border": { value: "{colors.gray.300}" },
        "input.focus": { value: "{colors.brand.500}" },
        "input.placeholder": { value: "{colors.gray.400}" },
        "input.disabled": { value: "{colors.gray.100}" },
        
        // Status semantic tokens
        "status.success": { value: "{colors.success.500}" },
        "status.warning": { value: "{colors.warning.500}" },
        "status.error": { value: "{colors.error.500}" },
        "status.info": { value: "{colors.brand.500}" },
      },
    },
  },
}) 