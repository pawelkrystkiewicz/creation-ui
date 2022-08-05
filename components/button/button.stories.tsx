import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '@components/button/button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
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
