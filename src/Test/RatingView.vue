<template>
  <div class="fixed main-bg">
    <b-form-rating
      v-model="value"
      name="hamid"
      stars="5"
      icon-empty="circle"
      icon-half="circle-half"
      icon-full="circle-fill"
      variant="danger"
      color="#ff8800"
      size="lg"
      precision="1"
      show-value
      no-border
      icon-clear="slash-circle"
      show-clear
    />
    Value: {{ value }}

  </div>
</template>

<script>

export default {
  name: 'RatingView',
  components: {
  },
  data() {
    return {
      value: null,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

</style>
