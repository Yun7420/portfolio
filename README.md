# 한상윤 · Frontend Portfolio

React와 TypeScript로 만든 단일 페이지 포트폴리오입니다. 경력·프로젝트·학력·연락처를 섹션별로 정리하고, 다크 톤 UI로 구성했습니다.

## 주요 기능

- **섹션 구성**: Overview, About, Skills, Career, Career Description, Education, Credentials, Links
- **데이터 중심**: 각 섹션의 데이터는 해당 섹션 폴더의 `*.data.ts`에서 관리 (공용 인적사항만 `src/shared/data/personal.ts`)
- **UI**: Tailwind CSS 4, Pretendard, Material Symbols 아이콘

## 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| 런타임 | React 19 |
| 언어 | TypeScript |
| 빌드 | Vite 8 |
| 스타일 | Tailwind CSS 4 (`@tailwindcss/vite`) |
| 품질 | ESLint 9, typescript-eslint |

## 시작하기

### 요구 사항

- [Node.js](https://nodejs.org/) 20 이상 권장 (Vite 8 호환)

### 설치 및 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:5173`에서 열립니다.

### 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 (HMR) |
| `npm run build` | TypeScript 검사 후 프로덕션 빌드 (`dist/`) |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
| `npm run lint` | ESLint 검사 |

## 프로젝트 구조

```
portfolio/
├── public/                     # 정적 자산 (favicon 등)
├── src/
│   ├── header/                 # 상단 헤더 + 내비게이션
│   │   ├── Header.tsx
│   │   ├── navItems.ts         # 섹션 id·라벨 (content 섹션과 1:1)
│   │   └── hooks/useSectionNav.ts
│   ├── content/                # 본문 — 섹션별 폴더
│   │   ├── Content.tsx         # 섹션 조합·순서
│   │   ├── Overview/           # OverviewSection + utils/contactLinks.ts
│   │   ├── About/              # AboutSection + about.data.ts (자기소개서)
│   │   ├── Skills/             # SkillsSection + skills.data.ts, skillIcon.ts
│   │   ├── Career/             # CareerSection + career.data.ts
│   │   ├── CareerDescription/  # CareerDescriptionSection + careerDescription.data.ts
│   │   ├── Education/          # EducationSection + education.data.ts
│   │   ├── Credentials/        # CredentialsSection + credentials.data.ts
│   │   └── Links/              # LinksSection + links.data.ts
│   ├── footer/                 # 하단 푸터
│   │   └── SiteFooter.tsx
│   ├── shared/                 # 여러 영역이 함께 쓰는 것만
│   │   ├── components/         # MaterialIcon, SectionHeading
│   │   └── data/personal.ts    # 이름·연락처 등 인적사항
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

각 섹션 폴더는 `index.ts`로 컴포넌트와 데이터를 내보내므로, 새 섹션을 추가할 때는
폴더를 만들고 [src/content/Content.tsx](src/content/Content.tsx)와
[src/header/navItems.ts](src/header/navItems.ts)에만 등록하면 됩니다.

## 커스터마이징

- **이력/프로젝트/링크**: 해당 섹션 폴더의 데이터 파일을 수정합니다 — `content/Career/career.data.ts`(경력), `content/CareerDescription/careerDescription.data.ts`(경력 기술서), `content/Education/education.data.ts`, `content/Credentials/credentials.data.ts`, `content/Links/links.data.ts`, `content/Skills/skills.data.ts`.
- **이름·연락처**: `src/shared/data/personal.ts`를 수정합니다.
- **메타 정보(SEO)**: `index.html`의 `<title>`, `<meta name="description">`을 배포 환경에 맞게 조정합니다.
- **GitHub Pages 등 서브 경로 배포**: `vite.config.ts`에 `base: '/저장소이름/'`을 추가합니다.

## 라이선스

개인 포트폴리오 용도로 사용하는 저장소입니다. 코드 재사용 시 출처를 명시하는 것을 권장합니다.
