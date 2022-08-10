import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ELEMENT_SIZES } from '@components/types'
import Switch from './switch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Checkbox',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { size: { control: { type: 'select', options: ELEMENT_SIZES } } },
} as ComponentMeta<typeof Switch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CheckboxTemplate: ComponentStory<typeof Switch> = args => <Switch {...args} />

export const Template = (CheckboxTemplate.bind({}).args = {})
export const Large = (CheckboxTemplate.bind({}).args = { size: 'lg' })
export const Small = (CheckboxTemplate.bind({}).args = { size: 'sm' })
