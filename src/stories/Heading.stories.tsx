import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '../components/Heading'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nisi quaerat ducimus! Architecto possimus expedita nemo molestiae dolorem nam, deserunt laudantium iure quidem inventore eos amet tempora porro at? Eum!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
