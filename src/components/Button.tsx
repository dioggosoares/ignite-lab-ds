import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
  children: string
  asChild?: boolean
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'outline'
    | 'disabled'
}

export function Button({
  children,
  asChild = false,
  variant = 'primary',
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'px-4 py-3 rounded font-semibold text-sm w-full transition-all duration-300 ease-in-out',
        {
          'bg-cyan-500 hover:bg-cyan-300 text-black focus:outline-none focus:ring-2 ring-white':
            variant === 'primary',
          'bg-gray-400 hover:bg-gray-200 text-black focus:outline-none focus:ring-2 ring-white':
            variant === 'secondary',
          'bg-transparent text-cyan-500 hover:text-gray-100':
            variant === 'tertiary',
          'bg-danger-500 hover:bg-danger-300 text-gray-100 focus:outline-none focus:ring-2 ring-white':
            variant === 'danger',
          'bg-transparent border border-cyan-500 text-cyan-500 hover:text-gray-100 focus:outline-none focus:ring-2 ring-white':
            variant === 'outline',
          'bg-cyan-500 text-black opacity-10 cursor-not-allowed':
            variant === 'disabled',
        },
      )}
    >
      {children}
    </Comp>
  )
}
