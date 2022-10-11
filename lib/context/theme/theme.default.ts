import { Theme } from './theme.types'

const theme: Theme = {
  theme: 'light',
  dir: 'ltr',
  focusRing: true,
  dates: {
    format: 'DD-MM-YYYY',
    locale: 'en',
  },
  white: '#fff',
  black: '#000',
  defaultRoundness: 'rounded-md',
  defaultSize: 'md',
  defaultVariant: 'contained',
  leading: 'leading-normal',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontFamilyMonospace: 'font-mono',
  primaryColor: 'primary',
  respectReducedMotion: true,
  defaultDrawerSize: '50vw',
  defaultDrawerPosition: 'right',
  headings: {
    fontFamily: 'font-sans',
    fontWeight: 'font-bold',
    sizes: {
      h1: { fontSize: 'text-6xl', leading: 'leading-snug' },
      h2: { fontSize: 'text-5xl', leading: 'leading-5' },
      h3: { fontSize: 'text-4xl', leading: 'leading-6' },
      h4: { fontSize: 'text-3xl', leading: 'leading-6' },
      h5: { fontSize: 'text-2xl', leading: 'leading-normal' },
      h6: { fontSize: 'text-xl', leading: 'leading-normal' },
    },
  },
  breakpoints: {
    xs: 640,
    sm: 768,
    md: 768,
    lg: 1024,
    xl: 1280,
    xl2: 1536,
  },
  defaultTexts: {
    invalidInput: 'Input invalid',
  },
  zIndex: {
    base: 'z-0',
    dropdowns: 'z-10',
    tooltips: 'z-20',
    overlays: 'z-30',
    modals: 'z-40',
    notifications: 'z-50',
  },
  f: {
    getLimitTextDefault: more => `+${more}`,
    defaultOptionFormatter: option => (option?.value ? `${option.value}` : ''),
  },
}

export default theme
