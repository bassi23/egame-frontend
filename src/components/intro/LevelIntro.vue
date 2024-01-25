<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mainContainer">
    <h1 class="heading">
      {{ title }}
    </h1>

    <span
      slot="text"
      class="intro-container"
      v-html="text"
    />

    <base-button
      v-if="count >= dialouge.length - 1"
      variant="primary"
      text="Starte Level"
      @click="handleClick"
    />

    <base-button
      v-else
      class="btnBase"
      variant="primary"
      text="Weiter"
      @click="handleNext"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'LevelIntro',
  components: {
    BaseButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    dialouge: {
      type: Array,
      default: () => ([]),
    },
    // dialouge: {
    //   type: Object,
    //   default: () => ({}),
    // },
    link: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: this.dialouge[0].text,
      count: 0,
    }
  },
  methods: {
    handleNext() {
      this.count += 1
      this.text = this.dialouge[this.count].text
      // this.setCount(this.count)
      // this.setText()
    },
    // setCount(n) {
    //   this.count = n + 1
    // },
    // setText() {
    //   this.text = this.dialouge[this.count].text
    // },
    handleClick() {
      this.$router.push(this.link)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

.mainContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.btnBase {
  text-align: center;
}
</style>
