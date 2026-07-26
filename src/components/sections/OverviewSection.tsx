import { personal } from '../../data/resume'
import { MaterialIcon } from '../MaterialIcon'

function telHref(phone: string): string | null {
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 10) return null
  if (digits.startsWith('82')) return `tel:+${digits}`
  if (digits.startsWith('0')) return `tel:+82${digits.slice(1)}`
  return `tel:+${digits}`
}

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** 뱃지 외곽: 본문 + 오른쪽 액션 슬롯 */
const badgeShell =
  'flex min-h-[42px] w-full max-w-md min-w-[min(100%,17.5rem)] items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/40 py-1.5 pl-3.5 pr-1.5 text-sm text-zinc-400 sm:w-auto'

/** 경력: 다른 뱃지와 동일 톤, 너비는 내용만큼만 (불필요한 가로 확장 없음) */
const careerShell =
  'inline-flex max-w-full min-h-[42px] items-center gap-5 rounded-full border border-white/[0.08] bg-zinc-900/40 py-1.5 pl-3.5 pr-3.5 text-sm text-zinc-400 sm:gap-6'

const actionIconClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/[0.07] hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]'

export function OverviewSection() {
  const phoneLink = telHref(personal.phone)
  const mapUrl = mapsSearchUrl(personal.location)

  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-white/[0.06] px-5 py-24 sm:px-8 sm:py-32"
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
                  className="!text-[18px] shrink-0 text-sky-500/80"
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
                className="!text-[18px] shrink-0 text-sky-500/80"
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
                <MaterialIcon name="map" className="!text-[20px]" />
              </a>
            </div>
          </li>

          <li className="shrink-0">
            <div className={badgeShell}>
              <MaterialIcon
                name="mail"
                className="!text-[18px] shrink-0 text-sky-500/80"
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
                <MaterialIcon name="send" className="!text-[20px]" />
              </a>
            </div>
          </li>

          <li className="shrink-0">
            <div className={badgeShell}>
              <MaterialIcon
                name="smartphone"
                className="!text-[18px] shrink-0 text-sky-500/80"
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
                  <MaterialIcon name="call" className="!text-[20px]" />
                </a>
              ) : (
                <span
                  className={`${actionIconClass} pointer-events-none opacity-40`}
                  aria-hidden
                >
                  <MaterialIcon name="call" className="!text-[20px]" />
                </span>
              )}
            </div>
          </li>
        </ul>

        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-zinc-900/35 p-6 ring-1 ring-white/[0.04] sm:p-8">
          <p className="font-sans text-[15px] leading-[1.85] text-zinc-400">
            기업부설연구소에서 웹·하이브리드·Flutter 앱 프론트엔드를 담당하며,
            Next.js·React·Vite 생태계부터 Vue·Ionic·Capacitor 모바일, 모노레포·CI/CD·배포
            인프라까지 폭넓게 다룹니다. 단순 구현을 넘어 Feature 아키텍처·상태 관리·다국어·인증·런타임
            검증처럼 유지보수와 확장에 영향을 주는 구조를 함께 설계하는 일에 집중합니다.
          </p>
          <p className="font-sans mt-6 text-[15px] leading-[1.85] text-zinc-400">
            UI/UX·퍼블리싱 출신으로 화면 완성도와 기획·디자인·백엔드와의 정합성을 맞추는
            협업에 익숙하며, 개인 프로젝트에서는 공모전 출품작의 프론트엔드 전 영역을
            단독으로 구축·운영하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
