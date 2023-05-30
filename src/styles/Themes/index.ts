import { DefaultTheme } from 'styled-components'
import { DefaultDark, DefaultLight } from './Default'

export type ThemeMode = 'light' | 'dark'
export type ThemeType = 'default'

type IThemes = {
  [types in ThemeType]: {
    [modes in ThemeMode]: DefaultTheme
  }
}

const Themes: IThemes = {
  default: { light: DefaultLight, dark: DefaultDark },
}

export default Themes
