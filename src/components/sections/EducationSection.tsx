import { educationEntries } from '../../data/resume'
import { SectionHeading } from '../SectionHeading'

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Education"
          description="학위 과정과 직무 교육 이수 이력입니다."
        />

        <ul className="mt-6 w-full space-y-4">
          {educationEntries.map((e) => (
            <li
              key={`${e.institution}-${e.period}`}
              className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/35 px-5 py-4 sm:px-6 sm:py-5"
            >
              <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-base font-semibold text-zinc-100 sm:text-lg">
                    {e.institution}
                  </p>
                  <p className="font-sans mt-1 text-sm text-zinc-400">{e.program}</p>
                </div>
                <p className="font-sans shrink-0 text-xs font-medium uppercase tracking-wider text-sky-500/85 sm:text-right">
                  {e.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
