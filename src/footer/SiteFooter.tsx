import { personal } from '../shared/data/personal'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/6 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-sans text-xs text-zinc-600">
          © {year} {personal.nameEn}. Crafted with React & Tailwind.
        </p>
        <p className="font-sans text-xs text-zinc-700">
          Content sourced from résumé · Private contact on request
        </p>
      </div>
    </footer>
  )
}
