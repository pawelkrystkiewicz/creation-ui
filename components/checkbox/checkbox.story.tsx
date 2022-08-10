import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ELEMENT_SIZES } from '@components/types'
import Checkbox from './checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: { size: { control: { type: 'select', options: ELEMENT_SIZES } } },
} as ComponentMeta<typeof Checkbox>

const CheckboxTemplate: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const Small = (CheckboxTemplate.bind({}).args = { size: 'sm' })
export const Medium = (CheckboxTemplate.bind({}).args = { size: 'md' })
export const Large = (CheckboxTemplate.bind({}).args = { size: 'lg' })
