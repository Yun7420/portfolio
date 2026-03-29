import { jobs } from '../../data/resume'
import { MaterialIcon } from '../MaterialIcon'
import { SectionHeading } from '../SectionHeading'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Career"
          description="근무 기간과 담당 업무를 요약했습니다."
        />
        <ol className="relative space-y-12 border-l border-white/[0.08] pl-8 sm:pl-10">
          {jobs.map((job, i) => (
            <li key={`${job.company}-${i}`} className="relative">
              <span
                className="absolute -left-[9px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-sky-500/70 bg-[#070b14] sm:-left-[11px]"
                aria-hidden
              />
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/35 p-6 sm:p-8">
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
                    className="!text-[14px] text-zinc-500"
                  />
                  {job.location}
                </p>
                <p className="font-sans mt-5 text-sm leading-relaxed text-zinc-400">
                  {job.summary}
                </p>
                <ul className="font-sans mt-6 space-y-3 text-sm text-zinc-400">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <MaterialIcon
                        name="check_circle"
                        className="mt-0.5 shrink-0 !text-[18px] text-sky-600/70"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
