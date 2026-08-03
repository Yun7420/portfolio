type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl">
      {eyebrow ? (
        <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-sky-400/90">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-sans text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl ${eyebrow ? 'mt-3' : ''}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="font-sans mt-4 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </header>
  )
}
