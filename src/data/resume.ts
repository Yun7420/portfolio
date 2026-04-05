export const personal = {
  nameKo: '한상윤',
  nameEn: 'Sangyun Han',
  role: '프론트엔드 개발자',
  tagline:
    '코드를 다시 돌아보며 더 나은 구조를 만드는 프론트엔드 개발자',
  birthYear: 1998,
  location: '인천광역시',
  totalExperience: '약 3년',
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
    'Dart',
  ],
  links: {
    github: 'https://github.com/Yun7420',
    blog: 'https://hsy742010.tistory.com/',
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
      '[웹] Next.js·React 기반 웹 서비스 구축·기능 개발·유지보수',
      '[웹] 코드 리팩토링·마이그레이션으로 코드 품질·유지보수성 향상',
      '[웹] React Query / Recoil / Jotai 기반 상태 관리 구조 설계·개선',
      '[웹] i18n 기반 다국어 시스템 도입',
      '[웹] Axios Interceptor 기반 인증 처리 구조 구현',
      '[하이브리드] Vue·Ionic·Capacitor 기반 모바일 앱 기능 개발·유지보수',
      '[하이브리드] FCM 푸시 — Device Token 기반 Foreground·Background 알림 처리',
      '[하이브리드] Apple·Kakao·Naver 소셜 로그인 및 NICE 일반 로그인, 딥링크 인증',
      '[하이브리드] 앱 실행 시 권한 요청·디바이스 설정 권한 화면 이동',
      '[하이브리드] Google Play·Apple App Store 심사 대응 및 서비스 출시',
      '[Flutter] Flutter 기반 모바일 앱 개발·유지보수 및 서비스 운영 대응',
      '[Flutter] GitHub Actions CI/CD 자동 배포 및 OTA 업데이트 시스템 구축·운영',
      '[Flutter] Bluetooth 디바이스 연동 및 TTS 음성 안내 기능 구현',
    ],
  },
  {
    company: '㈜버츄얼드림',
    team: 'UI/UX팀',
    title: '사원 · 퍼블리셔',
    period: '2022.10 — 2023.07',
    location: '서울',
    summary:
      'HTML, CSS, JavaScript, jQuery 기반 웹 UI 퍼블리싱 및 유지보수.',
    highlights: [
      'Photoshop·Illustrator·Figma로 UI/UX 디자인·시안 제작',
      'Git/GitHub 협업 환경에서 서비스 구축·유지보수',
    ],
  },
]

export type Project = {
  name: string
  subtitle?: string
  client: string
  period: string
  role: string
  stack: { label: string; value: string }[]
  achievements: { title: string; bullets: string[] }[]
}

