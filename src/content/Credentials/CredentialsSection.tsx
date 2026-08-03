import { SectionHeading } from '../../shared/components/SectionHeading'
import { credentials } from './credentials.data'

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="border-b border-white/6 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Credentials"
          description="자격 · 수상 · 면허 이력입니다."
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {credentials.map((c) => (
            <li
              key={`${c.title}-${c.period}`}
              className="rounded-xl border border-white/8 bg-zinc-900/35 px-5 py-4 sm:px-6 sm:py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-sans text-base font-semibold text-zinc-100">
                    {c.title}
                  </p>
                  <p className="font-sans mt-1 text-sm text-zinc-400">
                    {c.issuer}
                    {c.result ? ` · ${c.result}` : ''}
                  </p>
                </div>
                <p className="font-sans shrink-0 text-xs font-medium uppercase tracking-wider text-sky-500/85">
                  {c.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
