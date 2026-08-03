/** 이력서의 [웹 서비스 개발] 같은 구분 머리말 단위 */
export type JobHighlightGroup = {
  title?: string
  items: string[]
}

export type Job = {
  company: string
  team: string
  title: string
  period: string
  location: string
  /** 이력서의 `담당업무 :` 한 줄 — 없는 회사도 있음 */
  summary?: string
  highlights: JobHighlightGroup[]
  note?: string
}

export const jobs: Job[] = [
  {
    company: '㈜리얼타임메디체크',
    team: '기업부설연구소',
    title: '연구원 · 프론트엔드',
    period: '2024.02 — 재직 중',
    location: '인천',
    summary:
      '웹 서비스 및 모바일 앱 구축, 기능 개발 및 유지보수와 함께 코드 리팩토링, 마이그레이션 및 서비스 개선 수행',
    highlights: [
      {
        title: '웹 서비스 개발',
        items: [
          'Next.js / React 기반 웹 서비스 구축 및 기능 개발, 유지보수 (안심예방접종 통합서비스 · VD-IMS · 회사 소개 홈페이지 · 전자예진 웹앱)',
          'Vite · Zod 기반 신규 프로젝트 CI/CD 파이프라인 구축 및 폼 입력 검증(Zod) 적용 (회사 소개 홈페이지)',
          'pnpm + Turborepo + Vite 기반 모노레포 신규 설계·단독 구축 및 nginx · Let\'s Encrypt HTTPS 배포 인프라 구성 (전자예진 웹앱)',
          'TanStack Query / Jotai 기반 상태 관리 구조 설계 및 개선',
          'i18n 다국어 시스템 구축 및 10개 로케일 운영, Axios Interceptor 기반 인증 처리',
          'Sentry 에러 모니터링 인프라 도입 및 운영',
        ],
      },
      {
        title: '모바일 하이브리드 앱 개발',
        items: [
          'Vue / Ionic / Capacitor 기반 하이브리드 앱 개발 (FCM 푸시 · 딥링크 OAuth · iOS 네이티브 푸시 토큰 브릿지 · 접근성 · App Store 심사 대응)',
        ],
      },
      {
        title: 'Flutter 기반 앱 개발',
        items: [
          'Flutter 앱 개발 + GitHub Actions CI/CD · Google Drive OTA 자동 배포',
        ],
      },
    ],
  },
  {
    company: '㈜버츄얼드림',
    team: 'UI/UX팀',
    title: '사원 · 퍼블리셔',
    period: '2022.10 — 2023.07',
    location: '서울',
    highlights: [
      {
        items: [
          'HTML / CSS / JavaScript / jQuery 기반 웹 퍼블리싱 및 UI/UX 디자인 업무',
          'Photoshop / Illustrator / Figma 활용 디자인 작업',
        ],
      },
    ],
  },
]
