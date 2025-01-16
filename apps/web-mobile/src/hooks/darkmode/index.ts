import { useState, useEffect } from "react"

export function useDarkMode() {
  const darkModeKeyLocalStorage = "dark-mode-preferable"

  const [darkModeState, setDarkModeState] = useState<boolean>(() => {
    const preferenceColorByLocal = localStorage.getItem(darkModeKeyLocalStorage)
    const preferenceColor = Boolean(JSON.parse(preferenceColorByLocal))

    return preferenceColor
  })

  useEffect(() => {
    localStorage.setItem(darkModeKeyLocalStorage, JSON.stringify(darkModeState))
    const { body } =  document
    darkModeState ? body.classList.add("dark") : body.classList.remove("dark")
  }, [darkModeState])

  return [darkModeState, setDarkModeState] as [boolean, typeof setDarkModeState]
}
