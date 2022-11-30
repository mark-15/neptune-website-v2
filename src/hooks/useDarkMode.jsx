import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { usePrefersDarkMode } from './usePrefersDarkMode'

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled', undefined)

  const prefersDarkMode = usePrefersDarkMode()

  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

  useEffect(() => {
    const className = 'dark-mode'
    const element = window.document.body
    if (enabled) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [enabled])

  return [enabled, setEnabledState]
}
