<template>
  <div class="stretched level1-endless-ocean">
    <img
      src="/images/level1/frogfish.png"
      alt="Frogfish"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 18rem; height: auto"
    >

    <div class="box introContainer">
      <!-- Task 1.3: Smart Quiz -->
      <h1 class="heading">
        Smart Quiz
      </h1>
      <div
        v-if="theoreticalContent"
      >
        <p class="p">
          Der Grund, dass die meisten Projekte, die wir uns vornehmen scheitern, ist die unklare Zielsetzung.
          Um eine gute Zielsetzung zu erreichen, hat sich die SMART-Technik als gutes Hilfsmittel erwiesen.
        </p>

        <h3 class="h1">
          Die SMART-Formel
        </h3>
        <p class="p">
          Um Ziele erfolgversprechender zu gestalten, sollten sie sich an den folgenden Kriterien orientieren. Diese kannst du in Zukunft immer verwenden, wenn du dir ein Ziel formulierst.
        </p>
        <ul class="p">
          <li>
            1. Spezifisch: Das Ziel so präzise und genau wie möglich formulieren. Wichtig ist, dass du den konkreten Zielzustand (SOLL-Zustand) beschreibst.
          </li>
          <li>
            2. Messbar: Das Ziel sollte Kriterien enthalten, mit denen du die Zielerreichung überprüfen kannst. Verwende ruhig konkrete Zahlen, an denen du erkennen kannst, ob du deinem Ziel nähergekommen bist.
          </li>
          <li>
            3. Anspruchsvoll: Das Ziel sollte anspruchsvoll sein, um deinen Ehrgeiz zur Erreichung des Ziels zu steigern. Achte jedoch darauf, dass dein Ziel dich nicht überfordert.
          </li>
          <li>
            4. Realistisch: Das Ziel sollte dennoch realistisch sein. Ziele, bei denen von Anfang an die Zielerreichung unmöglich ist, wirken demotivierend. Vielmehr führt es zu einer Motivationssteigerung, wenn du dir sicher bist, dass du dein Ziel auch wirklich erreichen kannst.
          </li>
          <li>
            5. Terminierbar: Das Ziel sollte eine genaue Zeitangabe enthalten, bis wann das Ziel erreicht werden soll.
          </li>
        </ul>

        <base-button
          class="baseBtn"
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <!-- <div
          v-if="!next"
          class="container"
        > -->
        <div
          class="container"
        >
          <span>
            <p class="question">1. Was bedeuten die Buchstaben der smarten Zielsetzung?</p>
          </span>

          <div
            v-for="(item, index) in questions"
            :key="index"
          >
            <text-area
              :id="item.id"
              :label="item.label"
              :right-choice="smartGoalLettersRightOptions"
              :completed="completed"
              @input="handleText"
            />
          </div>

          <multiple-choice
            :multiple-choice="multipleChoice1"
            :completed="completed"
            @change="multipleOptions"
          />

          <multiple-choice
            :multiple-choice="multipleChoice2"
            :completed="completed"
            @change="multipleOptions"
          />

          <text-area
            :id="question4"
            label="4. 'Ich möchte dieses Semester unbedingt die SQS-Klausur bestehen' Was würdest du an dieser Zielsetzung ändern, um sie smart zu gestalten?"
            @input="handleText"
          />

          <text-area
            :id="question5"
            label="5. Versuche, eines oder mehrere deiner Ziele (kurzfristig, mittelfristig oder langfristig) in eine smarte Zielsetzung umzuformulieren."
            @input="handleText"
          />
        </div>

        <!-- <div
          v-else
        >
          <DoughnutChart
            :chart-data="chartData"
          />
        </div> -->

        <base-button
          v-if="completed"
          class="baseBtn"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <!-- <base-button
          v-if="completed && next"
          class="baseBtn"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        /> -->
        <!-- <base-button
          v-else-if="completed && !next"
          class="baseBtn"
          variant="primary"
          text="Zeige Ergebnisse"
          @click="handleResults"
        /> -->
        <base-button
          v-else
          class="baseBtn"
          variant="primary"
          text="Weiter"
          :disabled="nextBtnStatus"
          @click="handleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import TextArea from '@/components/ui/TextArea.vue'
