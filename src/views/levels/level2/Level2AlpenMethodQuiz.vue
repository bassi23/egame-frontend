<template>
  <div class="stretched level2-former-treasury">
    <img
      src="/images/level2/treasurer.png"
      alt="fish"
      class="character character_position_top character_animation_top"
      style="width: auto; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        ALPEN Methode
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Die ALPEN-Methode stellt eine wichtige Zeitmanagement-Strategie dar, die bei der Aufgaben-
          und Zeitplanung hilft und deren Schritte aufgrund ihres Namens gut zu merken sind.
        </p>
        <h3 class="h1">
          A. Aufgaben, Aktivitäten und Termine aufschreiben:
        </h3>
        <p class="p">
          In einem ersten Schritt sollen alle notwendigen Aufgaben, Unerledigtes vom Vortag, neu
          hinzukommende Tagesarbeiten und anstehende Termine gesammelt und schriftlich festgehalten
          werden.
        </p>

        <h3 class="h1">
          L. Länge/Dauer der Aktivitäten schätzen
        </h3>
        <p class="p">
          Im zweiten Schritt soll grob geschätzt werden, wie lange die Bearbeitung der einzelnen
          Aufgaben bzw. die Termine dauern werden. Dabei sollte man immer im Hinterkopf behalten,
          dass man meistens so lange braucht, wie man Zeit hat. In diesem Schritt kann man auch über
          sogenannte <b>„Zeitdiebe“</b> nachdenken. Dies sind Tätigkeiten, die viel Zeit kosten,
          aber nicht wirklich die Zielerreichung unterstützen.
        </p>

        <p class="p">
          Bei der Einschätzung der Bearbeitungslänge einer Aufgabe sollte immer die persönliche
          Leistungskurve im Hinterkopf behalten werden. Da die Leistungsfähigkeit sehr variabel ist
          und sich über den Tag hinweg mehrfach ändert, hilft die Leistungskurve bei der Verteilung
          von Routineaufgaben und anspruchsvollen Aufgaben. Routineaufgaben, die nicht sehr
          anspruchsvoll sind, dafür aber oft Fleißarbeit erfordern, sollten für weniger
          leistungsstarke Phasen eingeplant werden. Anspruchsvolle Aufgaben hingegen, die große
          kognitive Anstrengung und hohe Konzentration erfordern, sollten in Phasen gelegt werden,
          in denen sich die Leistungsfähigkeit auf einem Hoch befindet.<br>
          Als Faustregel zur Zeitschätzung kann dabei folgende Formel genutzt werden:
          <i>( Optimistische Bearbeitungsdauer + pessimistische Bearbeitungsdauer ) / 2</i>
        </p>

        <h3 class="h1">
          P. Pufferzeiten einplanen
        </h3>
        <p class="p">
          Zur Einplanung ausreichender Pufferzeiten kann man sich an die <b>60%-Regel</b> halten. Es
          gilt, nur 60% der gesamten zur Verfügung stehenden Zeit zu verplanen, so dass Zeit für
          Unvorhergesehenes bleibt. Eine Grundregel der Einteilung lautet:
        </p>
        <ul class="p">
          <li>
            60% für geplante Aufgaben und Aktivitäten (festgehalten im Tagesplan)
          </li>
          <li>
            20% für unerwartete Aktivitäten (Störungen, Zeitdiebe)
          </li>
          <li>
            20% für spontane und soziale Aktivitäten (kreative Zeiten)
          </li>
        </ul>
        <img
          class="image"
          src="/images/level2/figure1.png"
          alt="Figure"
          width="800"
        >

        <h3 class="h1">
          E. Entscheidungen treffen
        </h3>
        <p class="p">
          Es ist wichtig, Prioritäten zu setzen und eventuelle Kürzungen vorzunehmen, wenn man
          merkt, dass der Zeitplan voll ist. Bei der Entscheidung, welche Aufgaben höchste Priorität
          haben und daher als erstes erledigt werden sollen, kann die sogenannte ABC-Analyse helfen.
          A-Aufgaben sind dabei die wichtigsten Aufgaben, für ihre Bearbeitung wird aber meistens
          die wenigste Zeit aufgewendet. C-Aufgaben hingegen sind eher unwichtig (Routine-Aufgaben,
          Kleinkram), nehmen aber die meiste Zeit in Anspruch bzw. verführen dazu, sich lange an
          ihnen aufzuhalten.
        </p>
        <p class="p">
          Eine Methode zum Umgang mit den als A, B oder C eingestuften Aufgaben ist die sogenannte
          Eisenhower-Matrix. A-Aufgaben sollten also als erstes angegangen werden und aufgrund ihrer
          Wichtigkeit am besten in einer Phase mit voller Leistungsfähigkeit. Für B-Aufgaben sollte
          ein bestimmter Zeitpunkt festgesetzt werden, wann die Aufgabe erledigt wird. C-Aufgaben
          können zwischendurch erledigt werden, um den Kopf wieder frei zu bekommen. Dabei sollten
          diese möglichst in Phasen geringer Leistungsfähigkeit fallen.
        </p>
        <img
          class="image"
          src="/images/level2/figure2.png"
          alt="Figure"
          width="800"
        >

        <h3 class="h1">
          N. Nachkontrolle, unerledigtes eintragen
        </h3>
        <p class="p">
          Am Tagesende sollte regelmäßig kontrolliert werden, was an diesem Tag erledigt wurde, ob
          man realistisch geplant hat und ob die Pufferzeit ausgereicht hat. Werden Fehler in der
          Planung entdeckt, kann man aus diesen lernen und sie das nächste Mal vermeiden. Noch nicht
          erledigte Aufgaben können auf Folgetage verschoben oder gestrichen werden.
        </p>
        <!-- TODO: Faustregel, Zeitschätzung einfügen -->
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
  name: 'Level2AlpenMethodQuiz',
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
        question: 'Die ALPEN-Methode ist eine Strategie für',
        rightChoice: 2,
        choices: [
          'Allgemeine Selbstwirksamkeit',
          'Berufliche Selbstwirksamkeit',
          'Zeitmanagement',
          'Höhere Arbeitszufriedenheit',
        ],
      },
      multipleChoice2: {
        name: 'question_2',
        question: 'Welche der folgenden Antworten ist falsch? Bei Punkt „L“ der Alpenmethode',
        rightChoice: 3,
        choices: [
          'Sollte man das SMART-Prinzip im Hinterkopf behalten',
          'Sollte man beachten, ob mehrere Personen an der Aufgabe beteiligt sind',
          'Sollte  man  das  Pareto-Prinzip  nutzen,  dass  man  mit  20%  des  Aufwands  80%  der Leistung erreicht.',
          'Sollte ein Mittagstief eingeplant werden',
        ],
      },
      multipleChoice3: {
        name: 'question_3',
        question: 'Die Faustregel zur Zeitschätzung beinhaltet nicht.',
        rightChoice: 0,
        choices: [
          'Multiplikation mit 2',
          'Optimistische Bearbeitungsdauer',
          'Division durch 2',
          'Pessimistische Bearbeitungsdauer',
        ],
      },
      multipleChoice4: {
        name: 'question_4',
        question: 'Welche der folgenden Aussagen über die Eisenhower-Matrix ist falsch?',
        rightChoice: 2,
        choices: [
          'Die Eisenhower-Matrix ist eine Methode zum Umgang mit der ABC-Analyse',
          'Sie kategorisiert Aufgaben entsprechend ihrer Wichtigkeit und Dringlichkeit',
          'B-Aufgaben sind dringend, aber wenig wichtig.',
          'Aufgaben können gestrichen werden, wenn sie weder wichtig noch dringend sind',
        ],
      },
      multipleChoice5: {
        name: 'question_5',
        question: 'Welche Aussage zum Aufgabenmanagement ist falsch?',
        rightChoice: 1,
        choices: [
          'Man sollte Aufgaben thematisch zu mischen, um für Abwechslung zu sorgen.',
          'Zu kurze Pausen können zu Demotivation und Trägheit führen.',
          'Gleichbleibende Lernzeiten sollten täglich mit neuen Inhalten gefüllt werden.',
          'Zeiten zwischen Vorlesungen oder in Bus&Bahn können genutzt werden.',
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
        level: 'level2_3',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/2/alpen-method-quiz/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
