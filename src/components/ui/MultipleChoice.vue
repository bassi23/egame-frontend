<template>
  <div class="container">
    <p class="question">
      {{ multipleChoice.question }}
    </p>
    <div
      v-for="(item, idx) in multipleChoice.choices"
      :key="idx"
    >
      <label
        :for="multipleChoice.name + '_' + idx"
      >
        <input
          :id="multipleChoice.name + '_' + idx"
          v-model="selected"
          type="radio"
          :value="idx"
          :name="multipleChoice.name"
          :disabled="completed"
          @change="$emit('change', multipleChoice.name, idx)"
        >
        <span
          v-if="isInt(multipleChoice.rightChoice)"
          :class="completed && multipleChoice.rightChoice == -1 ? '' : completed && multipleChoice.rightChoice == idx ? 'success' : completed && idx == selected ? 'danger' : ''"
        >
          {{ item }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultipleChoice',
  components: {
    // BSV
  },
  props: {
    multipleChoice: {
      type: Object,
      default: () => ({}),
    },
    // choices: {
    //   type: Array,
    //   default: () => [],
    // },
    completed: {
      type: Boolean,
      default: false,
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
    isInt(value) {
      return !Number.isNaN(value) && parseInt(Number(value), 10) === value && !Number.isNaN(parseInt(value, 10))
    },
  },
}
</script>

<style lang="scss" scoped>
// .container,
// .container:after,
// .container:before {
//   box-sizing: border-box;
// }

// .container {
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
// }

.question {
  text-align: left;
  max-width: max-content;
  font-weight: 450;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.375em;
  background-color: #51b9d6;
  color: white;
  border-radius: 1rem;
  font-size: 1.2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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

/* When success or danger is added */
.success {
  background-color: #67C23A;
  border: 3px solid #67C23A;
}

.danger {
  background-color: #F56C6C;
  border: 3px solid #F56C6C;
}
</style>
