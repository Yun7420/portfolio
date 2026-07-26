export const personal = {
  nameKo: '한상윤',
  nameEn: 'Sangyun Han',
  role: '프론트엔드 개발자',
  tagline:
    '코드를 다시 돌아보며 더 나은 구조를 만드는 프론트엔드 개발자',
  birthYear: 1998,
  location: '인천광역시',
  totalExperience: '약 3년 4개월',
  employmentStatus: '재직 중',
  email: 'hsy742010@naver.com',
  phone: '010-7420-3477',
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React',
    'Vue.js',
    'Flutter',
    'Node.js',
    'Tailwind CSS',
    'Vite',
    'pnpm',
    'Jotai',
    'GitHub Actions',
    'Sentry',
    'Turborepo',
    'Dart',
    'Ionic',
    'Capacitor',
    'Firebase',
    'NGINX',
    'Zod',
    'TanStack Query',
    'Kakao Maps',
  ],
  links: {
    github: 'https://github.com/Yun7420',
    blog: 'https://hsy742010.tistory.com/',
    service: 'https://gadomung.kr',
  },
} as const

export type Job = {
  company: string
  team: string
  title: string
  period: string
  location: string
  summary: string
  highlights: string[]
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
      '웹 서비스 및 모바일 앱 구축, 기능 개발·유지보수와 함께 코드 리팩토링, 마이그레이션 및 서비스 개선 수행.',
    highlights: [
      '[웹] Next.js·React 기반 웹 서비스 구축·기능 개발·유지보수 (안심예방접종 통합서비스 · VD-IMS · 회사 소개 홈페이지 · 전자예진 웹앱)',
      '[웹] Vite·Zod 기반 신규 프로젝트 CI/CD 파이프라인 및 런타임 검증 아키텍처 설계 (회사 소개 홈페이지)',
      '[웹] pnpm + Turborepo + Vite 모노레포 신규 설계·단독 구축 및 nginx · Let\'s Encrypt HTTPS 배포 인프라 구성 (전자예진 웹앱)',
      '[웹] TanStack Query / Jotai / Recoil 기반 상태 관리 구조 설계·개선',
      '[웹] i18n 다국어 시스템 구축 및 9개 로케일 운영, Axios Interceptor 기반 인증 처리',
      '[웹] Sentry 에러 모니터링 인프라 도입·운영',
      '[하이브리드] Vue·Ionic·Capacitor 기반 하이브리드 앱 개발 (FCM 푸시 · 딥링크 OAuth · iOS/Android 네이티브 직접 처리 · App Store 심사 대응)',
      '[Flutter] Flutter 앱 개발 + GitHub Actions CI/CD · Google Drive OTA 완전 자동화 · Node → NestJS 백엔드 API 전면 컷오버 · Bluetooth 디바이스 연동',
    ],
  },
  {
    company: '㈜버츄얼드림',
    team: 'UI/UX팀',
    title: '사원 · 퍼블리셔',
    period: '2022.10 — 2023.07',
    location: '서울',
    summary:
      'HTML / CSS / JavaScript / jQuery 기반 웹 퍼블리싱 및 UI/UX 디자인 업무.',
    highlights: [
      'Photoshop·Illustrator·Figma 활용 디자인 작업',
    ],
  },
]

export type Project = {
  name: string
  subtitle?: string
  client: string
  period: string
  role: string
  link?: string
  stack: { label: string; value: string }[]
  achievements: { title: string; bullets: string[] }[]
}

