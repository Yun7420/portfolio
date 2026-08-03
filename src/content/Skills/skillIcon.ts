/** 스킬 이름으로 Material Symbols 아이콘을 고릅니다. */
export const iconForSkill = (skill: string) => {
  const key = skill.toLowerCase()
  if (key.includes('html')) return 'language'
  if (key.includes('tailwind') || key.includes('css')) return 'format_paint'
  if (key.includes('javascript')) return 'data_object'
  if (key.includes('typescript')) return 'integration_instructions'
  if (key.includes('next')) return 'rocket_launch'
  if (key.includes('react') || key.includes('jotai') || key.includes('tanstack'))
    return 'widgets'
  if (key.includes('vue') || key.includes('ionic')) return 'view_quilt'
  if (key.includes('flutter') || key.includes('dart')) return 'flutter_dash'
  if (key.includes('vite') || key.includes('turborepo') || key.includes('pnpm'))
    return 'bolt'
  if (key.includes('node') || key.includes('nginx') || key.includes('firebase'))
    return 'dns'
  if (key.includes('github') || key.includes('sentry') || key.includes('zod'))
    return 'verified'
  if (key.includes('maps')) return 'map'
  if (key.includes('capacitor')) return 'phone_iphone'
  return 'deployed_code'
}
