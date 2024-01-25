<template>
  <div class="stretched level1-endless-ocean">
    <img
      src="/images/level1/frogfish.png"
      alt="Frogfish"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 18rem; height: auto"
    >

    <div
      v-if="theoreticalContent"
      class="box tC"
    >
      <!-- Task 1.2: Goal setting -->
      <h1 class="heading">
        Ziele setzen
      </h1>
      <h3 class="h1">
        Definition: Ziele
      </h3>
      <p class="p">
        Ziele sind die für eine gerichtete Handlung oder das Ergebnis einer konkreten Leistung mögliche und notwendige Vorgabe eines Endzustands oder Endprodukts.
        Sie bestimmen über die aktuelle Aufnahme, Ausführung, Veränderung und Beendigung von Handlungen und die anschließende Bewertung der zustande gekommenen Ergebnisse.
      </p>
      <h3 class="h1">
        Kategorisierung von Zielen
      </h3>
      <div>
        <p class="p">
          Ziele können darüber hinaus unterschiedliche Zeithorizonte haben.
          Bezogen auf das Studium ergeben sich folgende Zielkategorien:
        </p>
        <ul class="p">
          <li>
            Langfristige Ziele: beziehen sich auf das Studium als Ganzes oder auf Teile davon
          </li>
          <li>
            Mittelfristige Ziele:  beziehen sich auf ein Studienjahr oder einzelne Semester
          </li>
          <li>
            Kurzfristige Ziele: beziehen sich auf einzelne Wochen und Tage
          </li>
        </ul>
      </div>

      <base-button
        class="baseBtn"
        variant="primary"
        text="Start"
        @click="theoreticalContent = false"
      />
    </div>

    <div
      v-else
      class="tC box"
    >
      <h1 class="heading">
        Ziele setzen
      </h1>
      <p class="description">
        Ziele können einen unterschiedlichen Zeithorizont haben.
        Dabei gibt es langfristige ganzes Studium, mittelfristige einzelne Semester und kurzfristige einzelne Wochen/Tage Ziele.
        Setze dir jeweils ein spezifisches Ziel zu jedem Zeithorizont.
      </p>

      <div
        v-for="(item, index) in questions"
        :key="index"
      >
        <text-area
          :id="item.id"
          :label="item.label"
          @input="handleText"
        />
      </div>
      <base-button
        class="baseBtn"
        variant="primary"
        text="Nächstes Level"
        @click="handleMult"
      />
      <!-- <base-button
        v-if="completed"
        variant="primary"
        text="Nächstes Level"
        @click="handleNext"
      />
      <base-button
        v-else
        variant="primary"
        text="Weiter"
        :disabled="nextBtnStatus"
        @click="handleCompleted"
      /> -->
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import TextArea from '@/components/ui/TextArea.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level1Part2',
  components: {
    BaseButton,
    TextArea,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      answers: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
      },
      questions: [
        {
          id: 'question_1',
          label: '1. Langfristiges Ziel',
        },
        {
          id: 'question_2',
          label: '2. Mittelfristiges Ziel',
        },
        {
          id: 'question_3',
          label: '3. Kurzfristiges Ziel',
        },
        {
          id: 'question_4',
          label: '4. Welche Stärken können dir bei der Erreichung dieser Ziele helfen?',
        },
        {
          id: 'question_5',
          label: '5. Welche Schwächen könnten die Zielerreichung beeinträchtigen?',
        },
      ],
    }
  },
  computed: {
    nextBtnStatus() {
      // if (this.answers.question1 !== null
      // && this.answers.question2 !== null
      // && this.answers.question3 !== null
      // && this.answers.question4 !== null
      // && this.answers.question5 !== null) {
      //   return false
      // }
      // return true

      return false
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    handleText(id, value) {
      if (id === this.questions[0].id) {
        this.answers.question1 = value
      }
      if (id === this.questions[1].id) {
        this.answers.question2 = value
      }
      if (id === this.questions[2].id) {
        this.answers.question3 = value
      }
      if (id === this.questions[3].id) {
        this.answers.question4 = value
      }
      if (id === this.questions[4].id) {
        this.answers.question5 = value
      }
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level1_2',
        data: this.answers,
      })
    },
    handleNext() {
      this.$router.push('/level/1/3')
    },
    handleMult() {
      this.handleCompleted()
      this.handleNext()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

ul {
  list-style: none;
}

.tC {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.baseBtn {
  text-align: center;
}

</style>
