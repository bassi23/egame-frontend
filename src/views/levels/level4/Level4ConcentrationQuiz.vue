<template>
  <div class="stretched level4-cave-of-stress">
    <img
      src="/images/level4/cera.png"
      alt="Cera"
      class="character character_position_top character_animation_top"
      style="width: 10rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Konzentrationsquiz
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Konzentration ist die Fähigkeit, Handlungen absichtsvoll zu steuern und ihre Ausführung zu kontrollieren. Im Alltag ist ein Mensch dann konzentriert, wenn er absichtsvoll das – und nur das – tut, was er sich zu tun vorgenommen hat.
        </p>
        <h3 class="h1">
          Konzentrationssteigernde Maßnahmen
        </h3>
        <p class="p">
          Es gibt verschiedene Quellen der Konzentrationsbeeinträchtigung. Zum einen gibt es interne Ablenker (z.B störende Gedanken) und zum anderen existieren viele externe Ablenker (aus unserer Umwelt, z.B. Straßenlärm, Musik). Für beide Quellen bestehen unterschiedliche Strategien, um der Ablenkung entgegenzuwirken und die Konzentration wieder zu steigern.
        </p>
        <h3 class="h1">
          Gestaltung des Arbeitsplatzes
        </h3>
        <p class="p">
          Bereits die Gestaltung unseres Arbeitsplatzes kann unsere Konzentration beeinflussen. So sorgst du für einen konzentrationsfördernden Arbeitsplatz:
        </p>
        <ol class="p">
          <li>
            Fest eingerichteter und aufgeräumter Arbeitsplatz
          </li>
          <li>
            Gleichmäßiges Licht, am besten Tageslicht
          </li>
          <li>
            Ausreichend großer Tisch und ergonomische Sitzgelegenheit
          </li>
          <li>
            Nicht benötigte Utensilien wegräumen
          </li>
          <li>
            In Reichweite: Dinge, die häufiger gebraucht werden (PC, Wörterbuch)
          </li>
        </ol>
        <h3 class="h1">
          Tipps bei äußeren Ablenkern
        </h3>
        <ol class="p">
          <li>
            Lärmquellen und visuelle Ablenkungen ausschalten
          </li>
          <li>
            Besuche/Anrufe kanalisieren und Termine vereinbaren
          </li>
          <li>
            Türe schließen: Oftmals ist es üblich, die Türen offen zu halten. Offene Türen verführen jedoch dazu „kurz mal rein zu schauen“.
          </li>
          <li>
            E-Mails/Nachrichten nur zu bestimmten Zeiten abrufen.
          </li>
          <li>
            Tages- und Wochenzeiten nutzen: Zusätzlich kann es hilfreich sein, die Tages- und Wochenzeiten für konzentrierte Aufgaben zu nutzen, an denen generell weniger Störungen vorkommen.
          </li>
        </ol>
        <h3 class="h1">
          Tipps bei inneren Ablenkern
        </h3>
        <ol class="p">
          <li>
            Grundbedürfnisse befriedigen (Hunger stillen, ausgeschlafen sein)
          </li>
          <li>
            Nicht direkt im Anschluss an üppige Mahlzeit lernen (besser Obst, Nüsse…)
          </li>
          <li>
            Bewusste und regelmäßige Pausen (max. 10 Minuten, Fenster öffnen)
          </li>
          <li>
            Zeitdruck verringern à unwichtige Termine verschieben
          </li>
          <li>
            Große Aufgaben portionieren à Übersicht gewinnen
          </li>
          <li>
            Abwechslung (Fachgebiete, Aufgabenarten abwechseln)
          </li>
        </ol>

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
  name: 'Level4ConcentrationQuiz',
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
      },
      multipleChoice1: {
        name: 'question_1',
        question: 'Konzentration ist…',
        rightChoice: 2,
        choices: [
          'gleichzusetzen mit Aufmerksamkeit.',
          'die Fähigkeit, Denken absichtsvoll zu steuern.',
          'ein Zustand, der durch Umgebungsbedingungen beeinflusst wird.',
          'kein Persönlichkeitsmerkmal.',
        ],
      },
      multipleChoice2: {
        name: 'question_2',
        question: 'Bei der konzentrationssteigernden Gestaltung des Arbeitsplatzes sollte man darauf achten, dass…',
        rightChoice: 1,
        choices: [
          'auch Dinge, die man seltener braucht, in Reichweite sind.',
          'man eine ergonomische und bequeme Sitzgelegenheit hat.',
          'man regelmäßig den Arbeitsplatz wechselt, um für Bewegung zu sorgen.',
          'bei Linkshändern die Beleuchtung von links kommt.',
        ],
      },
      multipleChoice3: {
        name: 'question_3',
        question: 'Was hilft nicht beim Umgang mit externen Ablenkungen?',
        rightChoice: 1,
        choices: [
          'Termine vereinbaren',
          'Grundbedürfnisse befriedigen',
          'Mit Hilfe der Tages- und Wochenstörkurve Zeiten für gutes konzentriertes Arbeiten zu finden',
          'Fenster und Türen schließen',
        ],
      },
      multipleChoice4: {
        name: 'question_4',
        question: 'Was hilft beim Umgang mit inneren Ablenkern?',
        rightChoice: 3,
        choices: [
          'Üppige Mahlzeiten',
          'Lange Pausen',
          'Zeitdruck',
          'Portionierung großer Aufgaben',
        ],
      },
      multipleChoice5: {
        name: 'question_5',
        question: 'Was ist kein Tipp zum bewussten Handeln zur Konzentrationssteigerung?',
        rightChoice: 0,
        choices: [
          'Eine Lernhandlung mit etwas Anspruchsvollen beginnen',
          'In Vorlesungen oder Seminaren mitschreiben',
          'Memory spielen',
          'Arbeits- und Erholungsphasen klar trennen',
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
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level4_4',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/4/concentration-quiz/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
