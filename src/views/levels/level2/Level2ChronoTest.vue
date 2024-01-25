<template>
  <div class="stretched level2-ancient-ruins">
    <img
      src="/images/level2/maid.png"
      alt="Maid"
      class="character character_position_top character_animation_top"
      style="width: 12rem; height: auto"
    />
    <div class="box boxContainer">
      <h1 class="heading">Chronotest</h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Bei der Einschätzung der Bearbeitungslänge einer Aufgabe sollte immer die persönliche
          Leistungskurve im Hinterkopf behalten werden.
          <br>
          Da die Leistungsfähigkeit sehr variabel ist
          und sich über den Tag hinweg mehrfach ändert, hilft die Leistungskurve bei der Verteilung
          von Routineaufgaben und anspruchsvollen Aufgaben. Routineaufgaben, <br>die nicht sehr
          anspruchsvoll sind, dafür aber oft Fleißarbeit erfordern, sollten für weniger
          leistungsstarke Phasen eingeplant werden. Anspruchsvolle Aufgaben hingegen, die große
          kognitive Anstrengung und hohe Konzentration erfordern, sollten in Phasen gelegt werden,
          in denen sich die Leistungsfähigkeit auf einem Hoch befindet.
        </p>

        <base-button variant="primary" text="Start" @click="theoreticalContent = false" />
      </div>

      <div v-else>
        <div v-if="!next">
          <p class="p">
            Lese jede Frage aufmerksam durch. Wähle die am besten auf dich zutreffende Antwort.
          </p>
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

          <multiple-choice
            :multiple-choice="multipleChoice3"
            :completed="completed"
            @change="multipleOptions"
          />

          <multiple-choice
            :multiple-choice="multipleChoice4"
            :completed="completed"
            @change="multipleOptions"
          />

          <multiple-choice
            :multiple-choice="multipleChoice5"
            :completed="completed"
            @change="multipleOptions"
          />

          <multiple-choice
            :multiple-choice="multipleChoice6"
            :completed="completed"
            @change="multipleOptions"
          />

          <multiple-choice
            :multiple-choice="multipleChoice7"
            :completed="completed"
            @change="multipleOptions"
          />
        </div>

        <div v-else>
          <div v-if="totalPoints >= 6 && totalPoints <= 10">
            <h1>Deine Punkte: {{ totalPoints }}</h1>
            <h1>Ausgeprägter Abendtyp</h1>
            <p>
              distinctive evening type: Du solltest wichtige Aufgaben abends erledigen, da du zu
              dieser Zeit am leistungsfähigsten bist.
            </p>
          </div>
          <div v-if="totalPoints >= 11 && totalPoints <= 15">
            <h1>Deine Punkte: {{ totalPoints }}</h1>
            <h1>Moderater Abendtyp</h1>
            <p>
              moderate evening type: Du solltest wichtige Aufgaben eher in den Nachmittag oder den
              frühen Abend verlegen, da du zu dieser Zeit am leistungsfähigsten bist.
            </p>
          </div>
          <div v-if="totalPoints >= 16 && totalPoints <= 22">
            <h1>Deine Punkte: {{ totalPoints }}</h1>
            <h1>Weder noch</h1>
            <p>
              Du kannst sowohl morgens als auch abends konzentriert arbeiten. Meistens hängt deine
              Leistungsfähigkeit von der Art der Aufgabe ab.
            </p>
          </div>
          <div v-if="totalPoints >= 23 && totalPoints <= 27">
            <h1>Deine Punkte: {{ totalPoints }}</h1>
            <h1>Moderater Morgentyp</h1>
            <p>
              moderate morning type: Du zeigst keine Präferenz für das Arbeiten am Morgen oder am
              Abend, lege dir wichtige Aufgaben so, dass du diese störungssfrei erledigen kannst.
            </p>
          </div>
          <div v-if="totalPoints >= 28 && totalPoints <= 32">
            <h1>Deine Punkte: {{ totalPoints }}</h1>
            <h1>Ausgeprägter Morgentyp</h1>
            <p>
              distinctive morning type Du solltest wichtige Aufgaben direkt morgens erledigen, da du
              zu dieser Zeit am leistungsfähigsten bist.
            </p>
          </div>
        </div>

        <base-button
          v-if="completed && next"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <base-button
          v-else-if="completed && !next"
          variant="primary"
          text="Zeige Ergebnisse"
          @click="handleResults"
        />
        <base-button
          v-else
          variant="primary"
          text="Weiter"
          :disabled="false"
          @click="handleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import MultipleChoice from '@/components/ui/MultipleChoice.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level2ChronoTest',
  components: {
    BaseButton,
    MultipleChoice,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      next: false,
      totalPoints: 0,
      answers: {
        multipleChoice1: {
          selected: null,
          points: null,
        },
        multipleChoice2: {
          selected: null,
          points: null,
        },
        multipleChoice3: {
          selected: null,
          points: null,
        },
        multipleChoice4: {
          selected: null,
          points: null,
        },
        multipleChoice5: {
          selected: null,
          points: null,
        },
        multipleChoice6: {
          selected: null,
          points: null,
        },
        multipleChoice7: {
          selected: null,
          points: null,
        },
      },
      multipleChoice1: {
        name: 'question_1',
        question:
          '1. Wenn du vollkommen frei in der Planung deines Abends wärst und am nächsten Tag keine Verpflichtungen hättest, zu welcher Zeit würdest du ins Bett gehen?',
        rightChoice: -1,
        choices: [
          '20:00 Uhr - 21:00 Uhr',
          '21:00 Uhr - 22:15 Uhr',
          '22:15 Uhr - 00:30 Uhr',
          '00:30 Uhr - 01:45 Uhr',
          '01:45 Uhr - 03:00 Uhr',
        ],
      },
      multipleChoice2: {
        name: 'question_2',
        question:
          'Du musst zwei Stunden harte körperliche Arbeit erledigen. Wenn du vollkommen frei wärest in der Planung deines Tages, in welchem der folgenden Tagesabschnitte würdest du diese Arbeit verrichten?',
        rightChoice: -1,
        choices: [
          '08:00 Uhr - 10:00 Uhr',
          '11:00 Uhr - 13:00 Uhr',
          '15:00 Uhr - 17:00 Uhr',
          '19:00 Uhr - 21:00 Uhr',
        ],
      },
      multipleChoice3: {
        name: 'question_3',
        question:
          'Aus irgendeinem Grund bist du mehrere Stunden später zu Bett gegangen als gewöhnlich, aber du musst am nächsten Morgen zu keiner bestimmten Zeit aufstehen. Welcher der folgenden Fälle tritt wahrscheinlich ein?',
        rightChoice: -1,
        choices: [
          'Ich wache zur gewohnten Zeit auf und kann nicht wieder einschlafen',
          'Ich wache zur gewohnten Zeit auf und döse danach',
          'Ich wache zur gewohnten Zeit auf und schlafe danach wieder ein',
          'Ich wache erst später als gewöhnlich auf',
        ],
      },
      multipleChoice4: {
        name: 'question_4',
        question:
          'Du musst einen zweistündigen Test absolvieren, von dem du weißt, dass er geistig fordernd ist. Wenn du die freie Wahl hättest, wann würdest du den Test machen?',
        rightChoice: -1,
        choices: [
          '08:00 Uhr - 10:00 Uhr',
          '11:00 Uhr - 13:00 Uhr',
          '15:00 Uhr - 17:00 Uhr',
          '19:00 Uhr - 21:00 Uhr',
        ],
      },
      multipleChoice5: {
        name: 'question_5',
        question:
          'Wenn du am nächsten Tag keine Verpflichtungen hättest und vollkommen frei in der Planung deines Tages wärest, wann würdest du aufstehen?',
        rightChoice: -1,
        choices: [
          '05:00 Uhr - 06:30 Uhr',
          '06:30 Uhr - 07:45 Uhr',
          '07:45 Uhr - 09:45 Uhr',
          '09:45 Uhr - 11:00 Uhr',
          '11:00 Uhr - 12:00 Uhr',
        ],
      },
      multipleChoice6: {
        name: 'question_6',
        question:
          'Ein*e Freund*in hat dich gebeten, ihn*sie zweimal wöchentlich ins Fitnessstudio zu begleiten. Die beste Zeit für ihn*sie ist zwischen 22:00 Uhr und 23:00 Uhr. Wenn du nun bedenkst, wie du dich normalerweise zu dieser Zeit fühlst, was denkst du, wie deine Leistung wäre?',
        rightChoice: -1,
        choices: ['Sehr gut', 'Ziemlich gut', 'Ziemlich schlecht', 'Sehr schlecht'],
      },
      multipleChoice7: {
        name: 'question_7',
        question:
          'Du hast von so genannten “Morgentypen” und “Abendtypen” gehört. Welcher dieser Typen glaubst du selbst zu sein?',
        rightChoice: -1,
        choices: [
          'Definitiv ein Morgentyp',
          'Mehr ein Morgen- als ein Abendtyp',
          'Mehr ein Abend- als ein Morgentyp',
          'Definitiv ein Abendtyp',
        ],
      },
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    multipleOptions(name, value) {
      if (name === this.multipleChoice1.name) {
        this.answers.multipleChoice1.selected = value
        this.answers.multipleChoice1.points = this.calculatePoints(name, value)
      }
      if (name === this.multipleChoice2.name) {
        this.answers.multipleChoice2.selected = value
        this.answers.multipleChoice2.points = this.calculatePoints(name, value)
      }
      if (name === this.multipleChoice3.name) {
        this.answers.multipleChoice3.selected = value
        this.answers.multipleChoice3.points = this.calculatePoints(name, value)
      }
      if (name === this.multipleChoice4.name) {
        this.answers.multipleChoice4.selected = value
        this.answers.multipleChoice4.points = this.calculatePoints(name, value)
      }
      if (name === this.multipleChoice5.name) {
        this.answers.multipleChoice5.selected = value
        this.answers.multipleChoice5.points = this.calculatePoints(name, value)
      }
      if (name === this.multipleChoice6.name) {
        this.answers.multipleChoice6.selected = value
        this.answers.multipleChoice6.points = this.calculatePoints(name, value)
      }
      if (name === this.multipleChoice7.name) {
        this.answers.multipleChoice7.selected = value
        this.answers.multipleChoice7.points = this.calculatePoints(name, value)
      }
    },
    calculatePoints(question, option) {
      let point = 0
      if (question === this.multipleChoice1.name || question === this.multipleChoice5.name) {
        if (option === 0) point = 5
        if (option === 1) point = 4
        if (option === 2) point = 3
        if (option === 3) point = 2
        if (option === 4) point = 1
      }
      if (
        question === this.multipleChoice2.name
        || question === this.multipleChoice3.name
        || question === this.multipleChoice4.name
      ) {
        if (option === 0) point = 4
        if (option === 1) point = 3
        if (option === 2) point = 2
        if (option === 3) point = 1
      }
      if (question === this.multipleChoice6.name) {
        if (option === 0) point = 1
        if (option === 1) point = 2
        if (option === 2) point = 3
        if (option === 3) point = 4
      }
      if (question === this.multipleChoice7.name) {
        if (option === 0) point = 6
        if (option === 1) point = 4
        if (option === 2) point = 2
        if (option === 3) point = 0
      }
      return point
    },
    getTotalPoints() {
      let points = 0
      Object.values(this.answers).forEach(item => {
        if (item.points) {
          points += parseInt(item.points, 10)
        } else {
          points += 0
        }
      })
      this.totalPoints = points
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleResults() {
      this.next = true
    },
    handleCompleted() {
      this.completed = true
      this.getTotalPoints()
      this.updateTime()
      // this.answers = { totalPoints: this.totalPoints, ...this.answers }
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level2_2',
        data: this.answers,
      })
      this.handleResults()
    },
    handleNext() {
      this.$router.push('/level/2/alpen-method-quiz/intro')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';
</style>
