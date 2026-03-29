import { projects } from '../../data/resume'
import { MaterialIcon } from '../MaterialIcon'
import { SectionHeading } from '../SectionHeading'

export function WorkSection() {
  return (
    <section
      id="work"
      className="border-b border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Career Description"
          description="이력서에 적은 경력 기술서를 바탕으로, 프로젝트별 스택과 성과를 정리했습니다."
        />
        <div className="space-y-16">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-sky-500/10 bg-gradient-to-b from-sky-950/35 via-zinc-900/40 to-[#070b14]/80 p-6 sm:p-10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-sans text-2xl font-semibold text-zinc-50">
                    {p.name}
                  </h3>
                  {p.subtitle ? (
                    <p className="font-sans mt-1 text-sm text-zinc-500">
                      {p.subtitle}
                    </p>
                  ) : null}
                  <p className="font-sans mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <MaterialIcon
                        name="apartment"
                        className="!text-[16px] text-sky-500/75"
                      />
                      {p.client}
                    </span>
                    <span className="text-zinc-700">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MaterialIcon
                        name="calendar_month"
                        className="!text-[16px] text-sky-500/75"
                      />
                      {p.period}
                    </span>
                  </p>
                </div>
              </div>
              <p className="font-sans mt-6 border-l-2 border-sky-500/40 pl-4 text-sm leading-relaxed text-zinc-300">
                {p.role}
              </p>
              <div className="mt-8">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Tech stack
                </h4>
                <dl className="font-sans mt-4 grid gap-3 sm:grid-cols-2">
                  {p.stack.map((row) => (
                    <div
                      key={row.label}
                      className="rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3"
                    >
                      <dt className="text-xs text-zinc-600">{row.label}</dt>
                      <dd className="mt-1 text-sm text-zinc-200">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-10 space-y-8">
                {p.achievements.map((block) => (
                  <div key={block.title}>
                    <h4 className="font-sans text-sm font-medium text-sky-200/90">
                      {block.title}
                    </h4>
                    <ul className="font-sans mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex gap-2 pl-1">
                          <span className="text-sky-600/60">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
