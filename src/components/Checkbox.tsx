import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { clsx } from 'clsx'

export interface CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[.125rem] bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator
        className="flex items-center justify-center overflow-y-hidden"
        asChild
      >
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
