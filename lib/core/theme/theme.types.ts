import {
  Breakpoints,
  ElementColor,
  ElementPosition,
  ElementSize,
  ElementTheme,
  ElementVariants,
  AutocompleteOptionsType,
} from '@cui/core'

export type Theme = {
  theme: ElementTheme
  /**
   * @default 'ltr'
   * rtl is not supported yet
   */
  dir: 'ltr' | 'rtl'
  focusRing: boolean
  dates: {
    format: string
    locale: string
  }
  /**
   * "white" color HEX
   */
  white: string
  /**
   * "black" color HEX
   */
  black: string
  defaultRoundness: string
  defaultSize: ElementSize
  defaultDrawerSize: number | string
  defaultDrawerPosition: ElementPosition
  defaultVariant: ElementVariants
  leading: string
  fontFamily: string
  fontFamilyMonospace: string
  primaryColor: ElementColor
  respectReducedMotion: boolean
  headings: {
    fontFamily: string
    fontWeight: string
    sizes: Record<Headings, HeadingConfig>
  }
  breakpoints: Record<Breakpoints, number>
  defaultTexts: {
    invalidInput: string
  }
  zIndex: {
    base: string
    dropdowns: string
    tooltips: string
    overlays: string
    modals: string
    notifications: string
  }
  f: {
    getLimitTextDefault: (more: number) => string
    defaultOptionFormatter: (option?: AutocompleteOptionsType) => string
  }
}

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingConfig = {
  fontSize: string
  leading: string
  fontWeight?: string
}

export interface ThemeProviderProps {
  children?: React.ReactNode
  value: Theme
}
