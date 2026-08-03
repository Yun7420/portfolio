import { MaterialIcon } from '../../shared/components/MaterialIcon'
import { SectionHeading } from '../../shared/components/SectionHeading'
import { aboutEntries } from './about.data'

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-white/6 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About"
          description="일하면서 실제로 겪은 판단과 그 근거를 정리했습니다."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {aboutEntries.map((entry) => (
            <article
              key={entry.title}
              className="rounded-2xl border border-white/8 bg-zinc-900/35 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500/90">
                  <MaterialIcon name={entry.icon} className="text-[20px]!" />
                </span>
                <h3 className="font-sans mt-1.5 text-lg font-semibold leading-snug text-zinc-100">
                  {entry.title}
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                {entry.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="font-sans text-sm leading-[1.85] text-zinc-400"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
