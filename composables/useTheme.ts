type ThemeMode = 'light' | 'dark' | 'system'

export const useTheme = () => {
  const theme = useState<ThemeMode>('theme', () => 'system')

  const apply = (t: ThemeMode) => {
    if (!import.meta.client) return
    const dark = t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', dark)
  }

  const set = (t: ThemeMode) => {
    theme.value = t
    if (import.meta.client) localStorage.setItem('bashpty-theme', t)
    apply(t)
  }

  const cycle = () => {
    const order: ThemeMode[] = ['system', 'light', 'dark']
    const next = order[(order.indexOf(theme.value) + 1) % order.length]
    set(next)
  }

  const init = () => {
    if (!import.meta.client) return
    const saved = localStorage.getItem('bashpty-theme') as ThemeMode | null
    const t = saved || 'system'
    theme.value = t
    apply(t)
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (theme.value === 'system') apply('system')
    })
  }

  return { theme, set, cycle, init }
}