import MultipleChoice from '@/components/ui/MultipleChoice.vue'
// import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import colorsMixin from '@/mixins/colorsMixin'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level1Part3',
  components: {
    BaseButton,
    TextArea,
    MultipleChoice,
    // DoughnutChart,
  },
  mixins: [colorsMixin, timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      // next: false,
      answers: {
        smartGoalLetters: {
          spezifisch: '',
          messbar: '',
          anspruchsvoll: '',
          realistisch: '',
          terminiert: '',
        },
        multipleChoice1: null,
        multipleChoice2: null,
        question4: '',
        question5: '',
      },
      questions: [
        {
          id: '0',
          label: 'S',
        },
        {
          id: '1',
          label: 'M',
        },
        {
          id: '2',
          label: 'A',
        },
        {
          id: '3',
          label: 'R',
        },
        {
          id: '4',
          label: 'T',
        },
      ],
      multipleChoice1: {
        name: 'question_2',
        question: '2. Ich fertige mir bis zum 15.01.2043 ein Skript für "Lehren und Lernen" an. Dafür werde ich jede Woche die aktuelle Vorlesung zusammenfassen und meine Notizen einfügen. Falls ich mal krank bin, werde ich die Inhalte spätestens in der darauffolgenden Woche nachholen." Was meinst du - fehlt ein smartes Ziel in dieser Aussage oder sind alle erfüllt?',
        rightChoice: -1,
        choices: [
          'Alle smarten Ziele sind erfüllt',
          'Die Aussage ist nicht Messbar',
          'Die Aussage ist nicht Terminiert',
          'Die Aussage ist nicht Spezifisch',
          'Die Aussage ist nicht Realistisch',
        ],
      },
      multipleChoice2: {
        name: 'question_3',
        question: '3.Die Kriterien der smarten Zielsetzung müssen immer alle erfüllt sein.',
        rightChoice: -1,
        choices: ['Richtig', 'Falsch'],
      },
      question4: 'question_4',
      question5: 'question_5',
    }
  },
  computed: {
    nextBtnStatus() {
      // if (this.answers.smartGoalLetters.spezifisch !== null
      // && this.answers.smartGoalLetters.messbar !== null
      // && this.answers.smartGoalLetters.anspruchsvoll !== null
      // && this.answers.smartGoalLetters.realistisch !== null
      // && this.answers.smartGoalLetters.terminiert !== null) {
      //   return false
      // }
      // return true

      return false
    },
    smartGoalLettersRightOptions() {
      return ['spezifisch', 'messbar', 'anspruchsvoll', 'realistisch', 'terminiert']
    },
    // chartData() {
    //   const chart = {}
    //   let answer1 = 0
    //   let answer2 = 0
    //   let answer3 = 0
    //   let answer4 = 0
    //   let answer5 = 0

    //   // Letters of Smart Goal Setting
    //   if (this.answers.smartGoalLetters.spezifisch.includes('spezifisch')) {
    //     answer1 = 1
    //   } else answer1 = 0
    //   if (this.answers.smartGoalLetters.messbar.includes('messbar')) {
    //     answer2 = 1
    //   }
    //   if (this.answers.smartGoalLetters.anspruchsvoll.includes('anspruchsvoll')) {
    //     answer3 = 1
    //   }
    //   if (this.answers.smartGoalLetters.realistisch.includes('realistisch')) {
    //     answer4 = 1
    //   }
    //   if (this.answers.smartGoalLetters.terminiert.includes('terminiert')) {
    //     answer5 = 1
    //   }

    //   // Chart datasets
    //   chart.labels = ['S', 'M', 'A', 'R', 'T']
    //   chart.datasets = []
    //   chart.datasets.push({
    //     backgroundColor: this.randomColor(chart.labels.length),
    //     data: [answer1, answer2, answer3, answer4, answer5],
    //   })
    //   return chart
    // },
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
        this.answers.smartGoalLetters.spezifisch = value.toLowerCase()
      }
      if (id === this.questions[1].id) {
        this.answers.smartGoalLetters.messbar = value.toLowerCase()
      }
      if (id === this.questions[2].id) {
        this.answers.smartGoalLetters.anspruchsvoll = value.toLowerCase()
      }
      if (id === this.questions[3].id) {
        this.answers.smartGoalLetters.realistisch = value.toLowerCase()
      }
      if (id === this.questions[4].id) {
        this.answers.smartGoalLetters.terminiert = value.toLowerCase()
      }
      // question 4 and 5
      if (id === this.question4) {
        this.answers.question4 = value
      }
      if (id === this.question5) {
        this.answers.question5 = value
      }
    },
    multipleOptions(name, value) {
      if (name === this.multipleChoice1.name) {
        this.answers.multipleChoice1 = value
      }
      if (name === this.multipleChoice2.name) {
        this.answers.multipleChoice2 = value
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
        level: 'level1_3',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/1/4')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* gap: 1rem; */
  padding-bottom: 1rem;
}

ul {
  list-style: none;
}

.baseBtn {
  text-align: center;
}

.introContainer {
  display:flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
