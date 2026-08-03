/** 국내 번호를 tel: 링크로 변환 (형식이 맞지 않으면 null) */
export function telHref(phone: string): string | null {
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 10) return null
  if (digits.startsWith('82')) return `tel:+${digits}`
  if (digits.startsWith('0')) return `tel:+82${digits.slice(1)}`
  return `tel:+${digits}`
}

/** 지역명을 구글 지도 검색 URL로 변환 */
export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
