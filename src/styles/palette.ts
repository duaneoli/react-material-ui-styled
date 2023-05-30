interface IPalette {
  [key: string]: string
}

export const blues: IPalette = {
  A050: '#E9EAF2',
  A100: '#C9C9E0',
  A200: '#A7A7CA',
  A400: '#6E6AA4',
  A600: '#52488C',
  A800: '#423574',
  A900: '#34255D',
}

export const turquoises: IPalette = {
  T050: '#DAF1F1',
  T100: '#A3DDDC',
  T200: '#5FC8C5',
  T300: '#00B1AC',
  T400: '#00A099',
  T600: '#008278',
  T800: '#006258',
}

export const oranges = {
  L100: '#FFCEBB',
  L200: '#FFAF8F',
  L300: '#FF9062',
  L400: '#FF783E',
  L500: '#FF6218',
  L600: '#F45C13',
}

export const grays = {
  N000: '#FFFFFF',
  N050: '#F9F9F9',
  N100: '#F3F3F3',
  N200: '#EAEAEA',
  N300: '#DBDBDB',
  N400: '#B7B7B7',
  N500: '#989898',
  N600: '#6F6F6F',
  N700: '#5C5C5C',
  N800: '#3D3D3D',
  N900: '#1D1D1D',
}

export default {
  blues,
  turquoises,
  oranges,
  grays,
}
