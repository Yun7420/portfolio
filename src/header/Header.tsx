import { MaterialIcon } from '../shared/components/MaterialIcon'
import { useSectionNav } from './hooks/useSectionNav'
import { navItems } from './navItems'

export function Header() {
  const { open, toggleMenu, scrollTo } = useSectionNav()

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-surface/90 backdrop-blur-md">
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
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="rounded-md px-3 py-2 font-sans text-xs font-medium uppercase tracking-wider text-zinc-400 transition hover:bg-white/4 hover:text-zinc-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 text-zinc-300 lg:hidden"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <MaterialIcon name={open ? 'close' : 'menu'} className="text-[22px]" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/6 bg-surface/98 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="rounded-lg px-3 py-3 text-left font-sans text-sm font-medium text-zinc-300 hover:bg-white/4 hover:text-zinc-100"
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
