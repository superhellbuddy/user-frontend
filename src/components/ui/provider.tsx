"use client"

import { ThemeProvider } from "../../themes/ThemeProvider"
import { ColorModeProvider } from "./color-mode"
import { type ReactNode } from "react"

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
