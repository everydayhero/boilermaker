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
  head: '"VAG Rounded W01 Bold", Lato, Helvetica, Arial',
  body: 'Avenir, Lato, Helvetica, Arial'
}

export const colors = {
  light: '#fff',
  dark: '#333',
  green: '#40ae49',
  pink: '#e2499a',
  blue: '#0090ba',
  orange: '#e24a26',
  purple: '#ac4399'
}
