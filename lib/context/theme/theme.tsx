import { createContext, useContext } from 'react'
import theme from './theme.default'
import { Theme, ThemeProviderProps } from './theme.types'

const ThemeCtx = createContext<Theme>(theme)

const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeCtx)
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}

export { ThemeCtx, ThemeProvider, useTheme }
