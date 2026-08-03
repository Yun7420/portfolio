import { MaterialIcon } from '../../shared/components/MaterialIcon'
import { SectionHeading } from '../../shared/components/SectionHeading'
import { links } from './links.data'

export function LinksSection() {
  return (
    <section id="links" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Links"
          description="GitHub·블로그와 함께, 운영 중인 서비스를 공유합니다."
        />
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-5 transition hover:border-sky-500/25 hover:bg-zinc-900/60 sm:min-w-60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/6 text-zinc-200 transition group-hover:bg-sky-500/15 group-hover:text-sky-200">
                <MaterialIcon name={item.icon} className="text-[24px]!" />
              </span>
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {item.category}
                </p>
                <p className="font-sans mt-1 text-sm text-zinc-200">
                  {item.label}
                </p>
              </div>
              <MaterialIcon
                name="arrow_outward"
                className="ml-auto text-[20px]! text-zinc-600 transition group-hover:text-sky-500/80"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
