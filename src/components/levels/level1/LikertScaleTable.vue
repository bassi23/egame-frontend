<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th
            v-for="(choice, choiceIndex) in likertScale.choices"
            :key="choiceIndex"
          >
            {{ choice }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(question, questionIndex) in likertScale.questions"
          :key="questionIndex"
        >
          <th>{{ question.question }}</th>
          <td
            v-for="(choice, choiceIndex) in likertScale.choices"
            :key="choiceIndex"
          >
            <label
              :for="`question_${questionIndex}_choice_${choiceIndex}`"
            >
              <input
                :id="`question_${questionIndex}_choice_${choiceIndex}`"
                :name="questionIndex"
                :value="`question_${questionIndex}_choice_${choiceIndex}`"
                type="radio"
                @change="getLikertScale(questionIndex, choiceIndex)"
              >
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'LikertScaleTable',
  components: {
  },
  props: {
    likertScale: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getLikertScale(question, option) {
      this.$emit('change', question, option)
    },
  },
}
</script>

<style lang="scss" scoped>
table, th, td {
  border: 1px solid;
  padding: .5rem;
}
table {
  margin-bottom: 2rem;
}
</style>
