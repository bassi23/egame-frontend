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
        :disabled="completed"
        :class="completed && isOptionsSame ? 'success' : completed && !isOptionsSame ? 'danger' : ''"
        @change="updateCheck"
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
    rightChoice: {
      type: Array,
      default: () => ([]),
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    rightOptions() {
      return [this.dataList[this.rightChoice[0]].value, this.dataList[this.rightChoice[1]].value]
    },
    isOptionsSame() {
      // return (this.selected.length === this.rightOptions.length) && this.selected.every((element, index) => element === this.rightOptions[index])
      return this.selected.slice(0).sort().toString() === this.rightOptions.slice(0).sort().toString()
    },
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

.success {
  background-color: #67C23A;
  border: 3px solid #67C23A;
}

.danger {
  background-color: #F56C6C;
  border: 3px solid #F56C6C;
}
</style>
