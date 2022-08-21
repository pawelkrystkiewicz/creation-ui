import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from '.'
import Props, { AVATAR_VARIANTS } from './avatar.types'
import { ELEMENT_SIZES } from '@components/types'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: { control: { type: 'select', options: ELEMENT_SIZES } },
    variant: { control: { type: 'select', options: AVATAR_VARIANTS } },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

const defaultProps: Props = {
  variant: 'circle',
  size: 'sm',
  src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  alt: 'avatar',
}

export const Small = (Template.bind({}).args = {
  ...defaultProps,
})
export const Medium = (Template.bind({}).args = {
  ...defaultProps,
  size: 'md',
})
export const Large = (Template.bind({}).args = {
  ...defaultProps,
  size: 'lg',
})
