import Icon from '@components/icon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>

const IconTemplate: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const SearchIcon = IconTemplate.bind({})

SearchIcon.args = {
  icon: 'search',
}
