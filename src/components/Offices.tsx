import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Phuket" invert={invert}>
          14/58 Ekandaburi
          <br />
          83130, Phuket, Chalong, Thailand
        </Office>
      </li>
      <li>
        <Office name="Saint-Petersburg" invert={invert}>
          Гатчинская 28, БЦ "Печатный двор", 5к306
          <br />
          197110, Санкт-Петербург, Россия
        </Office>
      </li>
    </ul>
  )
}