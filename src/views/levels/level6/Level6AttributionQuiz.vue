<template>
  <div class="stretched level6-coral-tower">
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_top character_animation_top"
      style="width: 12rem; height: 12rem"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Attributionsquiz
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Kausalattributionen spielen nicht nur im Hinblick auf die eigene Leistung eine entscheidende Rolle, sondern auch bei der Wahrnehmung der Leistungen anderer Personen. Für den schulischen Kontext sind diese Befunde von großer Bedeutung, denn es besteht ein Unterschied zwischen der Auffassung, dass eine gute Note dem Zufall zuzuschreiben ist, und der Auffassung, dass diese auf die Begabung der Schülerin oder des Schülers in einem bestimmten Fachbereich zurückzuführen ist.
        </p>
        <h3 class="h1">
          Der Pygmalioneffekt
        </h3>
        <p class="p">
          Neben dem Einfluss auf die unmittelbare Reaktion der Lehrkraft,
          beeinflussen Kausalattributionen auch die <b>Erwartungen der Lehrkraft</b>,
          welche wiederum das unterrichtsbezogene Handeln beeinflussen und sich in Form selbsterfüllender Prophezeiungen auf die Leistungen der Schülerinnen und Schüler auswirken.
          Dieses Phänomen wurde in den 70er Jahren als <b>Pygmalioneffekt</b> bekannt.
          Der Begriff geht auf die Geschichte des Bildhauers Pygmalion in der griechischen Mythologie zurück.
          Demnach schuf dieser eine weibliche Statue aus Elfenbein und verliebte sich in seine Schöpfung.
          Er wünschte sich so sehr, dass seine Statue lebendig ist,
          dass die Göttin Venus ihm diesen Wunsch gewährte und die Statue letztendlich zum Leben erweckte.
          So konnte Pygmalion mit seiner Galatea glücklich bis zum Ende seiner Tage leben.
        </p>
        <p class="p">
          Im Jahr 1966 untersuchten Rosenthal und Jacobson den Erwartungseffekt bei Lehrkräften in amerikanischen Grundschulen.
          Sie teilten den Lehrkräften mit, dass sie mit Hilfe des von ihnen verwendeten Tests (ein Intelligenztest) Kinder identifizieren können,
          welche im nächsten Jahr besondere Entwicklungs- und Leistungsschübe erfahren werden.
          Den Lehrkräften wurde nach der Testung eine Liste mit zufällig ausgewählten Kindern ausgehändigt.
          Es zeigte sich, dass diese Kinder ein Jahr später tatsächlich bessere Leistungen zeigten als ihre Mitschüler.
          Die Ursache dieser Entwicklung sehen Rosenthal und Jacobson in der unbewussten Andersbehandlung durch die Lehrkräfte aufgrund ihrer Erwartungshaltung.
          Sie vermuten, dass die Lehrkräfte geduldiger mit den ausgewählten Schülern umgegangen seien und deren Lernfortschritte besonders hervorgehoben haben.
          Spätere Videoanalysen offenbarten, dass die Lehrkräfte die ausgewählten Schüler*innen mehr anlächeln,
          mehr Augenkontakt hatten und ihre Kommentare mehr lobten (Chaiken et. al.,1974).
          Dieses meist unbewusste Verhalten beeinflusste die tatsächlichen Leistungen der Schülerinnen und Schüler.
          Dies gilt selbst dann, wenn die SchülerInnen von den Erwartungen nichts wissen und die Lehrpersonen glauben,
          sich neutral zu verhalten (Freimuth und Haritz, 2009).
        </p>

        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <!-- <div v-if="!next"> -->
        <div>
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

        <!-- <div
          v-else
          class=""
        >
          <DoughnutChart
            :chart-data="chartData"
          />
        </div> -->

        <base-button
          v-if="completed"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <!-- <base-button
          v-if="completed && next"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        /> -->
        <!-- <base-button
          v-else-if="completed && !next"
          variant="primary"
          text="Zeige Ergebnisse"
          @click="handleResults"
        /> -->
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
// import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import colorsMixin from '@/mixins/colorsMixin'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level6AttributionQuiz',
  components: {
    BaseButton,
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
        multipleChoice1: null,
        multipleChoice2: null,
        multipleChoice3: null,
        multipleChoice4: null,
        multipleChoice5: null,
        multipleChoice6: null,
        multipleChoice7: null,
      },
      multipleChoice1: {
        name: 'question_1',
        question: 'Was versteht man unter Kausalattribution?',
        rightChoice: 0,
        choices: [
          'Eine subjektive Ursachenzuschreibung',
          'Eine objektive Situationseinschätzung',
          'Eine subjektive Wahrnehmung von Emotionen bei anderen Personen',
          'Eine objektive Messung von Persönlichkeitseigenschaften',
        ],
      },
      multipleChoice2: {
        name: 'question_2',
        question: 'Welcher Attributionsstil ist bei Misserfolg besonders ungünstig?',
        rightChoice: 2,
        choices: [
          'External-stabil',
          'Internal-variabel',
          'Internal-stabil',
          'External-variabel',
        ],
      },
      multipleChoice3: {
        name: 'question_3',
        question: 'Was ist der Pygmalioneffekt?',
        rightChoice: 1,
        choices: [
          'Die Kompensation von schulischen Defiziten durch gezielte Förderstrategien der Lehrkraft',
          'Die Beeinflussung der Schülerleistung im Sinne einer selbsterfüllenden Prophezeihung aufgrund von Lehrkräfteerwartungen',
          'Das übertriebene Gestikulieren einer Lehrkraft zur Untermalung ihrer Aussagen (beruhend auf dem Schauspiel Pygmalion von George Bernard Shaw)',
          'Die Angewohnheit seine eigene Leistung immer abzuwerten',
        ],
      },
      multipleChoice4: {
        name: 'question_4',
        question: 'Welche Dimensionen der Kausalattribution können unterschieden werden?',
        rightChoice: 3,
        choices: [
          'Stabilität, Qualität, Lokation, Dauer',
          'Globalisierung, Kontrollierbarkeit, Quantität',
          'Dauer, Stabilität, Intensität, Globalisierung',
          'Lokation, Stabilität, Globalisierung, Kontrollierbarkeit',
        ],
      },
      multipleChoice5: {
        name: 'question_5',
        question: 'Ein ungünstiger Attributionsstil kann zu…. führen.',
        rightChoice: 0,
        choices: [
          'Depressiven Reaktionen',
          'Erhöhtem Egozentrismus',
          'Erlernter Hilflosigkeit',
          'Erhöhter Selbstwirksamkeit',
        ],
      },
      multipleChoice6: {
        name: 'question_6',
        question: 'Welcher Attributionsstil ist bei Erfolg ungünstig?',
        rightChoice: 0,
        choices: [
          'External-variabel',
          'External-stabil',
          'Internal-variabel',
          'Internal-stabil',
        ],
      },
      multipleChoice7: {
        name: 'question_7',
        question: 'Der Pygmalion-Effekt wurde von welchen Autoren empirisch überprüft?',
        rightChoice: 1,
        choices: [
          'Deci & Ryan',
          'Rosenthal & Jacobson',
          'Hasselhorn & Gold',
          'Heckhausen & Gollwitzer',
        ],
      },
    }
  },
  computed: {
    // chartData() {
    //   const chart = {}
    //   const chartObj = []

    //   // Multiple choice
    //   if (this.answers.multipleChoice1 === this.multipleChoice1.rightChoice) {
    //     chartObj.push(1)
    //   }
    //   if (this.answers.multipleChoice2 === this.multipleChoice2.rightChoice) {
    //     chartObj.push(1)
    //   }
    //   if (this.answers.multipleChoice3 === this.multipleChoice3.rightChoice) {
    //     chartObj.push(1)
    //   }
    //   if (this.answers.multipleChoice4 === this.multipleChoice4.rightChoice) {
    //     chartObj.push(1)
    //   }
    //   if (this.answers.multipleChoice5 === this.multipleChoice5.rightChoice) {
    //     chartObj.push(1)
    //   }
    //   if (this.answers.multipleChoice6 === this.multipleChoice6.rightChoice) {
    //     chartObj.push(1)
    //   }
    //   if (this.answers.multipleChoice7 === this.multipleChoice7.rightChoice) {
    //     chartObj.push(1)
    //   }

    //   // Chart datasets
    //   chart.labels = []
    //   chart.datasets = []

    //   for (let i = 0; i < Object.keys(this.answers).length; i++) {
    //     chart.labels.push(`Question ${i + 1}`)
    //   }

    //   chart.datasets.push({
    //     backgroundColor: this.randomColor(chart.labels.length),
    //     data: chartObj,
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
    multipleOptions(name, value) {
      if (name === this.multipleChoice1.name) {
        this.answers.multipleChoice1 = value
      }
      if (name === this.multipleChoice2.name) {
        this.answers.multipleChoice2 = value
      }
      if (name === this.multipleChoice3.name) {
        this.answers.multipleChoice3 = value
      }
      if (name === this.multipleChoice4.name) {
        this.answers.multipleChoice4 = value
      }
      if (name === this.multipleChoice5.name) {
        this.answers.multipleChoice5 = value
      }
      if (name === this.multipleChoice6.name) {
        this.answers.multipleChoice6 = value
      }
      if (name === this.multipleChoice7.name) {
        this.answers.multipleChoice7 = value
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
        level: 'level6_2',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/6/attribution-quiz/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
