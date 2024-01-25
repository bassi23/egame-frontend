export default {
  data() {
    return {
      seconds: 0,
    }
  },
  methods: {
    // set time in seconds
    startTimer() {
      setInterval(this.countDown, 1000)
    },
    // increment time in seconds
    countDown() {
      this.seconds += 1
    },
  },
}
