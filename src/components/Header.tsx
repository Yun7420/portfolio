import { useCallback, useState } from 'react'
import { MaterialIcon } from './MaterialIcon'

const nav = [
  { id: 'overview', label: 'Overview' },
  { id: 'expertise', label: 'Skills' },
  { id: 'experience', label: 'Career' },
  { id: 'work', label: 'Career Description' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'connect', label: 'Links' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] border-sky-950/20 bg-[#070b14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => scrollTo('overview')}
          className="font-sans text-left text-lg font-semibold tracking-tight text-zinc-100 transition hover:text-sky-300"
        >
          Portfolio
        </button>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="rounded-md px-3 py-2 font-sans text-xs font-medium uppercase tracking-wider text-zinc-400 transition hover:bg-white/[0.04] hover:text-zinc-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-300 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <MaterialIcon name={open ? 'close' : 'menu'} className="text-[22px]" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] border-sky-950/20 bg-[#070b14]/98 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Primary">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="rounded-lg px-3 py-3 text-left font-sans text-sm font-medium text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
