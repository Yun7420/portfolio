# 한상윤 · Frontend Portfolio

React와 TypeScript로 만든 단일 페이지 포트폴리오입니다. 경력·프로젝트·학력·연락처를 섹션별로 정리하고, 다크 톤 UI와 배경 음악 플레이어를 제공합니다.

## 주요 기능

- **섹션 구성**: 개요, 기술 스택, 경력, 프로젝트(업무), 학력, 연결(링크)
- **데이터 중심**: 이력·프로젝트 내용은 `src/data/resume.ts`에서 관리
- **UI**: Tailwind CSS 4, Pretendard, Material Symbols 아이콘
- **배경 음악**: `BackgroundMusic` 컴포넌트로 플레이리스트 재생(선택)

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
├── public/                 # 정적 자산 (favicon 등)
├── src/
│   ├── components/         # Header, Footer, 공통 UI
│   ├── components/sections/ # 각 섹션 컴포넌트
│   ├── data/
│   │   ├── resume.ts       # 프로필·경력·프로젝트·학력 데이터
│   │   └── audioPlaylist.ts # 배경 음악 트랙(사용 시)
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## 커스터마이징

- **이력/프로젝트/링크**: `src/data/resume.ts`의 `personal`, `jobs`, `projects`, `education` 등을 수정합니다.
- **메타 정보(SEO)**: `index.html`의 `<title>`, `<meta name="description">`을 배포 환경에 맞게 조정합니다.
- **GitHub Pages 등 서브 경로 배포**: `vite.config.ts`에 `base: '/저장소이름/'`을 추가합니다.

## 라이선스

개인 포트폴리오 용도로 사용하는 저장소입니다. 코드 재사용 시 출처를 명시하는 것을 권장합니다.
