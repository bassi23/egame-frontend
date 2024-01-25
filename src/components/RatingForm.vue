<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="rating">
    <b-form-group
      :id="`form_group_${groupIndex}`"
      :name="`form_group_${groupIndex}`"
    >
      <b-form-radio-group
        v-model="selected"
        :options="dataList"
        :name="`form_group_${groupIndex}`"
        @change="updateRating"
      />
    </b-form-group>

  </section>
</template>

<script>
export default {
  props: {
    groupIndex: {
      type: Number,
      default: 0,
    },
    dataList: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
  },
  methods: {
    updateRating() {
      this.$emit('choose-rating', this.groupIndex, this.selected)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
// @import "@/assets/scss/variables.scss";

$orange: hsl(25, 97%, 53%);
$white: hsl(0, 0%, 100%);
$light-grey: hsl(217, 12%, 63%);
$medium-grey: hsl(216, 12%, 54%);
$dark-blue: hsl(213, 19%, 18%);
$very-dark-blue: hsl(216, 12%, 8%);

section.rating {
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}

section.rating .form-group {
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 0.375em;
}

section.rating .form-group {
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

div.custom-control {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
}

div.custom-control label {
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 0.375em;
}

div.custom-control input {
  display: flex;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
}

div.custom-control input:checked + label {
  display: flex;
  flex-shrink: 0;
  content: '';
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #00005c;
}

div.custom-control:hover label {
  background-color: #d6d6e5;
}
label {
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 0.375em;
}

label span {
  display: flex;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
}

label span:after {
  border: 10px solid yellow;
}

/* Hide the browser's default radio button */
label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
label span:before {
  display: flex;
  flex-shrink: 0;
  content: '';
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #00005c;
}

/* On mouse-over */
label span:hover {
  background-color: #d6d6e5;
}
// label:hover input ~ span {
//   background-color: #d6d6e5;
// }

/* On mouse-click */
label input:checked ~ span {
  background-color: #d6d6e5;
}

label:hover input:checked ~ span {
  background-color: #d6d6e5;
}

/* When the radio button is checked */
label input:checked ~ span:before {
  box-shadow: inset 0 0 0 0.4375em #00005c;
}

/* When the radio button is disabled */
label input:disabled ~ span:before {
  background-color: #ccc;
  box-shadow: inset 0 0 0 0.4375em dimgrey;
  color: linen;
  opacity: 1;
}

label input:disabled ~ span {
  cursor: not-allowed;
}

label:hover input:disabled ~ span {
  background-color: #d6d6e5;
}

</style>
