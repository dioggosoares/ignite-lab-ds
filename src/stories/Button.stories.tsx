import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '../components/Button'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Label',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'danger',
        'outline',
        'disabled',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'disabled',
  },
}
