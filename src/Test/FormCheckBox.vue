<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="check">
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        :id="`form_group_${groupIndex}`"
        v-model="selected"
        :options="dataList"
        :aria-describedby="ariaDescribedby"
        :name="`form_group_${groupIndex}`"
        @change="updateCheck"
      />
    </b-form-group>

    <div>Selected: <strong>{{ selected }}</strong></div>
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
      selected: [],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
    }
  },
  computed: {
  },
  methods: {
    updateCheck() {
      this.$emit('check', this.groupIndex, this.selected)
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/variables.scss";

section.check {
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}
</style>
