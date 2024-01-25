<template>
  <div class="container">
    <b-form-group
      :id="`input-group-${id}`"
      class="form-group"
      :label="label"
      :label-for="id"
    >
      <b-form-input
        :id="id"
        v-model="value"
        :type="inputType"
        class="textbox"
        placeholder=""
        required
        @input="$emit('input', $event, id)"
        @change="$emit('change', value, id)"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  components: {
  },
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped>
.form-control {
  display: inline-block !important;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.form-group {
  font-size: 1.5rem;
  font-weight: bold;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.textbox {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
  width: 18rem;
  height: 4rem;
  background: #EAEAEA;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}

.textbox:focus {
  outline: 1px solid #acabab;
}
</style>
