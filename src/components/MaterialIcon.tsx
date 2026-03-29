type MaterialIconProps = {
  name: string
  className?: string
  'aria-hidden'?: boolean
}

export function MaterialIcon({
  name,
  className = '',
  'aria-hidden': ariaHidden = true,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  )
}
