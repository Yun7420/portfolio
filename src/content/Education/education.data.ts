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
