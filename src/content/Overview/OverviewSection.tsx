import { MaterialIcon } from '../../shared/components/MaterialIcon'
import { personal } from '../../shared/data/personal'
import { mapsSearchUrl, telHref } from './utils/contactLinks'

/** 뱃지 외곽: 본문 + 오른쪽 액션 슬롯 */
const badgeShell =
  'flex min-h-[42px] w-full max-w-md min-w-[min(100%,17.5rem)] items-center gap-2 rounded-full border border-white/8 bg-zinc-900/40 py-1.5 pl-3.5 pr-1.5 text-sm text-zinc-400 sm:w-auto'

/** 경력: 다른 뱃지와 동일 톤, 너비는 내용만큼만 (불필요한 가로 확장 없음) */
const careerShell =
  'inline-flex max-w-full min-h-[42px] items-center gap-5 rounded-full border border-white/8 bg-zinc-900/40 py-1.5 pl-3.5 pr-3.5 text-sm text-zinc-400 sm:gap-6'

/** 소개 문단에서 안내하는 기술 블로그 (Links 섹션과 동일 주소) */
const blogUrl = 'https://hsy742010.tistory.com/'

const actionIconClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/7 hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface'

export function OverviewSection() {
  const phoneLink = telHref(personal.phone)
  const mapUrl = mapsSearchUrl(personal.location)

  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-white/6 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.14),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-sky-400/90">
          Frontend Developer
        </p>
        <h1 className="font-sans mt-6 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
          {personal.nameKo}
          <span className="mt-2 block text-2xl font-medium text-zinc-500 sm:text-3xl">
            {personal.nameEn}
          </span>
        </h1>
        <p className="font-sans mt-8 max-w-xl text-base leading-relaxed text-zinc-400">
          {personal.tagline}
        </p>

        <ul className="font-sans mt-10 flex list-none flex-col flex-wrap gap-3 p-0 text-sm sm:flex-row sm:items-center">
          <li className="shrink-0">
            <div className={careerShell}>
              <span className="inline-flex items-center gap-2">
                <MaterialIcon
                  name="work_history"
                  className="text-[18px]! shrink-0 text-sky-500/80"
                />
                <span className="text-zinc-400">
                  경력 {personal.totalExperience}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-medium text-sky-300/95">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                  aria-hidden
                />
                {personal.employmentStatus}
              </span>
            </div>
          </li>

          <li className="shrink-0">
            <div className={badgeShell}>
              <MaterialIcon
                name="location_on"
                className="text-[18px]! shrink-0 text-sky-500/80"
              />
              <span className="min-w-0 flex-1 truncate text-zinc-300">
                {personal.location}
              </span>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={actionIconClass}
                title="지도에서 위치 보기"
                aria-label="지도에서 위치 보기"
              >
                <MaterialIcon name="map" className="text-[20px]!" />
              </a>
            </div>
          </li>

          <li className="shrink-0">
            <div className={badgeShell}>
              <MaterialIcon
                name="mail"
                className="text-[18px]! shrink-0 text-sky-500/80"
              />
              <span className="min-w-0 flex-1 truncate text-zinc-300">
                {personal.email}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className={actionIconClass}
                title="이메일 보내기"
                aria-label="이메일 보내기"
              >
                <MaterialIcon name="send" className="text-[20px]!" />
              </a>
            </div>
          </li>

          <li className="shrink-0">
            <div className={badgeShell}>
              <MaterialIcon
                name="smartphone"
                className="text-[18px]! shrink-0 text-sky-500/80"
              />
              <span className="min-w-0 flex-1 truncate text-zinc-300">
                {personal.phone}
              </span>
              {phoneLink ? (
                <a
                  href={phoneLink}
                  className={actionIconClass}
                  title="전화 걸기"
                  aria-label="전화 걸기"
                >
                  <MaterialIcon name="call" className="text-[20px]!" />
                </a>
              ) : (
                <span
                  className={`${actionIconClass} pointer-events-none opacity-40`}
                  aria-hidden
                >
                  <MaterialIcon name="call" className="text-[20px]!" />
                </span>
              )}
            </div>
          </li>
        </ul>

        <div className="mt-14 rounded-2xl border border-white/8 bg-zinc-900/35 p-6 ring-1 ring-white/4 sm:p-8">
          <p className="font-sans text-[15px] leading-[1.85] text-zinc-400">
            모르는 것을 아는 척 넘기지 않고, 머릿속에 그림이 그려질 때까지 파고든 뒤
            그 과정을 기록으로 남기는 프론트엔드 개발자입니다.
          </p>
          <p className="font-sans mt-6 text-[15px] leading-[1.85] text-zinc-400">
            아키텍처 비교 분석(Turbo vs Module Federation), 입력 검증(Zod) 도입, 성능 최적화,
            배포 인프라(nginx·HTTPS) 구성 등 실무에서 부딪힌 문제를 기술 일기로 정리해
            팀과 공유하고 개인 블로그에 꾸준히 기록하고 있습니다.
          </p>
          <p className="font-sans mt-6 text-[15px] leading-[1.85] text-zinc-400">
            AI 도구를 적극 활용하되 &ldquo;가벼워진다&rdquo;는 통설을 그대로 믿지 않고 번들 크기를
            직접 측정해 확인하는 등, &lsquo;왜&rsquo;를 스스로 검증하는 습관을 유지합니다.
          </p>
          <p className="font-sans mt-6 flex flex-wrap items-center gap-1.5 text-[15px] text-zinc-400">
            <MaterialIcon
              name="play_arrow"
              className="text-[16px]! text-sky-500/75"
            />
            기술 블로그:
            <a
              href={blogUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sky-400/90 transition hover:text-sky-300"
            >
              {blogUrl.replace(/^https?:\/\//, '')}
              <MaterialIcon name="arrow_outward" className="text-[14px]!" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
