<template>
  <div class="container">
    <div
      v-for="(data, questionIndex) in dataObj.questions"
      :key="`${dataObj.name}_question_${questionIndex}`"
    >
      <p
        v-if="data.question=null"
        class="question"
      >
        {{ data.question }}
      </p>
      <template v-if="!completed">
        <div
          v-for="(choice, choiceIndex) in data.choices"
          :key="`${dataObj.name}_question_${questionIndex}_choice_${choiceIndex}`"
          class="label"
        >
          <b-form-checkbox
            :id="`${dataObj.name}_question_${questionIndex}_choice_${choiceIndex}`"
            :name="`${dataObj.name}_question_${questionIndex}_choice_${choiceIndex}`"
            :disabled="completed"
            @change="(e) => checkboxHandler(dataObj.name, questionIndex, choiceIndex, e)"
          />
          <span>{{ choice }}</span>
        </div>
      </template>

    </div>

    <div
      v-for="(result, index) in dataObj.feedbacks"
      :key="`${dataObj.name}_feedback_${index}`"
    >
      <label
        v-if="completed"
        :for="`${dataObj.name}_feedback_${index}`"
      >
        <span>{{ result }}</span>
        <input
          :id="`${dataObj.name}_feedback_${index}`"
          :name="`${dataObj.name}_feedback_${index}`"
          :value="calculateFeedbacks(dataObj.name, index)"
          type="text"
          :disabled="completed"
          @input="(e) => inputHandler(dataObj.name, index, e.target.value)"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EigeneMotive',
  components: {
    // BSV
  },
  props: {
    dataObj: {
      type: Object,
      default: () => ({}),
    },
    completed: {
      type: Boolean,
      default: false,
    },
    answers: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  methods: {
    calculateFeedbacks(name, index) {
      const fb = this.answers[name].feedbacks
      return fb[Object.keys(fb)[index]]
    },
    checkboxHandler(name, questionIndex, choiceIndex, value) {
      this.$emit('change', name, questionIndex, choiceIndex, value)
    },
    inputHandler(name, index, value) {
      this.$emit('input', name, index, value)
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
  margin-bottom: 0.375em;
  padding: 2rem;
  min-width: min-content;
  max-width: max-content;
  font-size: 1.2rem;
  font-weight: 450;
  background-color: #51b9d6;
  color: white;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.label {
  display: flex;
  font-size: medium;
  font-weight: 550;
  text-align: left;
  line-height: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 0.375em;
}

.label span {
  display: flex;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
}

.label span:after {
  border: 10px solid yellow;
}

/* Hide the browser's default radio button */
.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
// .label span:before {
//   display: flex;
//   flex-shrink: 0;
//   content: '';
//   background-color: #fff;
//   width: 1.5em;
//   height: 1.5em;
//   border-radius: 50%;
//   margin-right: 0.375em;
//   transition: 0.25s ease;
//   box-shadow: inset 0 0 0 0.125em #00005c;
// }

/* On mouse-over */
.label span:hover {
  background-color: #d6d6e5;
}

// .label:hover input ~ span {
//   background-color: #d6d6e5;
// }

/* On mouse-click */
.label input:checked ~ span {
  background-color: #d6d6e5;
}

.label:hover input:checked ~ span {
  background-color: #d6d6e5;
}

/* When the radio button is checked */
.label input:checked ~ span:before {
  box-shadow: inset 0 0 0 0.4375em #00005c;
}

/* When the radio button is disabled */
.label input:disabled ~ span:before {
  background-color: #ccc;
  box-shadow: inset 0 0 0 0.4375em dimgrey;
  color: linen;
  opacity: 1;
}

.label input:disabled ~ span {
  cursor: not-allowed;
}

.label:hover input:disabled ~ span {
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

.containercheckbox {
  align-content: center;
}
</style>
