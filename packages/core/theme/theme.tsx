import { createContext, useContext } from 'react'
import theme from './theme.default'
import { Theme, ThemeProviderProps } from './theme.types'

export const ThemeCtx = createContext<Theme>(theme)

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeCtx)
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}
