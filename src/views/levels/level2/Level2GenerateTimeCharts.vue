<template>
  <div class="stretched level2-palace-garden">
    <img
      src="/images/level2/gardener.png"
      alt="Gardener"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 16rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Zeitmanagement
      </h1>

      <div v-if="theoreticalContent">
        <h3 class="h1">
          Definition: Zeitmanagement
        </h3>
        <p class="p">
          Seiwert (2013) definiert Zeitmanagement als „die konsequente und zielorientierte Anwendung
          bewährter Arbeitstechniken in der alltäglichen Praxis,
          um sich selbst und die eigenen Lebensbereiche so zu führen und zu organisieren (=
          managen),
          dass die zur Verfügung stehende Zeit sinnvoll und optimal genutzt wird“ (S. 12).
          Hier wird eine enge Vernetzung von Selbst- und Zeitmanagement deutlich.
        </p>
        <h3 class="h1">
          Relevanz
        </h3>
        <p class="p">
          Zeitmanagementstrategien sind wichtig, da sie bei der Planung und Organisation des Alltags
          helfen und verschiedene Vorteile mit sich bringen: Durch einen kleinen Mehraufwand an
          Zeit, der in die Planung des Tages- bzw.
          Wochenablaufs investiert wird, steht mehr Zeit für andere Dinge zur Verfügung.
          Oft wird ein Großteil der Zeit aufgrund fehlender Planung ineffektiv genutzt und geht
          somit verloren.
        </p>
        <p class="p">
          Darüber hinaus erhält man durch die Planung der zur Verfügung stehenden Zeit einen
          Überblick über Aufgaben und Projekte, der als Entscheidungsgrundlage bzw. Leitfaden für
          zukünftige Handlungen dienen kann.
          Durch die damit einhergehende Vorhersehbarkeit des Tagesablaufs können Hektik, Stress und
          unnötiger Zeitdruck reduziert und Pufferzeiten angemessen eingeplant werden.
        </p>

        <h3 class="h1">
          Theoretische Modelle
        </h3>
        <p class="p">
          Es gibt insgesamt vier theoretische Ansätze, die jeweils einen anderen Zugang zum Thema
          Zeitmanagement darstellen:
        </p>
        <h3 class="p">
          <u>1. Zeitmanagement als übergeordnetes Konstrukt mit unterschiedlichen Ebenen</u>
        </h3>
        <ul class="p">
          <li>
            Auswahl von Zielen bzw. Subzielen und das Setzen von Prioritäten (Makroebene)
          </li>
          <li>
            Generieren und Priorisieren von Aufgaben bzw. Subaufgaben auf Grundlage der Ziele
            (Zwischenebene)
          </li>
          <li>
            Entwickeln einer Aufgabenliste, Planen und Ausführen (Mikroebene)
          </li>
        </ul>
        <h3 class="p">
          <u>2. Zeitmanagement als Lernstrategie</u>
        </h3>
        <ul class="p">
          <li>
            Allgemein (siehe z. B. Garcia & Pintrich, 1994) werden drei Kategorien an Lernstrategien
            unterschieden: kognitive Lernstrategien, metakognitive Lernstrategien,
            Ressourcenmanagement
          </li>
          <li>
            Zeitmanagement beinhaltet Ressourcenmanagement und kann den metakognitiven Strategien
            (Planung ist beispielsweise ist eine metakognitive Strategie) zugeordnet werden.
          </li>
        </ul>
        <h3 class="p">
          <u>3. Zeitmanagement als Prozess einer Handlung – der Faktor ‚Zeit’ steht dabei im
            Fokus</u>
        </h3>
        <ul class="p">
          <li>
            Es kann zwischen der quantitativen und qualitativen Zeitnutzung unterschieden werden.
            Die beiden Dimensionen erklären, wie lange sich eine Person insgesamt mit einer Aufgabe
          </li>
        </ul>
        <h3 class="h1">
          Ausgewählte Forschungsergebnisse
        </h3>
        <p class="p">
          Es wurde untersucht, wie sich Zeitmanagement auf unterschiedliche Faktoren auswirkt. Zu
          beachten ist jedoch bei der Interpretation der Ergebnisse, dass die Wirkrichtung nicht
          eindeutig bestimmt werden kann. Es ist also auch denkbar, dass Stress den Umgang mit
          Zeitmanagement beeinflusst usw. Hier die Ergebnisse:
        </p>
        <ul class="p">
          <li>
            Negativer Zusammenhang des Zeitmanagements mit Stress (Grissom, Loeb & Mitani, 2015)
          </li>
          <li>
            Positiver Zusammenhang mit Berufs- und Lebenszufriedenheit
          </li>
          <li>
            Negativer Zusammenhang mit Ängstlichkeit und Depression (Ghiasvand et. al., 2017)
          </li>
          <li>
            Positiver Zusammenhang mit Leistung (Jo,Kim & Yoon, 2015)
          </li>
        </ul>
        <h3 class="h1">
          Zeitmanagement-Training
        </h3>
        <p class="p">
          In einem Zeitmanagement-Training (Häfner et al., 2015) wurden bei Studierenden die
          Strategien Zielsetzung, Priorisierung, Strategieentwicklung, sowie Tagesplanung und
          Kontrolle trainiert.
          Das Training wurde in Form eines vierstündigen Workshops realisiert. Es zeigte sich eine
          signifikante Reduzierung von wahrgenommenem Stress zwei Wochen nach dem Training, welche
          auch nach vier Wochen anhielt.
          Es konnte gezeigt werden, dass die trainierten Studierenden am Ende des Trainings mehr
          Zeitmanagement-Strategien anwendeten als vor der Intervention.
        </p>
        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <p class="p">
          In der folgenden Aufgabe kannst du gleich drei Kreisdiagramme erstellen. Jedes
          Kreisdiagramm stellt jeweils eine gesamte Woche mit sieben Tagen (und 168 Stunden) dar.
          Für jedes Diagramm sollst du den prozentualen Anteil eintragen, den bestimmte Tätigkeiten
          in deinem Leben einnehmen.
        </p>
        <p class="p">
          Das erste Kreisdiagramm ermittelt, wie viel Zeit du real mit einzelnen Tätigkeiten
          verbringst. Im zweiten Diagramm geht es um deine mentale Zeiteinteilung, während das
          letzte Diagramm deine gewünschte/ideale Zeiteinteilung widerspiegelt.
        </p>
        <p class="p">
          Am Ende vergleichst du bitte die drei Kreisdiagramme miteinander und überprüfst, inwiefern
          sie sich entsprechen bzw. an welchen Stellen es Abweichungen gibt. Ziehe für dich selbst
          ein Fazit!
        </p>

        <h1 class="h1">
          Reale Zeiteinteilung:
        </h1>
        <p class="p">
          Wie viel Prozent deiner Zeit pro Woche (7 Tage) nutzt du für welche Aktivitäten? Trage
          dies in den folgenden Kreis ein:
          Präsenzzeit, Selbststudium, Hobbys, Haushalt, Hygiene, Schlaf, Essen, Freizeit, …
        </p>
        <div class="chartOptions">
          <div
            v-for="(item, index) in question1"
            :key="`question_1_${index}`"
          >
            <form-input
              :id="item.id"
              ref="inputQuestion1"
              :label="item.label"
              input-type="number"
              @input="handleInput"
            />
          </div>
        </div>
        <base-button
          variant="primary"
          text="Diagramm erstellen"
          @click="handleChart1"
        />
        <div v-if="isChart1">
          <DoughnutChart
            :chart-data="chartData1"
          />
        </div>

        <h1 class="h1">
          Mentale Zeiteinteilung:
        </h1>
        <p class="p">
          Wie viel Prozent deiner Zeit pro Woche bist du <b>gedanklich</b> mit den einzelnen
          Aktivitäten beschäftigt? Dies kann erheblich von der Zeit, die du von außen betrachtet
          mit einer Tätigkeit verbringst, abweichen, z.B. wenn du auch abends häufig an
          studienbezogene Aufgaben denkst.
        </p>
        <div class="chartOptions">
          <div
            v-for="(item, index) in question2"
            :key="`question_2_${index}`"
          >
            <form-input
              :id="item.id"
              ref="inputQuestion2"
              :label="item.label"
              input-type="number"
              @input="handleInput"
            />
          </div>
        </div>
        <base-button
          variant="primary"
          text="Diagramm erstellen"
          @click="handleChart2"
        />
        <div v-if="isChart2">
          <DoughnutChart
            :chart-data="chartData2"
          />
        </div>

        <h1 class="h1">
          Gewünschte Zeiteinteilung:
        </h1>
        <p class="p">
          Erstelle deinen Wunschkreis. Folgende Fragen können dir dabei behilflich sein:<br>
          - Analysiere deine momentane Zeiteinteilung.<br>
          - Ist das die Einteilung, die du wünschst?<br>
          - Fehlen im realen und mentalen Kreis Bereiche, die für dich wichtig sind?<br>
          - Wie sieht deine ideale Einteilung aus, damit alle Bereiche angemessen
          berücksichtigt sind?
        </p>
        <div class="chartOptions">
          <div
            v-for="(item, index) in question3"
            :key="`question_3_${index}`"
          >
            <form-input
              :id="item.id"
              ref="inputQuestion3"
              :label="item.label"
              input-type="number"
              @input="handleInput"
            />
          </div>
        </div>
        <base-button
          variant="primary"
          text="Diagramm erstellen"
          @click="handleChart3"
        />
        <div v-if="isChart3">
          <DoughnutChart
            :chart-data="chartData3"
          />
        </div>

        <div style="margin-top: 1rem;">
          <base-button
            v-if="completed"
            variant="primary"
            text="Nächstes Level"
            @click="handleNext"
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
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import FormInput from '@/components/ui/FormInput.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import colorsMixin from '@/mixins/colorsMixin'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level2GenerateTimeCharts',
  components: {
    BaseButton,
    FormInput,
    DoughnutChart,
  },
  mixins: [colorsMixin, timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      sum1: 0,
      sum2: 0,
      sum3: 0,
      max: 100,
      isChart1: false,
      isChart2: false,
      isChart3: false,
      answers: {
        question1: {
          option_1: null,
          option_2: null,
          option_3: null,
          option_4: null,
          option_5: null,
          option_6: null,
          option_7: null,
        },
        question2: {
          option_1: null,
          option_2: null,
          option_3: null,
          option_4: null,
          option_5: null,
          option_6: null,
          option_7: null,
        },
        question3: {
          option_1: null,
          option_2: null,
          option_3: null,
          option_4: null,
          option_5: null,
          option_6: null,
          option_7: null,
        },
      },
      question1: [
        {
          id: 'question_1_option_1',
          label: 'Selbststudium',
        },
        {
          id: 'question_1_option_2',
          label: 'Hobbys',
        },
        {
          id: 'question_1_option_3',
          label: 'Haushalt',
        },
        {
          id: 'question_1_option_4',
          label: 'Hygiene',
        },
        {
          id: 'question_1_option_5',
          label: 'Schlaf',
        },
        {
          id: 'question_1_option_6',
          label: 'Essen',
        },
        {
          id: 'question_1_option_7',
          label: 'Freizeit',
        },
      ],
      question2: [
        {
          id: 'question_2_option_1',
          label: 'Selbststudium',
        },
        {
          id: 'question_2_option_2',
          label: 'Hobbys',
        },
        {
          id: 'question_2_option_3',
          label: 'Haushalt',
        },
        {
          id: 'question_2_option_4',
          label: 'Hygiene',
        },
        {
          id: 'question_2_option_5',
          label: 'Schlaf',
        },
        {
          id: 'question_2_option_6',
          label: 'Essen',
        },
        {
          id: 'question_2_option_7',
          label: 'Freizeit',
        },
      ],
      question3: [
        {
          id: 'question_3_option_1',
          label: 'Selbststudium',
        },
        {
          id: 'question_3_option_2',
          label: 'Hobbys',
        },
        {
          id: 'question_3_option_3',
          label: 'Haushalt',
        },
        {
          id: 'question_3_option_4',
          label: 'Hygiene',
        },
        {
          id: 'question_3_option_5',
          label: 'Schlaf',
        },
        {
          id: 'question_3_option_6',
          label: 'Essen',
        },
        {
          id: 'question_3_option_7',
          label: 'Freizeit',
        },
      ],
    }
  },
  computed: {
    chartData1() {
      const chart = {}
      const answer1 = this.answers.question1.option_1
      const answer2 = this.answers.question1.option_2
      const answer3 = this.answers.question1.option_3
      const answer4 = this.answers.question1.option_4
      const answer5 = this.answers.question1.option_5
      const answer6 = this.answers.question1.option_6
      const answer7 = this.answers.question1.option_7

      // Chart datasets
      chart.labels = [this.question1[0].label, this.question1[1].label, this.question1[2].label, this.question1[3].label, this.question1[4].label, this.question1[5].label, this.question1[6].label]
      chart.datasets = []
      chart.datasets.push({
        backgroundColor: this.randomColor(chart.labels.length),
        data: [answer1, answer2, answer3, answer4, answer5, answer6, answer7],
      })

      return chart
    },
    chartData2() {
      const chart = {}
      const answer1 = this.answers.question2.option_1
      const answer2 = this.answers.question2.option_2
      const answer3 = this.answers.question2.option_3
      const answer4 = this.answers.question2.option_4
      const answer5 = this.answers.question2.option_5
      const answer6 = this.answers.question2.option_6
      const answer7 = this.answers.question2.option_7

      // Chart datasets
      chart.labels = [this.question2[0].label, this.question2[1].label, this.question2[2].label, this.question2[3].label, this.question2[4].label, this.question2[5].label, this.question2[6].label]
      chart.datasets = []
      chart.datasets.push({
        backgroundColor: this.randomColor(chart.labels.length),
        data: [answer1, answer2, answer3, answer4, answer5, answer6, answer7],
      })
      return chart
    },
    chartData3() {
      const chart = {}
      const answer1 = this.answers.question3.option_1
      const answer2 = this.answers.question3.option_2
      const answer3 = this.answers.question3.option_3
      const answer4 = this.answers.question3.option_4
      const answer5 = this.answers.question3.option_5
      const answer6 = this.answers.question3.option_6
      const answer7 = this.answers.question3.option_7

      // Chart datasets
      chart.labels = [this.question3[0].label, this.question3[1].label, this.question3[2].label, this.question3[3].label, this.question3[4].label, this.question3[5].label, this.question3[6].label]
      chart.datasets = []
      chart.datasets.push({
        backgroundColor: this.randomColor(chart.labels.length),
        data: [answer1, answer2, answer3, answer4, answer5, answer6, answer7],
      })
      return chart
    },
  },
  watch: {
    answers: {
      handler(obj) {
        this.sum1 = 0
        this.sum2 = 0
        this.sum3 = 0

        // question 1
        Object.values(obj.question1)
          .forEach(option => {
            this.sum1 += Number(option)
          })

        if (this.sum1 > this.max) {
          // eslint-disable-next-line no-alert
          alert('Deine Antwort kann nicht mehr als 100% überschreiten.')
          this.changeAnswersAndDomState(this.$refs.inputQuestion1, this.answers.question1)
        }

        // question 2
        Object.values(obj.question2)
          .forEach(option => {
            this.sum2 += Number(option)
          })

        if (this.sum2 > this.max) {
          // eslint-disable-next-line no-alert
          alert('La somme des activités de temps par semaine ne doit pas dépasser 100.')
          this.changeAnswersAndDomState(this.$refs.inputQuestion2, this.answers.question2)
        }

        // question 3
        Object.values(obj.question3)
          .forEach(option => {
            this.sum3 += Number(option)
          })

        if (this.sum3 > this.max) {
          // eslint-disable-next-line no-alert
          alert('La somme des activités de temps par semaine ne doit pas dépasser 100.')
          this.changeAnswersAndDomState(this.$refs.inputQuestion3, this.answers.question3)
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    changeAnswersAndDomState(ref, obj) {
      // change the dom to zero
      ref.forEach(item => {
        item.value = 0
      })

      // changing the this.answers state to zero
      Object.keys(obj)
        .forEach(key => {
          obj[key] = 0
        })
    },
    handleInput(val, id) {
      // question 1
      if (id === this.question1[0].id) {
        this.answers.question1.option_1 = val
      }
      if (id === this.question1[1].id) {
        this.answers.question1.option_2 = val
      }
      if (id === this.question1[2].id) {
        this.answers.question1.option_3 = val
      }
      if (id === this.question1[3].id) {
        this.answers.question1.option_4 = val
      }
      if (id === this.question1[4].id) {
        this.answers.question1.option_5 = val
      }
      if (id === this.question1[5].id) {
        this.answers.question1.option_6 = val
      }
      if (id === this.question1[6].id) {
        this.answers.question1.option_7 = val
      }

      // question 2
      if (id === this.question2[0].id) {
        this.answers.question2.option_1 = val
      }
      if (id === this.question2[1].id) {
        this.answers.question2.option_2 = val
      }
      if (id === this.question2[2].id) {
        this.answers.question2.option_3 = val
      }
      if (id === this.question2[3].id) {
        this.answers.question2.option_4 = val
      }
      if (id === this.question2[4].id) {
        this.answers.question2.option_5 = val
      }
      if (id === this.question2[5].id) {
        this.answers.question2.option_6 = val
      }
      if (id === this.question2[6].id) {
        this.answers.question2.option_7 = val
      }

      // question 3
      if (id === this.question3[0].id) {
        this.answers.question3.option_1 = val
      }
      if (id === this.question3[1].id) {
        this.answers.question3.option_2 = val
      }
      if (id === this.question3[2].id) {
        this.answers.question3.option_3 = val
      }
      if (id === this.question3[3].id) {
        this.answers.question3.option_4 = val
      }
      if (id === this.question3[4].id) {
        this.answers.question3.option_5 = val
      }
      if (id === this.question3[5].id) {
        this.answers.question3.option_6 = val
      }
      if (id === this.question3[6].id) {
        this.answers.question3.option_7 = val
      }
    },
    handleChart1() {
      this.isChart1 = !this.isChart1
    },
    handleChart2() {
      this.isChart2 = !this.isChart2
    },
    handleChart3() {
      this.isChart3 = !this.isChart3
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level2_1',
        data: this.answers,
      })
    },
    handleNext() {
      this.$router.push('/level/2/generate-time-charts/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

.chartOptions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 1rem;
  text-align: left;
  grid-auto-rows: minmax(100px, auto);
}
</style>
