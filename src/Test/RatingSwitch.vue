<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="rating">
    <fieldset class="select-rating">
      <div
        v-for="radio in radioGroup"
        :key="radio"
        class="form-group"
      >
        <input
          :id="`input_radio_${radio}`"
          v-model="selectedRating"
          type="radio"
          name="rating"
          :value="radio"
          @change="updateRating"
        >
        <label :for="`input_radio_${radio}`">
          {{ radio }}
        </label>
      </div>
    </fieldset>
  </section>
</template>

<script>
export default {
  props: {
    groupSize: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selectedRating: 1,
    }
  },
  computed: {
    radioGroup() {
      return Array.from({ length: this.groupSize }, (_, i) => i + 1)
    },
  },
  // mounted() {
  //   this.selectedRating = 1
  // },
  methods: {
    updateRating() {
      this.$emit('choose-rating', this.selectedRating)
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/variables.scss";

$orange: hsl(25, 97%, 53%);
$white: hsl(0, 0%, 100%);
$light-grey: hsl(217, 12%, 63%);
$medium-grey: hsl(216, 12%, 54%);
$dark-blue: hsl(213, 19%, 18%);
$very-dark-blue: hsl(216, 12%, 8%);

.rating {
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}

.rating .select-rating {
  display: grid;
  gap: 24px;
}
.rating .select-rating {
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.rating .select-rating div.form-group {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
}
.rating .select-rating div.form-group label {
  color: $medium-grey;
  font-size: 1em;
  font-weight: 700;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba($medium-grey, 0.1);
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.rating .select-rating div.form-group input {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
}
.rating .select-rating div.form-group input:checked + label {
  background: $orange;
  color: $white;
}
.rating .select-rating div.form-group:hover label {
  background: $light-grey;
  color: $white;
}
</style>
