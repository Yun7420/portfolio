import { useCallback, useState } from 'react'

/** 모바일 메뉴 열림 상태 + 섹션 앵커로 부드럽게 스크롤 */
export function useSectionNav() {
  const [open, setOpen] = useState(false)

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }, [])

  const toggleMenu = useCallback(() => setOpen((v) => !v), [])

  return { open, toggleMenu, scrollTo }
}
