import uniqolor from 'uniqolor'

export const Colors = ['#41B883', '#E46651', '#00D8FF', '#DD1B16']

// Generate array of random colors
export function randomColor(length) {
  const colors = []
  const min = Math.ceil(1111111111)
  const max = Math.floor(9999999999)

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
    colors.push(uniqolor(randomNumber).color)
  }
  return colors
}

export default Colors
