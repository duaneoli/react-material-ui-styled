import React, { useContext, useState } from 'react'
import { ThemeMode, ThemeType } from 'styles/Themes/index'

interface IThemeStore {
  children: React.ReactNode
}

type IThemeContext = {
  theme: { type: ThemeType; mode: ThemeMode }
  switchTheme: (type: ThemeType, mode?: ThemeMode) => void
}

const ThemeContext = React.createContext<IThemeContext | null>(null)

function ThemeStore({ children }: IThemeStore) {
  const [theme, setTheme] = useState<{ type: ThemeType; mode: ThemeMode }>({ type: 'default', mode: 'light' })

  const switchTheme = (type: ThemeType, mode: ThemeMode = 'light') => setTheme({ type, mode })

  return <ThemeContext.Provider value={{ switchTheme, theme }}>{children}</ThemeContext.Provider>
}

function useThemeStore(): IThemeContext {
  const context = useContext(ThemeContext)
  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')
  return context as IThemeContext
}

export { ThemeStore, ThemeContext, useThemeStore }