export const projects: Project[] = [
  {
    name: 'VD·IMS',
    subtitle: 'Vaccination Data — Integration Management System',
    client: '㈜리얼타임메디체크',
    period: '2023.07 — 현재',
    role: '프론트엔드 아키텍처 개선 및 서비스 기능 개발',
    stack: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'UI', value: 'React, Tailwind CSS' },
      {
        label: 'State',
        value: 'React Query, Recoil, Jotai',
      },
      { label: 'Library / Tool', value: 'i18next, Axios' },
    ],
    achievements: [
      {
        title: '프론트엔드 구조',
        bullets: [
          'Feature 기반 폴더 아키텍처로 기능 단위 관리, Barrel Export·Path Alias로 가독성·의존성 정리',
        ],
      },
      {
        title: '상태·데이터',
        bullets: [
          'Jotai로 클라이언트 상태 중앙화, React Query로 서버 상태·캐싱·refetch 체계화',
        ],
      },
      {
        title: 'UI·스타일',
        bullets: [
          'Stack 기반 공통 모달(Alert/Confirm/Active) 통합, 디자인 토큰 기반 Typography·Color',
          'styled-components → Tailwind CSS 마이그레이션',
        ],
      },
      {
        title: '성능·품질',
        bullets: [
          'React DevTools 기반 리렌더 분석, memo·useMemo·dynamic import·Suspense로 로딩·렌더 개선',
          'i18n 도입, Axios Interceptor로 액세스 토큰 자동 갱신',
        ],
      },
    ],
  },
  {
    name: '우리가족백신수첩',
    client: '㈜리얼타임메디체크',
    period: '2023.07 — 현재',
    role: '하이브리드 웹앱 환경에서 모바일 기능·인증·알림 개발',
    stack: [
      { label: 'Framework', value: 'Vue.js, Ionic' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Hybrid', value: 'Capacitor' },
      {
        label: 'Library / Tool',
        value: 'Firebase Cloud Messaging (FCM), Axios',
      },
    ],
    achievements: [
      {
        title: '푸시·환경 분기',
        bullets: [
          'FCM Foreground/Background 알림, 디바이스 타입·토큰 서버 연동',
          '웹·앱 환경별 기능·인증 로직 분리, Capacitor 네이티브 연동',
        ],
      },
      {
        title: '인증·권한',
        bullets: [
          'NICE 본인인증·Apple·Kakao·Naver 소셜 로그인, 딥링크 인증 결과 처리',
          '앱 실행 시 권한 요청·설정 화면 이동',
        ],
      },
      {
        title: '스토어',
        bullets: [
          'Google Play·App Store 심사 리젝 대응 및 정식 출시',
        ],
      },
    ],
  },
  {
    name: '미란다',
    subtitle: 'Miranda',
    client: '㈜리얼타임메디체크',
    period: '2023.07 — 현재 (약 2년 2개월)',
    role:
      'Flutter 기반 앱 개발 및 배포·업데이트 시스템 구축, 독립적인 모바일 앱 서비스 운영 및 배포 자동화 환경 구축',
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
          'GitHub Actions 기반 Flutter 앱 CI/CD 파이프라인 구축',
          'Tag 기반(v*) 트리거로 APK·AAB 자동 빌드 및 GitHub Release 자동 배포',
          'Flutter·Gradle 캐싱 전략으로 빌드 시간 최적화 및 배포 프로세스 자동화',
          'Keystore 암호화 및 GitHub Secrets 기반 보안 처리로 배포 안정성 확보',
        ],
      },
      {
        title: 'OTA 기반 앱 자동 업데이트 시스템',
        bullets: [
          'Google Drive 기반 version.json으로 서버 없이 앱 업데이트 구조 구현',
          '앱 실행 시 최신 버전 비교 후 업데이트 필요 시 다운로드·설치 유도 설계',
          'Dio 기반 APK 다운로드 및 설치 자동 실행 로직 구현',
          '버전 비교 로직 직접 구현으로 업데이트 판단 자동화·유지보수 효율 개선',
        ],
      },
      {
        title: 'Bluetooth 기반 음성 안내',
        bullets: [
          'Bluetooth 디바이스 연동으로 음성 안내 기능 구현',
          '연결 상태·예외 상황별 사용자 피드백 로직 구현',
          'TTS(Text-to-Speech)로 실시간 음성 출력 처리',
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
}

export const educationEntries: EducationEntry[] = [
  {
    institution: '경희사이버대학교(4년제)',
    program: 'IT디자인융합학과',
    period: '2023.08 ~ 2025.08',
  },
  {
    institution: '신안산대학교(2·3년제)',
    program: '산업디자인과',
    period: '2017.03 ~ 2021.02',
  },
  {
    institution: '코리아 IT 아카데미 (인천점)',
    program: '프론트엔드 개발(웹 코딩) 과정',
    period: '2023.07 ~ 2024.01',
  },
  {
    institution: 'SBS아카데미컴퓨터아트학원 (인천점)',
    program: '웹 디자인 시그니처 전문가과정',
    period: '2022.11 ~ 2023.02',
  },
  {
    institution: '인컴트랜드 평생교육원 (인천점)',
    program: '그래픽디자인과 반응형',
    period: '2022.05 — 2022.07',
  },
  {
    institution: '인컴트랜드 평생교육원 (인천점)',
    program: '쇼핑몰구축및 웹디자인',
    period: '2021.12 ~ 2022.03',
  },
]