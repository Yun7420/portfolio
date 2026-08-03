/** 헤더 내비게이션 항목 — id는 content 각 섹션의 `<section id>`와 1:1로 대응합니다. */
export const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
  { id: 'career-description', label: 'Career Description' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'links', label: 'Links' },
] as const

export type NavItem = (typeof navItems)[number]
