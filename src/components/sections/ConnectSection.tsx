import { personal } from '../../data/resume'
import { MaterialIcon } from '../MaterialIcon'
import { SectionHeading } from '../SectionHeading'

export function ConnectSection() {
  return (
    <section id="connect" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Links"
          description="GitHub과 블로그로 포트폴리오·기술 글을 공유하고 있습니다."
        />
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-1 items-center gap-4 rounded-2xl border border-white/[0.1] bg-zinc-900/40 px-6 py-5 transition hover:border-sky-500/25 hover:bg-zinc-900/60 sm:min-w-[240px]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-zinc-200 transition group-hover:bg-sky-500/15 group-hover:text-sky-200">
              <MaterialIcon name="code" className="!text-[24px]" />
            </span>
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-wider text-zinc-500">
                GitHub
              </p>
              <p className="font-sans mt-1 text-sm text-zinc-200">Yun7420</p>
            </div>
            <MaterialIcon
              name="arrow_outward"
              className="ml-auto !text-[20px] text-zinc-600 transition group-hover:text-sky-500/80"
            />
          </a>
          <a
            href={personal.links.blog}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-1 items-center gap-4 rounded-2xl border border-white/[0.1] bg-zinc-900/40 px-6 py-5 transition hover:border-sky-500/25 hover:bg-zinc-900/60 sm:min-w-[240px]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-zinc-200 transition group-hover:bg-sky-500/15 group-hover:text-sky-200">
              <MaterialIcon name="article" className="!text-[24px]" />
            </span>
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-wider text-zinc-500">
                Blog
              </p>
              <p className="font-sans mt-1 text-sm text-zinc-200">Tistory</p>
            </div>
            <MaterialIcon
              name="arrow_outward"
              className="ml-auto !text-[20px] text-zinc-600 transition group-hover:text-sky-500/80"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
