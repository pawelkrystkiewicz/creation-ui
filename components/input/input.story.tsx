import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '.'
import { InputProps } from './input.types'
import { ELEMENT_SIZES } from '@components/types'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    size: { control: { type: 'select', options: ELEMENT_SIZES } },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

const defaultValue = 'Brown fox jumps over the lazy dog'

const defaultProps: InputProps = {
  // iconLeft: undefined, hide because icons are objects in storybook
  // iconRight: undefined,
  loading: false,
  variant: 'contained',
  size: 'sm',
  label: 'Input',
  fullWidth: false,
  helperText: undefined,
  invalidInputText: undefined,
  disabled: false,
}

export const Small = (Template.bind({}).args = {
  ...defaultProps,
  size: 'sm',
  defaultValue,
  label: 'Small input',
})

export const Medium = (Template.bind({}).args = {
  ...defaultProps,
  size: 'md',
  defaultValue,
  label: 'Medium input',
})
export const Large = (Template.bind({}).args = {
  ...defaultProps,
  size: 'lg',
  defaultValue,
  label: 'Large input',
})

export const ReadOnly = (Template.bind({}).args = {
  ...defaultProps,
  defaultValue,
  readOnly: true,
  label: 'ReadOnly default size input',
})
export const Placeholder = (Template.bind({}).args = {
  ...defaultProps,
  readOnly: false,
  placeholder: 'I am just a placeholder',
  label: 'Input with placeholder',
})
export const HelperText = (Template.bind({}).args = {
  ...defaultProps,
  size: 'md',
  readOnly: false,
  placeholder: 'E-mail',
  label: 'With helperText',
  required: true,
  helperText: 'This field is required',
})
