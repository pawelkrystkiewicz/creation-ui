import { DocumentedProperty } from 'models/system'
import { ELEMENT_SIZES, ELEMENT_STATUS } from '@creation-ui/core'
import { ListOrTypes } from 'utils/list-or-types'

export const properties: DocumentedProperty[] = [
  {
    description: 'Label',
    name: 'label',
    type: 'React.ReactNode',
  },
  {
    description: 'Status',
    name: 'status',
    type: ListOrTypes([...ELEMENT_STATUS, 'undefined']),

  },
  {
    description: 'Size',
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
  },
]
