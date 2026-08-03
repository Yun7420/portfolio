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
    name: 'VD-IMS',
    subtitle: '빔스 — 백신 데이터 통합관리 시스템',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재',
    role: '프론트엔드 아키텍처 개선 및 서비스 기능 개발',
    stack: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'UI', value: 'Tailwind CSS' },
      {
        label: 'State Management',
        value: 'TanStack Query (React Query), Jotai',
      },
      { label: 'Library / Tool', value: 'i18next, Axios' },
    ],
    achievements: [
      {
        title: '컴포넌트 분리로 리렌더 범위 격리',
        bullets: [
          '필터 값 하나만 바꿔도 페이지 전체가 다시 그려지던 구조가 문제였습니다. 기존 Jotai 상태관리 구조 위에서 리렌더가 왜 한 곳에 머물지 않고 번지는지 직접 파고들어, 한 컴포넌트 안에 성격이 다른 상태가 함께 있으면 부모가 리렌더될 때 형제 컴포넌트까지 번진다는 원인을 찾았습니다.',
          '이후 검색·필터를 요소 단위로 끝까지 쪼개, 각 컴포넌트가 자기가 쓰는 상태만 구독하도록 재구성하고 store / selector / actions 구조로 표준화했습니다.',
          '결과: 셀렉트를 바꾸면 그 셀렉트만, 입력하면 입력창만 다시 그려지도록 리렌더를 격리(React DevTools Highlight updates로 확인). 조작할 때마다 페이지 전체가 갱신되던 것을 없애 검색·필터 조작이 매끄럽게 반응하도록 개선했습니다.',
        ],
      },
      {
        title: '입력/적용 상태 분리 + React Query 옵션 조정으로 재호출 최적화',
        bullets: [
          '검색창에 한 글자 칠 때마다 API가 나가던 문제를, 검색어를 \'타이핑 중인 값\'과 \'실제 조회하는 값\'으로 나눠 버튼·Enter를 눌렀을 때만 조회되도록 바꿨습니다.',
          '다른 탭에 갔다 오거나 페이지를 넘길 때 불필요하게 다시 조회되던 것도 React Query 옵션으로 정리했습니다 — 탭 복귀 시 재호출 차단(refetchOnWindowFocus), 페이지 전환 시 이전 데이터를 유지해 깜빡임 방지(keepPreviousData), 네트워크 복구 시에만 재조회(refetchOnReconnect), 자주 바뀌는 데이터라 캐시 신선 시간(staleTime)을 30초로 짧게.',
          '상세 조회는 유효한 id가 있을 때만 요청되도록 enabled 가드를 걸어 불필요한 호출을 막았습니다.',
          '모달에서 수정에 성공하면(onSuccess) 목록·상세 queryKey를 무효화(invalidateQueries)해 뒤 목록이 바로 최신화되도록 했고, 실패하면(onError) 목록은 그대로 두고 안내 토스트만 띄웠습니다.',
          '결과: 검색어를 10글자 입력하면 10번 나가던 조회 요청을 버튼·Enter 시점의 1회로 줄였고, 탭 복귀·페이지 전환 시의 불필요한 재호출과 화면 깜빡임도 제거했습니다. 필터 변경 시 페이지 자동 리셋, 수정 내용 즉시 반영으로 목록 정합성도 유지했습니다.',
        ],
      },
      {
        title: '프론트엔드 구조 · 스타일 표준화',
        bullets: [
          '파일이 종류별로 흩어져 있어 기능 하나를 고치려면 여러 폴더를 오가야 했습니다. 관련 코드(컴포넌트·API·상태·유틸)를 기능(Feature) 단위로 한 폴더에 모으고, 폴더마다 index.ts로 내보내기를 정리(Barrel Export)하고, 절대경로 별칭(Path Alias)을 적용해 파일을 옮겨도 import 경로가 깨지지 않고 어디에 뭐가 있는지 바로 찾도록 구조를 표준화했습니다.',
          '알림·확인창이 화면마다 제각각이라, 공통 모달(Alert / Confirm / Active)을 여러 개가 쌓여도 순서대로 닫히는 Stack 구조로 직접 구현해 어디서든 같은 모양·동작으로 재사용했습니다. 이후 리뉴얼 때 사내 디자인 시스템 모달로 통합하며 다른 제품과 UI 일관성까지 맞췄습니다.',
          '색상·간격 같은 값을 Design Token으로 통일하고, styled-components → Tailwind CSS로 스타일 작성 방식을 표준화했습니다.',
          '결과: 새 기능을 붙일 때 정해진 폴더 구조·공통 모달·디자인 토큰만 그대로 따르면 되도록 만들어, 개발자 누구나 같은 방식으로 작업하고 코드 위치를 빠르게 찾을 수 있게 정리했습니다.',
        ],
      },
      {
        title: '다국어 · 인증 토큰 자동 갱신',
        bullets: [
          '국내 병원·보건소에서 쓰이지만 다양한 국적의 이용자에게도 대응할 수 있도록, 프로젝트 루트(lib)에 전역 다국어 모듈을 만들어 앱 어디서든 같은 방식으로 번역을 쓰도록 구성하고 총 10개 언어를 지원하도록 구현했습니다. 언어별 번역 파일의 키를 동일하게 맞춰 특정 언어에서만 글자가 빠지지 않도록 동기화했습니다.',
          '공용 API 통신을 하나의 Axios 인스턴스로 묶어, 요청마다 현재 언어와 로그인 토큰을 자동으로 붙이고 서버·네트워크 에러는 공통 안내 모달로 일관되게 처리했습니다.',
          '토큰이 만료되면(401) 자동으로 재발급받아 원래 요청을 다시 보내 사용자가 로그아웃 없이 작업을 이어가도록 했고, 한 화면에서 여러 요청이 동시에 만료돼도 재발급은 첫 요청 한 번만 실행하고 나머지는 그 결과를 기다렸다가 새 토큰으로 이어가도록 만들어 중복 재발급을 막았습니다.',
          '결과: 동시에 여러 요청이 있어도 토큰 재발급은 1번만 일어나고, 토큰 만료로 인한 갑작스러운 로그아웃·요청 실패 없이 작업을 매끄럽게 이어갈 수 있게 했습니다.',
        ],
      },
    ],
  },
  {
    name: '안심예방접종 통합서비스',
    subtitle: '백신 접종 사용자 진입 서비스',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재',
    role: '사용자 진입 서비스 구축 및 운영 인프라 도입',
    stack: [
      { label: 'Framework', value: 'React, react-router-dom' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'UI', value: 'Tailwind CSS' },
      { label: 'State Management', value: 'TanStack Query' },
      { label: 'Library / Tool', value: 'react-i18next, Sentry' },
      { label: 'Build / Monorepo', value: 'pnpm workspace + Turborepo' },
    ],
    achievements: [
      {
        title: 'Sentry 운영 모니터링 도입 — 꼭 필요한 에러만, 개인정보는 빼고',
        bullets: [
          '병원·보건소에서 접종 도중 화면이 에러로 멈추면 현장이 바로 곤란해지는데, 소수 인원이 여러 프로젝트를 맡다 보니 모든 상황을 사전 검증만으로 막기는 어려웠습니다. 그래서 운영 중 에러가 나면 즉시 메일로 받아 바로 대응할 수 있도록 Sentry를 도입했습니다.',
          '무료 용량을 아끼고 알림 노이즈를 줄이기 위해 모든 에러가 아니라 "정말 급한 것만" 두 지점에서만 보고하도록 설계했습니다: (1) 서버 통신 오류는 React Query 공통 에러 처리에서 4xx·네트워크 끊김 같은 예상된 에러는 걸러내고 500번대(서버) 에러만 분기해 보고, (2) 화면이 아예 못 그려져 에러 전용 페이지로 빠지는 렌더링 크래시는 ErrorBoundary에서 컴포넌트 위치 정보와 함께 보고.',
          '의료 서비스라 에러 리포트에 개인정보(이름)가 섞이지 않도록 IP·쿠키·입력값 전송 차단, 콘솔 로그 기록 제거, URL 쿼리스트링 제거 등 보안 옵션을 적용했습니다.',
          '결과: 급한 에러가 나면 메일에 담긴 화면 주소로 바로 들어가 대응할 수 있게 됐고, 꼭 필요한 에러만 받도록 좁혀 무료 용량 안에서 안정적으로 운영했습니다.',
        ],
      },
      {
        title: 'NICE 본인인증 연동 — 스택 전환에 맞춰 인증 흐름 구성',
        bullets: [
          '프로젝트를 React로 전환하면서 기존 NICE 인증 콜백을 받던 프론트 서버가 사라져, 인증 콜백을 백엔드가 먼저 받아 처리한 뒤 프론트로 전달하는 방식으로 구성했습니다. 프론트는 전달받은 데이터로 백엔드에 인증 처리를 요청하고 필요한 화면으로 이동시키는 역할을 맡도록 정리했습니다.',
          '이 인증 흐름을 기반으로 회원가입, 아이디 찾기, 비밀번호 찾기를 구현했습니다.',
        ],
      },
      {
        title: '소셜 로그인 구축',
        bullets: [
          'Kakao·Naver 소셜 로그인을 OAuth 코드 방식으로 구현했습니다. 버튼을 누르면 각 제공자 인증 페이지로 이동하고, 돌아올 때 URL로 전달되는 인증 코드를 받아 백엔드로 로그인·회원가입을 처리합니다.',
          '로그인·회원가입·기존 계정 통합·복구를 하나의 콜백 흐름에서 상황별로 분기 처리하고, 한 번만 사용할 수 있는 인증 코드가 중복 실행되지 않도록 재실행 방지 가드를 두었습니다.',
        ],
      },
    ],
  },
  {
    name: '우리가족백신수첩',
    subtitle: '하이브리드 웹앱',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재',
    role: '하이브리드 환경 모바일 기능 연동 및 인증/알림/접근성 개발',
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
        title: '알림 · 인증 · 앱 심사 대응',
        bullets: [
          'FCM 푸시 알림을 앱이 켜져 있을 때(Foreground)와 백그라운드일 때 모두 받도록 처리하고, 기기 토큰과 기기 종류를 서버에 전달해 사용자별 알림을 보낼 수 있게 했습니다. iOS는 푸시 토큰이 네이티브 쪽으로 전달돼, 이를 웹(JS)으로 넘겨받아 안드로이드와 동일한 방식으로 다루도록 브릿지로 연결했습니다.',
          '앱에서는 소셜 로그인 콜백을 일반 웹 리다이렉트로 받을 수 없어, 커스텀 스킴 딥링크와 callback.html을 거쳐 앱으로 돌아오도록 처리하고 웹/앱 환경에 따라 인증을 분기했습니다. NICE 본인인증 콜백은 직접 만든 Express 프론트 서버(server.js)에서 받아 처리했고, App Store 요구사항으로 Apple 로그인을 추가했습니다.',
          'App Store 심사 거부 사유(Apple 로그인 도입, 권한 설명 문구, 인증 근거 제출, 의료정보 출처·면책 표기)를 하나씩 대응하고, 그 과정을 블로그에 기록한 뒤 정식 출시했습니다.',
        ],
      },
      {
        title: '접근성(a11y) — 큰 글씨 모드',
        bullets: [
          '고령층·저시력 사용자를 위해, 버튼으로 글자 크기를 바꾸면 그 설정을 상태 저장소(Pinia)에 담아 앱 전체의 글자 크기 기준값을 바꿔 화면 전체 글씨가 함께 커지도록 했고, 설정을 저장해 앱을 다시 켜도 유지되게 했습니다.',
        ],
      },
    ],
  },
  {
    name: '신규 프로젝트 표준 구축',
    subtitle: '전자예진 웹앱 · 회사 소개 홈페이지',
    client: '㈜리얼타임메디체크',
    period: '2026.07 — 현재',
    role: '모노레포 초기 설계부터 배포 인프라까지 프론트엔드 전 영역 단독 구축',
    stack: [
      { label: 'Framework', value: 'React 19' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Build', value: 'Vite' },
      { label: 'UI', value: 'Tailwind CSS' },
      { label: 'Validation', value: 'Zod, react-hook-form' },
      { label: 'State', value: 'Jotai, TanStack Query' },
      { label: 'Monorepo', value: 'pnpm workspace + Turborepo' },
      { label: 'Infra', value: 'nginx, Let\'s Encrypt' },
    ],
    achievements: [
      {
        title: '모노레포 신규 설계 · 단독 구축',
        bullets: [
          '스캐폴딩·빌드 파이프라인이 없는 신규 프로젝트를 pnpm workspace + Turborepo로 처음부터 설계했습니다. 역할별 패키지와 공용 lib(공통 설정·API·인증·엔드포인트·i18n·상태관리)로 나누고, 빌드·검사 태스크를 파일 입력 기준으로 정의해 변경된 부분만 다시 빌드되도록 캐싱 전략을 적용했습니다.',
        ],
      },
      {
        title: '배포 인프라 · CI/CD 단독 구축',
        bullets: [
          'GitHub Actions 워크플로우 3종(PR 검증 · 개발 배포 · 운영 배포)을 작성하고, PR 검증은 Turbo의 변경분 감지로 바뀐 패키지만 검사하도록 구성했습니다.',
          '직접 nginx를 설정해(sites-available에 conf 작성 + sites-enabled 심볼릭 링크) 빌드된 화면을 서비스하고, certbot(Let\'s Encrypt)으로 SSL 인증서를 발급받아 HTTPS를 적용했습니다. 프론트 개발자가 웹서버·인증서까지 직접 맡아 초기 인프라 병목을 없앴습니다.',
        ],
      },
      {
        title: '로그인 · 폼 검증',
        bullets: [
          '로그인 페이지를 Zod + react-hook-form으로 입력 검증하고, react-query로 로그인 요청을 처리하며, 로그인 상태(토큰·프로필)는 jotai로 저장해 다시 방문해도 자동 로그인되도록 구현했습니다.',
        ],
      },
    ],
  },
  {
    name: '미란다',
    subtitle: 'Miranda — Flutter 현장 앱',
    client: '㈜리얼타임메디체크',
    period: '2024.02 — 현재',
    role: 'Flutter 앱 개발 및 배포 자동화 환경 구축',
    stack: [
      { label: 'Framework', value: 'Flutter' },
      { label: 'Language', value: 'Dart' },
      { label: 'Network', value: 'Dio' },
      { label: 'CI/CD', value: 'GitHub Actions' },
      { label: 'Distribution', value: 'Google Drive API' },
      { label: 'Device', value: 'Bluetooth' },
    ],
    achievements: [
      {
        title: '스토어 심사 없이 앱을 자동 업데이트하는 배포 파이프라인 구축',
        bullets: [
          '개발이 잦은 현장 앱이라 매번 앱스토어·구글플레이 심사를 받아 재배포하기엔 무리였고, 설치 업체가 늘수록 매번 수동으로 다운로드를 안내하는 것도 부담이었습니다. 그래서 심사 없이 버튼 한 번으로 최신 버전을 받게 하는 자동 배포·업데이트 구조를 만들었습니다.',
          '버전 태그(v1.0.0 등)를 올리면 GitHub Actions가 태그에서 버전을 자동으로 읽어 APK(설치용)·AAB(스토어용)·버전 정보(version.json)를 빌드하고, APK와 버전 정보를 Google Drive에 올리되 파일을 새로 만들지 않고 같은 파일 ID를 유지한 채 내용만 교체해 다운로드 주소가 바뀌지 않도록 했습니다.',
          '앱은 실행 시 버전 정보를 확인해 현재 버전보다 높으면 업데이트 안내 모달을 띄우고, 사용자가 버튼 한 번으로 최신 APK를 받아 설치하도록 구현했습니다.',
          '결과: 스토어 심사 없이 최신 버전을 즉시 배포할 수 있게 돼, 잦은 업데이트와 여러 설치처 대응이 수월해졌습니다.',
        ],
      },
      {
        title: 'Bluetooth 디바이스 연동',
        bullets: [
          'Bluetooth 디바이스 연동과 연결 상태·예외 상황 피드백을 구현하고, 현장에서 화면을 보지 않아도 되도록 TTS 실시간 음성 안내를 붙였습니다.',
        ],
      },
    ],
  },
  {
    name: '가도돼멍',
    subtitle: '반려동물 동반 장소·펫 캠핑 탐색 서비스',
    client:
      '개인/팀 프로젝트 — 2026 관광데이터 활용 공모전 출품작',
    period: '2026.07 — 현재 (운영 중)',
    role: '사용자 웹앱·관리자 콘솔 프론트엔드 기능 개발 담당',
    link: 'https://gadomung.kr',
    stack: [
      { label: 'Framework', value: 'React 19' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Build / Monorepo', value: 'Vite, pnpm workspace + Turborepo' },
      { label: 'State', value: 'TanStack Query' },
      { label: 'Map', value: 'Kakao Maps SDK' },
      { label: 'API Codegen', value: 'orval (OpenAPI)' },
      { label: 'Validation', value: 'Zod, react-hook-form' },
      { label: '공공데이터', value: '한국관광공사(KTO), 고캠핑 OpenAPI' },
    ],
    achievements: [
      {
        title: 'API 연동 계층 설계 — 백엔드 변경으로부터 화면 보호',
        bullets: [
          '백엔드 API 명세(OpenAPI)를 기준으로 API 호출 코드를 자동 생성(orval)하고, 그 위에 도메인용 래퍼를 한 겹 둬서 응답의 공통 껍데기를 벗기고 이름을 정리했습니다. 덕분에 백엔드 스펙이 바뀌어도 이 중간 계층만 고치면 되도록 화면에 미치는 영향을 가뒀습니다.',
          '자동 생성된 코드를 도메인별로 다시 정리하는 후처리 스크립트를 만들어, 한 곳에서만 쓰는 타입은 그 도메인에, 여러 곳이 공유하는 타입은 공용으로 모았습니다.',
        ],
      },
      {
        title: '지도 연동 — 카카오맵을 React에 자연스럽게 붙이기',
        bullets: [
          '카카오맵 SDK는 "직접 명령을 내리는" 방식이라 화면을 상태로 그리는 React와 충돌하기 쉬운데, 지도를 불필요하게 다시 만들지 않도록 ref로 제어하고, 지도는 그대로 둔 채 마커만 골라서 갱신되도록 나눴습니다. 버튼에서 지도로 명령을 보낼 때는 props를 여러 단계 넘기지 않고 이벤트로 연결했고, 마커 묶음(클러스터링)과 상황별 핀 아이콘도 구현했습니다.',
        ],
      },
    ],
  },
]
