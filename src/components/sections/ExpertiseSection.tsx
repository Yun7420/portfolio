import { personal } from '../../data/resume'
import { MaterialIcon } from '../MaterialIcon'
import { SectionHeading } from '../SectionHeading'

const iconFor = (skill: string) => {
  const key = skill.toLowerCase()
  if (key.includes('html')) return 'language'
  if (key.includes('css')) return 'format_paint'
  if (key.includes('javascript')) return 'data_object'
  if (key.includes('typescript')) return 'integration_instructions'
  if (key.includes('next')) return 'rocket_launch'
  if (key.includes('react')) return 'widgets'
  if (key.includes('vue')) return 'view_quilt'
  if (key.includes('flutter')) return 'flutter_dash'
  return 'deployed_code'
}

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="border-b border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          description="이력서에 명시된 기술 스택을 기준으로 구성했습니다."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {personal.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-zinc-900/35 px-4 py-4 transition hover:border-sky-500/20 hover:bg-zinc-900/55"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500/90">
                <MaterialIcon name={iconFor(skill)} />
              </span>
              <span className="font-sans text-sm font-medium text-zinc-200">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
