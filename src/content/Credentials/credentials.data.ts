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
