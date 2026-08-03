import { MaterialIcon } from '../../shared/components/MaterialIcon'
import { SectionHeading } from '../../shared/components/SectionHeading'
import { jobs } from './career.data'

export function CareerSection() {
  return (
    <section
      id="career"
      className="border-b border-white/6 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Career"
          description="근무 기간과 담당 업무를 요약했습니다."
        />
        <ol className="space-y-12">
          {jobs.map((job, i) => (
            <li key={`${job.company}-${i}`}>
              <div className="rounded-2xl border border-white/8 bg-zinc-900/35 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-xl font-semibold text-zinc-100">
                    {job.company}
                  </h3>
                  <time className="font-sans text-xs font-medium uppercase tracking-wider text-sky-500/85">
                    {job.period}
                  </time>
                </div>
                <p className="font-sans mt-1 text-sm text-zinc-500">
                  {job.team} · {job.title}
                </p>
                <p className="font-sans mt-1 flex items-center gap-1 text-xs text-zinc-600">
                  <MaterialIcon
                    name="place"
                    className="text-[14px]! text-zinc-500"
                  />
                  {job.location}
                </p>
                {job.summary ? (
                  <p className="font-sans mt-5 text-sm leading-relaxed text-zinc-400">
                    {job.summary}
                  </p>
                ) : null}
                <div className="mt-6 space-y-6">
                  {job.highlights.map((group, gi) => (
                    <div key={group.title ?? `group-${gi}`}>
                      {group.title ? (
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-sky-200/90">
                          {group.title}
                        </h4>
                      ) : null}
                      <ul
                        className={`font-sans space-y-3 text-sm text-zinc-400 ${group.title ? 'mt-3' : ''}`}
                      >
                        {group.items.map((h) => (
                          <li key={h} className="flex gap-2">
                            <MaterialIcon
                              name="check_circle"
                              className="mt-0.5 shrink-0 text-[18px]! text-sky-600/70"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
