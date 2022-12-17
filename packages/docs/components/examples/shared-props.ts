import { ELEMENT_SIZES, ELEMENT_STATUS } from '@creation-ui/core'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'

export const sizeProp: DocumentedProperty = {
  name: 'size',
  type: ListOrTypes([...ELEMENT_SIZES]),
  defaultValue: 'md',
  description: 'Size of element',
}

export const labelProp: DocumentedProperty = {
  description: 'Label',
  name: 'label',
  type: 'React.ReactNode',
}

export const statusProp: DocumentedProperty = {
  description: 'Status',
  name: 'status',
  type: ListOrTypes([...ELEMENT_STATUS, 'undefined']),
}

export const openProp: DocumentedProperty = {
  description: 'Is component visible',
  name: 'open',
  type: 'boolean',
  defaultValue: 'false',
}

export const elementTypeProp: DocumentedProperty = {
  description: 'ElementType of the component',
  name: 'as',
  type: 'React.ElementType',
  defaultValue: 'h3',
}
export const childrenProp: DocumentedProperty = {
  description: 'Children to be rendered inside the component',
  name: 'children',
  type: 'React.ReactNode',
}
