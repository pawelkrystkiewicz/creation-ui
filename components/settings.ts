import { ElementColor } from './types'

export const settings = {
  roundness: {
    default: 'rounded',
    max: 'rounded-3xl',
  },
  color: 'blue' as ElementColor,
  shadow: 'shadow-lg',
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
}

// https://tailwindcss.com/docs/responsive-design
// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
