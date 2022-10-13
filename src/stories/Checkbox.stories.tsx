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
        <div id="Remember" className="flex items-center gap-2">
          {Story()}
          <Text size="sm" asChild>
            <label htmlFor="Remember">Lembrar de mim por 30 dias</label>
          </Text>
        </div>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
