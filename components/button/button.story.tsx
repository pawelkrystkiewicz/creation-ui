import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '@components/button/button'
import Icon from '@components/icon/icon'
import { ELEMENT_SIZES } from '@components/types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { size: { control: { type: 'select', options: ELEMENT_SIZES } } },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = ButtonTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  children: 'Button',
}

export const Secondary = ButtonTemplate.bind({})
Secondary.args = {
  variant: 'outlined',
  children: 'Button',
}

export const Large = ButtonTemplate.bind({})
Large.args = {
  size: 'lg',
  children: 'Button',
}

export const Small = ButtonTemplate.bind({})
Small.args = {
  size: 'sm',
  children: 'Button',
}

export const IconLeft = ButtonTemplate.bind({})
IconLeft.args = {
  iconLeft: <Icon icon="search" />,
  children: 'Search',
  variant: 'outlined',
}

export const IconRight = ButtonTemplate.bind({})
IconRight.args = {
  iconRight: <Icon icon="access_alarm" />,
  children: 'Alarm',
  variant: 'outlined',
}
export const IconRightAndLoading = ButtonTemplate.bind({})
IconRightAndLoading.args = {
  iconRight: <Icon icon="access_alarm" />,
  children: 'Alarm',
  variant: 'outlined',
  loading: true,
}