export const projects: Project[] = [
  {
    name: '안심예방접종 통합서비스',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재 (약 2년 5개월)',
    role: '백신 접종 생태계의 사용자 진입 서비스 구축 및 운영 인프라 도입',
    stack: [
      { label: 'Framework', value: 'React, react-router-dom' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'UI', value: 'Tailwind CSS' },
      { label: 'Library / Tool', value: 'react-i18next, Sentry' },
      { label: 'Build / Monorepo', value: 'pnpm workspace + Turborepo' },
    ],
    achievements: [
      {
        title: '시스템 통합 진입 서비스 구축',
        bullets: [
          'VD-IMS · 현장 앱(미란다) · 사용자 자가체크를 잇는 QR 기반 진입 서비스 구축 — 접종 → 자가체크(1~4차, 3차 만족도 조사) → 의료진 모니터링까지 단일 흐름으로 연결',
        ],
      },
      {
        title: '인증 시스템 구현',
        bullets: [
          'NICE 본인인증 기반 회원가입 및 아이디·비밀번호 찾기 흐름 구현',
          'Kakao · Naver · Apple 소셜 로그인 통합 구현',
        ],
      },
      {
        title: '운영 모니터링 인프라 도입',
        bullets: [
          'Sentry 에러 모니터링 도입 — ErrorBoundary에 captureException 통합, 무료 티어(월 5,000건)로 500·미처리 예외 메일 수신, DSN 미설정 시 no-op 킬스위치',
          '의료 도메인 PII 차단 — sendDefaultPii: false · console breadcrumb 제거 · URL 쿼리스트링 제거',
          'Turborepo globalEnv 누락으로 인한 환경변수 미주입 이슈를 빌드 산출물 검사로 추적·해결',
        ],
      },
      {
        title: '아키텍처 전환',
        bullets: [
          'Next.js → React 전환에 따른 NICE 인증(enc_data) 흐름 재설계 — 백엔드 재전달·Express 수신으로 405 해소, Next server·Docker 제거로 운영 단순화 및 무중단 배포 확보',
        ],
      },
    ],
  },
  {
    name: 'VD·IMS',
    subtitle: 'Vaccination Data — Integration Management System / 빔스',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재 (약 2년 5개월)',
    role: '프론트엔드 아키텍처 개선 및 서비스 기능 개발',
    stack: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'UI', value: 'Tailwind CSS' },
      {
        label: 'State Management',
        value: 'TanStack Query (React Query), Recoil, Jotai',
      },
      { label: 'Library / Tool', value: 'i18next, Axios' },
    ],
    achievements: [
      {
        title: '프론트엔드 구조 개선',
        bullets: [
          'Feature 기반 폴더 아키텍처로 기능 단위 코드 관리 구조 재구성',
          'Barrel Export·TypeScript Path Alias로 import 경로 단순화 및 의존성 관리 안정화',
        ],
      },
      {
        title: 'UI 시스템 및 스타일 구조 개선',
        bullets: [
          'Stack 기반 공통 모달(Alert / Confirm / Active) 통합, Typography·Color Design Token 적용',
          'styled-components → Tailwind CSS 마이그레이션',
        ],
      },
      {
        title: '성능 최적화',
        bullets: [
          'Jotai 슬라이스 구독 + write-only action + 컴포넌트 분리로 리렌더 격리 — store/api/hooks/components 표준 구조 정립',
          '입력(inputKeyword)/적용(keyword) 상태 분리 + React Query 옵션 튜닝으로 불필요 재호출·페이지 깜빡임·탭 복귀 재호출 해소',
        ],
      },
      {
        title: '지도 / 외부 SDK · 서비스 품질',
        bullets: [
          'NAVER Maps JavaScript API v3 연동 — 전국 → 광역시/도 → 시군구 → 동 계층 드릴다운, URL 쿼리스트링으로 필터 컨텍스트 단방향 전달',
          'i18n 로케일 ko/en/ja/ru → de/es/et/fr/nl/zh 포함 9개로 확장, 누락 키 240개 전수 동기화',
          'Axios Interceptor 기반 Access Token 만료 시 자동 갱신',
        ],
      },
    ],
  },
  {
    name: '회사 소개 홈페이지',
    client: '㈜리얼타임메디체크',
    period: '2026.07 — 현재 (약 1개월)',
    role: 'Vite 기반 SPA 신규 구축 및 CI/CD·런타임 검증 아키텍처 설계',
    stack: [
      { label: 'Framework', value: 'React, react-router-dom (v6)' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Build', value: 'Vite' },
      { label: 'UI', value: 'Tailwind CSS' },
      { label: 'Validation', value: 'Zod' },
      {
        label: 'Library / Tool',
        value: 'i18next (ko/en/jp), TanStack Query',
      },
      { label: 'Monorepo', value: 'pnpm workspace + Turborepo' },
    ],
    achievements: [
      {
        title: 'CI/CD 파이프라인 신규 구축',
        bullets: [
          'CI 자동화 전무 상태에서 GitHub Actions 파이프라인 2종 신규 설계 — PR CI(tsc + lint, Turbo 변경분 감지) · Release CI(운영 배포)',
          'dev/prod URL 상수를 workspace 공유 패키지로 분리, Vite import.meta.env.PROD로 .env·CI secret 없이 환경 분기',
        ],
      },
      {
        title: '런타임 검증 아키텍처 도입',
        bullets: [
          'Zod safeParse 래퍼로 스키마 검증 실패 시 graceful degradation(null/기본값) + 별도 로깅',
          '스키마를 workspace 공유 패키지로 승격해 사내 앱 간 단일 임포트·검증 로직 중복 제거',
        ],
      },
    ],
  },
  {
    name: '전자예진 웹앱',
    client: '㈜리얼타임메디체크',
    period: '2026.07 — 현재 (약 1주)',
    role: '모노레포 초기 설계부터 배포 인프라까지 프론트엔드 전 영역 단독 구축',
    stack: [
      { label: 'Framework', value: 'React 19, react-router-dom (v7)' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Build', value: 'Vite' },
      { label: 'UI', value: 'Tailwind CSS v4' },
      { label: 'Validation', value: 'Zod v4, react-hook-form' },
      { label: 'State', value: 'Jotai, TanStack Query' },
      { label: 'Monorepo', value: 'pnpm workspace + Turborepo' },
      { label: 'Infra', value: 'nginx, Let\'s Encrypt (certbot)' },
    ],
    achievements: [
      {
        title: '모노레포 신규 설계 및 단독 구축',
        bullets: [
          'Feature 단위 5개 패키지(관리자 host·대시보드·예진 폼·반응형 shell·디자인 시스템) + 공유 lib 8종으로 workspace 분리',
          'Turborepo build를 host 기준 단일 dist로 구성, tsc/lint 파일 입력 기반 캐싱으로 변경분 재빌드 최소화',
        ],
      },
      {
        title: '배포 인프라 · CI/CD 단독 구축',
        bullets: [
          'GitHub Actions 워크플로우 3종(PR 검증 · 개발 배포 · 운영 배포) 신규 작성',
          'nginx sites-available 전용 conf·sites-enabled 심볼릭 링크로 리버스 프록시 구성',
          'Let\'s Encrypt certbot HTTPS 발급 및 /etc/letsencrypt/live/ 자동 갱신 경로 연동',
        ],
      },
      {
        title: '키오스크 · 웹 이중 UX 대응',
        bullets: [
          '단일 코드베이스 반응형 shell — max-w-960px·fixed BottomBar clearance 공통 layout 규칙',
          '2초 long-press 제스처로 화면 마크 없이 직원 전용 관리자 기능 진입 게이트 구현',
          'Zod + react-hook-form 다단계 예진 폼(약관 → 질환 → 본인확인 → 문진 → 완료), 게스트/회원 경로 분기',
        ],
      },
    ],
  },
  {
    name: '우리가족백신수첩',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재 (약 2년 5개월)',
    role: '하이브리드 웹앱 환경에서 모바일 기능 연동 및 인증·알림·접근성 기능 개발',
    stack: [
      { label: 'Framework', value: 'Vue.js, Ionic' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Hybrid App', value: 'Capacitor' },
      {
        label: 'Library / Tool',
        value: 'Firebase Cloud Messaging (FCM), Axios',
      },
    ],
    achievements: [
      {
        title: '모바일 알림 · 인증 · 권한',
        bullets: [
          'FCM Foreground/Background 알림, 로그인 시 Device Token·디바이스 타입(Android/iOS/Web) 서버 연동',
          '딥링크 기반 OAuth 콜백 및 웹/앱 환경 분기 인증 (Apple · Kakao · Naver + NICE 본인인증)',
          '앱 실행 시 전체 권한 요청 페이지, 권한 비활성 시 디바이스 설정 화면 이동',
        ],
      },
      {
        title: '하이브리드 앱 네이티브 직접 처리',
        bullets: [
          'Android 15(API 35) Edge-to-Edge WebView 겹침 — MainActivity에서 WindowInsetsCompat로 systemBars 인셋 패딩 동적 적용',
          'iOS Capacitor Bridge로 FCM 토큰 Native → JS 파이프라인 설계, APNs를 Android FCM과 동일 추상화로 통합',
        ],
      },
      {
        title: '접근성 (a11y) · 스토어 심사',
        bullets: [
          '고령층·저시력 대상 "큰 글씨 모드" — Pinia + localStorage + data-text-mode 단방향 동기화, SCSS mixin으로 전역 대응',
          'Ionic aria-hidden 버그를 MutationObserver로 방어하는 스크린리더 가드 구축',
          'App Store 심사 거부 4건(Sign in with Apple·권한 문구·강한 인증 근거·의료 면책) 종합 대응 후 Play·App Store 정식 출시',
        ],
      },
    ],
  },
  {
    name: '미란다',
    subtitle: 'Miranda',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재 (약 2년 5개월)',
    role:
      'Flutter 기반 앱 개발 및 배포/업데이트 시스템 구축, 독립적인 모바일 앱 서비스 운영 및 배포 자동화 환경 구축',
    stack: [
      { label: 'Framework', value: 'Flutter' },
      { label: 'Language', value: 'Dart' },
      { label: 'State Management', value: 'Provider, GetX' },
      { label: 'Network', value: 'Dio, HTTP' },
      { label: 'Device', value: 'Bluetooth, USB Serial' },
      { label: 'Storage', value: 'SharedPreferences, SecureStorage' },
    ],
    achievements: [
      {
        title: 'CI/CD 자동 배포 시스템 구축',
        bullets: [
          'GitHub Actions Tag(v*) 트리거로 APK/AAB 자동 빌드 · GitHub Release 배포, Flutter/Gradle 캐싱·Keystore Secrets 보안 처리',
          'git tag SemVer 자동 추출 → version.json 생성·Release 첨부 → 설정 페이지 인앱 업데이트까지 무인 배포 완성',
        ],
      },
      {
        title: 'OTA 기반 앱 자동 업데이트',
        bullets: [
          'Google Drive OTA 완전 자동화 — Drive API files.update PATCH로 고정 파일 ID 유지(OTA 끊김 방지), version.json 비교 후 Dio APK 자동 설치',
          '주 7회 이상 배포가 필요한 환경에서 스토어 심사 병목 없이 태그 푸시 → 빌드 → Drive → Release 무인 배포',
        ],
      },
      {
        title: 'Bluetooth 음성 안내 · API 전환',
        bullets: [
          'Bluetooth 디바이스 연동·연결 상태·예외 피드백·TTS 실시간 음성 출력',
          'Node → NestJS 전면 컷오버 — api_config 호스트·/api prefix·11개 화면 경로/verb 일괄 전환, flutter analyze 0건 후 무중단 배포',
        ],
      },
    ],
  },
  {
    name: '가도돼멍',
    subtitle: '반려동물 동반 장소·펫 캠핑 탐색 서비스',
    client:
      '개인 프로젝트 — 2026 관광데이터 활용 공모전(웹·앱 구현 부문) 출품작 / 팀 프로젝트 · 프론트엔드 단독 담당',
    period: '2026.07 — 현재 (운영 중)',
    role: '사용자 웹앱·관리자 콘솔·공용 UI 3개 패키지의 프론트엔드 전 영역 단독 구축',
    link: 'https://gadomung.kr',
    stack: [
      { label: 'Framework', value: 'React 19, react-router-dom v7' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Build / Monorepo', value: 'Vite, pnpm workspace + Turborepo' },
      {
        label: 'State',
        value:
          'TanStack Query · URL SearchParams · localStorage (외부 상태관리 라이브러리 미사용)',
      },
      { label: 'UI', value: 'Tailwind CSS v4 (자체 디자인 시스템)' },
      { label: 'Map', value: 'Kakao Maps JavaScript SDK' },
      { label: 'API Codegen', value: 'orval (OpenAPI)' },
      { label: 'Validation', value: 'Zod, react-hook-form' },
      { label: '공공데이터', value: '한국관광공사(KTO), 고캠핑 OpenAPI' },
    ],
    achievements: [
      {
        title: 'API / 데이터 레이어 설계',
        bullets: [
          'OpenAPI → orval 코드젠(pnpm api:generate) 구축, 도메인 래퍼(anti-corruption layer)로 envelope 언랩·UI 격리',
          '생성 모델을 의존성 그래프 기반으로 도메인별 재배치하는 후처리 스크립트 작성',
        ],
      },
      {
        title: '라이브러리리스 상태관리 · 지도 연동',
        bullets: [
          '서버 상태(TanStack Query)·탐색 상태(URL)·로컬 영속(localStorage + useSyncExternalStore)으로 역할 분리',
          'queryKey 팩토리 중앙화·4xx 재시도 제외·enabled 가드·무한스크롤 구현',
          '카카오맵 명령형 SDK를 선언형 React에 격리 — 콜백 ref·마커 수술적 갱신·클러스터링·점진적 저하',
        ],
      },
      {
        title: '관리자 콘솔 · 디자인 시스템 · 모노레포',
        bullets: [
          'JWT access(메모리)/refresh(sessionStorage), 동시 401을 단일 refresh로 합치는 싱글턴 재발급(thundering herd 방지)',
          '공공데이터 원본 보존 + 관리자 Override·제보 상태머신·동기화·API 쿼터 모니터링 대시보드',
          'web/admin 공유 무빌드 디자인 시스템, WAI-ARIA(포커스 트랩·키보드 내비)·명령형 오버레이 API',
          'pnpm workspace + Turborepo로 사용자 웹앱·관리자·공용 UI 3패키지 구성',
        ],
      },
    ],
  },
]

/** 학위·직무 교육 공통 한 줄 레코드 */
export type EducationEntry = {
  institution: string
  program: string
  period: string
  note?: string
}

export const educationEntries: EducationEntry[] = [
  {
    institution: '경희사이버대학교(4년제)',
    program: 'IT디자인융합학과',
    period: '2023.08 ~ 2025.08',
    note: '편입/졸업 · 학점 3.47/4.5 · 서울',
  },
  {
    institution: '신안산대학교(2·3년제)',
    program: '산업디자인과',
    period: '2017.03 ~ 2021.02',
    note: '졸업 · 학점 3.78/4.5 · 경기 · 주간',
  },
  {
    institution: '코리아 IT 아카데미 (인천점)',
    program: '프론트엔드 개발(웹 코딩) 과정',
    period: '2023.07 ~ 2024.01',
    note: 'JavaScript / Node.js / React / TypeScript 기반 프론트엔드 과정',
  },
  {
    institution: 'SBS아카데미컴퓨터아트학원 (인천점)',
    program: '웹 디자인 시그니처 전문가과정',
    period: '2022.11 ~ 2023.02',
    note: 'UI/UX 이론 기반 반응형 웹 제작 (HTML / CSS / JavaScript)',
  },
  {
    institution: '인컴트랜드 평생교육원 (인천점)',
    program: '그래픽디자인과 반응형',
    period: '2022.05 — 2022.07',
    note: 'UI/UX 가이드·웹 표준·반응형·jQuery 인터랙티브 제작',
  },
  {
    institution: '인컴트랜드 평생교육원 (인천점)',
    program: '쇼핑몰구축및 웹디자인',
    period: '2021.12 ~ 2022.03',
    note: 'GTQ 1급 · Photoshop / Illustrator · 카페24·스마트스토어',
  },
]

export type Credential = {
  title: string
  issuer: string
  period: string
  result?: string
}

export const credentials: Credential[] = [
  {
    title: '그래픽기술자격(GTQ) 1급',
    issuer: '한국생산성본부(KPC)',
    period: '2022.02',
    result: '최종합격',
  },
  {
    title: '정보기술자격(ITQ) 아래한글',
    issuer: '한국생산성본부(KPC)',
    period: '2020.10',
    result: '최종합격',
  },
  {
    title: '정보기술자격(ITQ) 한글파워포인트',
    issuer: '한국생산성본부(KPC)',
    period: '2020.10',
    result: '최종합격',
  },
  {
    title: '정보기술자격(ITQ) 한글엑셀',
    issuer: '한국생산성본부(KPC)',
    period: '2020.10',
    result: '최종합격',
  },
  {
    title: '장려상(부센터장상)',
    issuer: '서울통일교육센터',
    period: '2020.10',
  },
  {
    title: '2종보통운전면허',
    issuer: '경찰청(운전면허시험관리단)',
    period: '2017.08',
    result: '최종합격',
  },
]
