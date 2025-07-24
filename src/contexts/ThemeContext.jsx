import React, { useEffect, useState } from 'react'
import { ThemeContext } from './theme'

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved
    }

    // Fall back to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Store theme preference
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = e => {
      // Only update if user hasn't set a preference
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
