import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '../components/Checkbox'
import { Text } from '../components/Text'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label htmlFor="remember" className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
