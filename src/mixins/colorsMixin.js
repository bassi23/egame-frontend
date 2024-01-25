import uniqolor from 'uniqolor'

export default {
  data() {
    return {
    }
  },
  methods: {
    // Generate random Id
    randomId(length) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      return result
    },
    // Generate array of random colors
    randomColor(length) {
      const randomIdLength = 10
      const colors = []
      for (let i = 0; i < length; i++) {
        colors.push(uniqolor(this.randomId(randomIdLength)).color)
      }
      return colors
    },
  },
}
