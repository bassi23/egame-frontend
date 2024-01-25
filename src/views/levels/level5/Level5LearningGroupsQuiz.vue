<template>
  <div class="stretched level5-garden">
    <img
      src="/images/level5/little-turtle2.png"
      alt="Little Turtle 2"
      class="character character_position_top character_animation_top"
      style="width: 15rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Lerngruppenquiz
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Das Lernen in einer Gruppe ist oft anregender und motivierender, als das Lernen alleine. Da jedes Gruppenmitglied andere Vorkenntnisse, Ideen oder Ansichten hat, entsteht ein sog. Gruppenvorteil hinsichtlich Qualität und Kreativität von Problemlösungen; man selbst wird auf neue Gedanken gebracht. Sicher auch unerwartet sind Ergebnisse von Studien, welche besagen, dass eben nicht nur die Schwächeren in einer Gruppe profitieren, sondern diejenigen einen noch größeren Nutzen davon haben, die Hilfe eigentlich nicht nötig hätten und dadurch ihr Kompetenzgefühl steigern können. Es zeigt sich also, dass das Lernen in Gruppen und kooperatives Verhalten auch die eigene Leistungsfähigkeit wesentlich erhöhen kann.
        </p>
        <h3 class="h1">
          Wichtige Voraussetzungen
        </h3>
        <ul class="p">
          <li>
            Gemeinsame Ziele haben
          </li>
          <li>
            Bereitschaft zur Kooperation
          </li>
          <li>
            Klima der Akzeptanz und Vertrauen
          </li>
          <li>
            Optimale Gruppengröße: 3 bis 4 Personen, nicht mehr als 7 Personen
          </li>
          <li>
            Leistungsmäßig in etwa gleich zusammengesetzte Gruppe
          </li>
        </ul>
        <p class="p">
          Wichtig ist, dass die Aufgaben in der Gruppe von Sitzung zu Sitzung klar verteilt werden (wer macht was bis wann und wie?). Die Gruppe muss fähig sein, Störungen frühzeitig zu erkennen und zu beheben. Gruppen entfalten ihre eigene Dynamik, die sogar dazu führen kann, dass die Gruppe auseinanderbricht. Ebenfalls gefährlich wird es, wenn Kooperation in Konkurrenz umschlägt.
        </p>
        <h3 class="h1">
          Welche Schwierigkeiten können beim kooperativen Lernen auftreten?
        </h3>
        <ul class="p">
          <li>
            <b>Free-rider-Effect:</b> Die Arbeit wird denjenigen Gruppenmitgliedern überlassen, denen es wichtig ist, ein gutes Ergebnis zu erzielen.
          </li>
          <li>
            <b>Sucker-Effect:</b> Diejenigen, die die Hauptlast der Arbeit tragen, werden zunehmend verärgert und verlieren die Motivation für das Projekt.
          </li>
          <li>
            <b>Matthäus-Effekt</b> oder <b>Scheren-Effekt:</b> Gruppenmitglieder mit höherer Motivation und besseren Eingangsvoraussetzungen übernehmen oft die Hauptarbeit und lernen mehr als die Personen, die sich weniger beteiligen.
          </li>
          <li>
            <b>Ich-habe-meinen-Teil-erledigt-Phänomen:</b> Manche Gruppenmitglieder weigern sich, weitere Beiträge zu leisten, da sie der Meinung sind, ihren Teil bereits geleistet zu haben.
          </li>
        </ul>
        <h3 class="p">
          Phasen des Gruppenprozesses
        </h3>
        <ol class="p">
          <li>
            Ankommen, auftauen, sich orientieren
            <ul>
              <li>
                abwartendes Verhalten
              </li>
              <li>
                Nutzung von Stereotypen, um die neue Situation für sich einfacher zu gestalten
              </li>
              <li>
                Suchen seiner Rolle in der Gruppe
              </li>
            </ul>
          </li>
          <li>
            Gärung und Klärung
            <ul class="p">
              <li>
                Interessen und Erwartungen werden gezeigt
              </li>
              <li>
                Rollen- und Statusverteilungen, evtl. auch Aggressionen.
              </li>
              <li>
                Einsicht und Bereitschaft, Entscheidungsregeln zu finden,
              </li>
              <li>
                Gruppe beginnt, sich zu organisieren und als Gruppe zu verstehen
              </li>
            </ul>
          </li>
          <li>
            Arbeitslust und Produktivität
            <ul>
              <li>
                Aufgabenteilung findet statt
              </li>
              <li>
                Aufgabenstellungen werden konstruktiv aufgegriffen und bearbeitet
              </li>
              <li>
                Klima von gegenseitigem Geben und Nehmen
              </li>
              <li>
                Kommunikation funktioniert gut
              </li>
            </ul>
          </li>
          <li>
            Abschluss und Abschied
            <ul class="p">
              <li>
                Abschluss = die bisherigen Themen zu einem Ende zu führen
              </li>
              <li>
                Transfer =  was mit dem bisher Gelernten anfangen?
              </li>
              <li>
                Abschied =  emotionale Bande müssen zu einem (vorläufigen) Abschluss bringen
              </li>
            </ul>
          </li>
        </ol>
        <h3 class="h1">
          Konfliktbewältigung
        </h3>
        <p class="p">
          Konflikte treten in Gruppen recht häufig auf. Sie sind Teil der Gruppendynamik und führen nach einer erfolgreichen Bewältigung meist zu einer produktiven Arbeit. Konflikte entstehen dann, wenn die betroffenen Parteien voneinander abhängig sind und eine oder beide Parteien zum gleichen Zeitpunkt Handlungen beabsichtigen oder Durchführen, die zur Folge haben (könnten), dass sich die andere Partei behindert, blockiert, bedroht oder verletzt fühlt. Solange ein Konflikt existiert, hält er die Gruppe davon ab, Ziele geschlossen anzustreben, Aufgaben koordiniert abzuwickeln und Beziehungen vertrauensvoll zu gestalten. Eine konstruktive Konfliktlösung ist deshalb anzustreben.
        </p>
        <ul class="p">
          <li>
            <b>Erregung kontrollieren:</b> Der andere kann kritisiert werden, es ist ihm aber als Person Respekt und Achtung zuzusichern.
          </li>
          <li>
            <b>Vertrauen herstellen:</b> Offenbare Dich selbst, zeige Deine Gefühle
          </li>
          <li>
            <b>Kommuniziere offen,</b> beachte dabei die Situation, deine eigenen Gefühle und erörtere die Einstellungen beider Parteien
          </li>
          <li>
            <b>Persönlich verarbeiten:</b> Der Konflikt ist erst dann bereinigt, wenn alle betroffenen Personen sagen können, dass sie mit der getroffenen Vereinbarung leben und arbeiten können sowie keinen Konflikt mehr empfinden.
          </li>
        </ul>

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
            :multiple-choice="multipleChoice7"
            :completed="completed"
            @change="multipleOptions"
          />

          <multiple-choice
            :multiple-choice="multipleChoice8"
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
  name: 'Level5LearningGroupsQuiz',
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
        multipleChoice8: null,
      },
      multipleChoice1: {
        name: 'question_1',
        question: 'Aus wie vielen Phasen besteht ein typischer Gruppenprozess?',
        rightChoice: 3,
        choices: [1, 2, 3, 4],
      },
      multipleChoice2: {
        name: 'question_2',
        question: 'Was ist der Matthäus- oder Schereneffekt?',
        rightChoice: 2,
        choices: [
          'Die Arbeit wird denjenigen Gruppenmitgliedern überlassen, denen es wichtig ist, ein gutes Ergebnis zu erzielen',
          'Diejenigen, die die Hauptlast der Arbeit tragen, werden zunehmend verärgert und verlieren die Motivation für das Projekt',
          'Die besseren Studenten arbeiten mehr und lernen daher mehr als ihre Kommiliton*innen',
          'Manche Gruppenmitglieder weigern sich, weitere Beiträge zu leisten, da sie der Meinung sind, ihren Teil bereits geleistet zu haben',
        ],
      },
      multipleChoice3: {
        name: 'question_3',
        question: 'Ist die folgende Aussage richtig oder falsch? Vertritt Dich selbst in Deinen Aussagen: Sprich per "ich" und nicht per "man" oder per "wir".',
        rightChoice: 0,
        choices: [
          'Richtig',
          'Falsch',
        ],
      },
      multipleChoice4: {
        name: 'question_4',
        question: 'In einer Lerngruppe…',
        rightChoice: 3,
        choices: [
          'profitieren vor allem die schwächeren Gruppenmitglieder',
          'wird die eigene Leistungsfähigkeit aufrechterhalten',
          'ist es das Oberziel schnellstmöglichst ein „Produkt“ zu erstellen',
          'kann man neue Perspektiven und Sichtweisen kennenlernen',
        ],
      },
      multipleChoice5: {
        name: 'question_5',
        question: 'Was ist keine Voraussetzung für eine gute Gruppenarbeit?',
        rightChoice: 0,
        choices: [
          'Gruppen bis zu 8 Personen',
          'Informationsaustausch und -verarbeitung',
          'Klare Aufgabenteilung',
          'Bereitschaft zur Kooperation',
        ],
      },
      multipleChoice6: {
        name: 'question_6',
        question: 'Was stellt eher keine Schwierigkeit beim kooperativen Lernen dar?',
        rightChoice: 2,
        choices: [
          'Die Person mit der höchsten Motivation übernimmt die Hauptaufgabe',
          'Free-rider-Effekt',
          'Zu einseitige Ressourcen',
          'Konflikte und Spannungen',
        ],
      },
      multipleChoice7: {
        name: 'question_7',
        question: 'Welche Aussage über die Phasen des Gruppenprozesses stimmt nicht?',
        rightChoice: 1,
        choices: [
          'In der ersten Phase denkt man in Schubladen, um die anderen in ein gewohntes Schema einzuordnen',
          'Die zweite Phase ist hauptsächlich geprägt von Aggression',
          'Die dritte Phase lautet „Arbeitslust und Produktivität“',
          'Bei der letzten Phase steht die Frage des Transfers im Raum',
        ],
      },
      multipleChoice8: {
        name: 'question_8',
        question: 'Was sollte man beim kooperativem Zusammenarbeiten nicht tun?',
        rightChoice: 1,
        choices: [
          'Das Gespräch aufgrund von Langeweile oder Ärger unterbrechen, wenn man deshalb unkonzentriert ist',
          'Seitengespräche als Zeichen mangelnder Beteiligung auffassen',
          'Nur Informationsfragen stellen',
          'Sich selbst in seinen Aussagen vertreten',
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
    //   if (this.answers.multipleChoice8 === this.multipleChoice8.rightChoice) {
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
      if (name === this.multipleChoice8.name) {
        this.answers.multipleChoice8 = value
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
        level: 'level5_4',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/5/learning-groups-quiz/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
