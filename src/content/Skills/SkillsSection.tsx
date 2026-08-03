import { MaterialIcon } from '../../shared/components/MaterialIcon'
import { SectionHeading } from '../../shared/components/SectionHeading'
import { iconForSkill } from './skillIcon'
import { skillGroups } from './skills.data'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-white/6 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          description="이력서에 명시된 기술 스택을 용도별로 묶어 정리했습니다."
        />
        <div className="rounded-2xl border border-white/8 bg-zinc-900/35 px-5 py-2 sm:px-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-x-8 gap-y-3 border-t border-white/6 py-5 first:border-t-0 sm:grid-cols-[minmax(0,10rem)_1fr] sm:py-6"
            >
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-zinc-200">
                  {group.category}
                </h3>
                <p className="font-sans mt-1 text-xs leading-snug text-zinc-500">
                  {group.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-black/20 py-1.5 pl-2.5 pr-3.5 transition hover:border-sky-500/25 hover:bg-black/35"
                  >
                    <MaterialIcon
                      name={iconForSkill(item)}
                      className="text-[16px]! shrink-0 text-sky-500/80"
                    />
                    <span className="font-sans text-sm font-medium text-zinc-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
