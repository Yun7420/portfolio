export type SkillGroup = {
  category: string
  /** 카테고리 옆에 붙는 한 줄 부연 */
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Language',
    description: '언어 · 마크업',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Dart'],
  },
  {
    category: 'Framework',
    description: '웹 · 모바일 프레임워크',
    items: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Flutter'],
  },
  {
    category: 'Library',
    description: '스타일 · 상태 관리 · 검증 · 지도',
    items: ['Tailwind CSS', 'TanStack Query', 'Jotai', 'Zod', 'Kakao Maps'],
  },
  {
    category: 'Mobile / Hybrid',
    description: '하이브리드 앱 · 네이티브 연동',
    items: ['Ionic', 'Capacitor'],
  },
  {
    category: 'Build / Monorepo',
    description: '빌드 · 패키지 · 모노레포',
    items: ['Vite', 'Turborepo', 'pnpm'],
  },
  {
    category: 'Infra / DevOps',
    description: '배포 · 운영 · 모니터링',
    items: ['GitHub Actions', 'NGINX', 'Firebase', 'Sentry'],
  },
]
