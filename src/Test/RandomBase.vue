<template>
  <div class="fixed main-bg">
    Array of Colors: {{ colors }}
  </div>
</template>

<script>
import { randomColor } from '@/utils/generator'

export default {
  name: 'RandomBase',
  components: {
  },
  data() {
    return {
      colorsLength: 5,
    }
  },
  computed: {
    colors() {
      return randomColor(this.colorsLength)
    },
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

</style>
