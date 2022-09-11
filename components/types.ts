export const ELEMENT_COLORS = [
  'amber',
  'blue',
  'cyan',
  'fuchsia',
  'gray',
  'green',
  'indigo',
  'lime',
  'neutral',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'sky',
  'slate',
  'stone',
  'teal',
  'yellow',
  'zinc',
]

export const ELEMENT_SIZES = ['sm', 'md', 'lg'] as const
export const ELEMENT_THEMES = ['dark', 'light'] as const
export const ELEMENT_VARIANTS = ['contained', 'outlined', 'text'] as const
export const ELEMENT_ORIENTATION = ['vertical', 'horizontal'] as const
export const ELEMENT_PLACEMENT_VERTICAL = ['top', 'bottom'] as const
export const ELEMENT_PLACEMENT_HORIZONTAL = ['right', 'left'] as const

export type ElementSize = typeof ELEMENT_SIZES[number]
export type ElementColor = typeof ELEMENT_COLORS[number]
export type ElementOrientation = typeof ELEMENT_ORIENTATION[number]
export type ElementTheme = typeof ELEMENT_THEMES[number]
export type ElementVariants = typeof ELEMENT_VARIANTS[number]
export type ElementPlacementHorizontal = typeof ELEMENT_PLACEMENT_HORIZONTAL[number]
export type ElementPlacementVertical = typeof ELEMENT_PLACEMENT_VERTICAL[number]
export type ElementPlacement = {
  horizontal: ElementPlacementHorizontal
  vertical: ElementPlacementVertical
}

export type GetComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P> ? P : never
