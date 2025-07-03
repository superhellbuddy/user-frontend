import { createSystem } from "@chakra-ui/react"

export const resolveMyClaimTheme = createSystem({}, {
  theme: {
    tokens: {
      colors: {
        // Brand colors - expanded palette
        brand: {
          50: { value: "#F0FDF7" },   // Very light green
          100: { value: "#DCFCE7" },  // Light green
          200: { value: "#BBF7D0" },  // Lighter green
          300: { value: "#86EFAC" },  // Light green
          400: { value: "#4ADE80" },  // Medium light green
          500: { value: "#1BB57C" },  // Primary green (current)
          600: { value: "#16A56B" },  // Slightly darker
          700: { value: "#0F8A5F" },  // Dark green
          800: { value: "#0A6847" },  // Darker green
          900: { value: "#0A4F3A" },  // Darkest green (current)
        },
        // Secondary color palette
        secondary: {
          50: { value: "#ECFDF5" },
          500: { value: "#059669" },  // Complementary green
          600: { value: "#047857" },
          700: { value: "#065F46" },
        },
        // Accent color palette  
        accent: {
          50: { value: "#F0FDF4" },
          500: { value: "#34D399" },  // Bright green accent
          600: { value: "#10B981" },
          700: { value: "#059669" },
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
        // Comprehensive gray scale
        gray: {
          50: { value: "#F9FAFB" },
          100: { value: "#F3F4F6" },
          200: { value: "#E5E7EB" },
          300: { value: "#D1D5DB" },
          400: { value: "#9CA3AF" },
          500: { value: "#6B7280" },
          600: { value: "#4B5563" },
          700: { value: "#374151" },
          800: { value: "#1F2937" },
          900: { value: "#111827" },
        },
      },
      fonts: {
        heading: { value: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` },
        body: { value: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` },
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
      // Spacing and layout
      radii: {
        sm: { value: "0.375rem" },    // 6px
        md: { value: "0.5rem" },      // 8px
        lg: { value: "0.75rem" },     // 12px
        xl: { value: "1rem" },        // 16px
        "2xl": { value: "1.5rem" },   // 24px
        full: { value: "9999px" },
      },
      shadows: {
        sm: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
        md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
        lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
        xl: { value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" },
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
