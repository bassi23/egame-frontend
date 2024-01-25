<template>
  <div class="fixed main-bg">

    <rating-switch
      :group-size="5"
      @choose-rating="updateRating"
    />

  </div>
</template>

<script>
import RatingSwitch from '@/Test/RatingSwitch.vue'

export default {
  name: 'RatingView',
  components: {
    RatingSwitch,
  },
  data() {
    return {
      selectedRating: null,
    }
  },
  methods: {
    updateRating(rating) {
      this.selectedRating = rating
      // console.log(rating)
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/variables.scss";

</style>
