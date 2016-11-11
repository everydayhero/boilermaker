export const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  `${basis * value}${unit}`
)

export const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

export const transitions = {
  easeOut: 'ease-out .25s'
}

export const fonts = {
  heading: 'serif',
  body: 'sans-serif'
}

export const colors = {
  light: '#FFF',
  dark: '#000'
}
