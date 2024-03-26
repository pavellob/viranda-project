import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-indigo-500 hover:bg-indigo-200'
      : 'bg-indigo-500 text-white hover:bg-indigo-200',
  )


  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        <span className="relative top-px" {...props}>{children}</span>
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
        <span className="relative top-px" {...props}>{children}</span>
    </Link>
  )
}
