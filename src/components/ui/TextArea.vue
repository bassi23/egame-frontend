<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="container">
    <div v-if="label.length > 0">
      <div
        class="question"
        :for="id"
      >
        {{ label }}
      </div>
    </div>
    <textarea
      :id="id"
      v-model="value"
      type="text"
      class="textarea"
      :class="completed && value == rightChoice[id] ? 'success' : completed && value != rightChoice[id] ? 'danger' : ''"
      placeholder=""
      :disabled="completed"
      @input="$emit('input', id, value)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  components: {},
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
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
      value: '',
    }
  },
  methods: {},
}
</script>

<style scoped>
.form-control {
  display: inline-block !important;
}

.container {
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
}

.question {
  font-weight: 450;
  padding: 2rem;
  margin-bottom: 0.375em;
  background-color: #51b9d6;
  text-align: left;
  color: white;
  border-radius: 1rem;
  font-size: 1.2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  max-width: max-content;
}

.label {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.textarea {
  height: 4rem;
  background: #eaeaea;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  resize: both;
  min-width: 20rem;
  max-width: max-content;
}

.textarea:focus {
  outline: 1px solid #acabab;
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
