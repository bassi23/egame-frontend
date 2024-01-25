<template>
  <div class="stretched level1-endless-ocean">
    <img
      src="/images/level1/frogfish.png"
      alt="Frogfish"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 16rem; height: auto"
    >

    <div class="box boxContainer">
      <!-- Task 1.1: Self-regulated learning knowledge -->
      <h1 class="heading">
        Prüfe dein Wissen zur Selbstregulation
      </h1>
      <div v-if="!theoryCompleted">
        <h1 class="h1">
          Definition
        </h1>
        <p class="p">
          Selbstreguliertes Lernen ist ein aktiver, konstruktiver Prozess, bei dem der Lernende sich
          Ziele für sein Lernen setzt und zudem Kognitionen, Motivation und Verhalten in
          Abhängigkeit von diesen Zielen und den gegebenen äußeren Umständen beobachtet, reguliert
          und kontrolliert (Pintrich, 2000, S. 453).
        </p>
        <h1 class="h1">
          Das sozial-kognitive Modell des Selbstregulierten Lernens (Zimmerman, 2000)
        </h1>
        <p class="p">
          Das sozial-kognitive Model des Selbstregulierten Lernens (SRL) sieht SRL als zyklischen
          Prozess an, d.h. dass vorherige Lernprozesse, z.B. durch das Sammeln von Erfahrungen mit
          Lernstrategien, einen Einfluss auf darauffolgende Lernprozesse haben können. Die Lernenden
          können ihren Lernprozess aktiv beeinflussen und die gewählten Lernstrategien an ihre
          aktuellen Lernprozesse anpassen. Diese Erfahrungen können wiederum für zukünftige
          Lernprozesse genutzt werden. Zimmerman unterteilt den Lernprozess in drei
          aufeinanderfolgende Phasen: Die Planungsphase, die Handlungsphase und die Reflexionsphase.
        </p>
        <img
          src="/images/level1/modell_zimmermann.png"
          alt="Modell nach Zimmermann"
        >
        <p class="p">
          <br>
          <br>
          Die Planungsphase findet vor dem eigentlichen Lernen statt. Sie dient der Vorbereitung auf
          das Lernen und den dazugehörigen Aktivitäten. In dieser Phase setzen sich Lernende
          Lernziele und wählen adäquate Lernstrategien aus, die ihnen nützlich erscheinen, um die
          angestrebten Ziele zu erreichen. Dabei wird auch das eigene Vorwissen sowie bereits
          gemachte Erfahrungen in die Planung einbezogen. Gerade zu Beginn des Lernprozesses spielt
          die sogenannte Selbstwirksamkeit, d.h. der Glaube daran, die gesetzte Aufgabe schaffen zu
          können, eine große Rolle. Lernende, die sich sicher sind, dass sie eine gesetzte Aufgabe
          erfüllen können, finden eher die Motivation mit dem Lernen zu beginnen.
        </p>
        <p class="p">
          Die Handlungsphase bezieht sich auf den ablaufenden Lernprozess. Hier werden vor allem
          kognitive Strategien, z.B. Wiederholen oder Organisieren eingesetzt, um neu erworbenes
          Wissen zu festigen und in bestehende kognitive Strukturen einzugliedern. In dieser Phase
          bilden volitionale und motivationale Strategien die Basis, um den Lernprozess aufrecht zu
          erhalten. Lernende müssen zum einen in der Lage sein mit Ablenkungen umzugehen und ihre
          Konzentration aufrechtzuerhalten, um den Lernprozess erfolgreich fortführen zu können. Zum
          anderen müssen sie sicherstellen, dass sie weiterhin motiviert bleiben, um die gesetzten
          Ziele erreichen zu können. Während des kompletten Lernprozesses kommt der Metakognition
          und hier besonders der Selbstüberwachung eine besondere Bedeutung zu. Durch die
          Überwachung des Lernprozesses sind Lernende in der Lage abzuschätzen, ob die angewendeten
          Strategien zielführend sind oder nicht. Dementsprechend kann der Strategieeinsatz noch
          während des Lernprozesses angepasst werden, um der Zielerreichung näher zu kommen.
        </p>
        <p class="p">
          In der Reflexionsphase findet ein IST-SOLL-Vergleich der gesetzten Ziele statt, bei
          welchem die eingesetzten Lernstrategien für den nächsten Lernprozess bewertet werden.
          Nützliche Strategien werden beibehalten, während nicht nützliche Strategien verworfen
          werden. Im Zusammenhang der Zielbewertung entstehen Emotionen, die entweder positiv (z.B.
          Stolz) oder negativ (z.B. Enttäuschung) sein können. Die entstehende Emotion hängt stark
          davon ab, welche Ursache die Lernenden für den Ausgang ihres Lernprozesses verantwortlich
          machen (= Attribution). Als förderlich für das eigene Selbstbewusstsein und die
          Selbstwirksamkeit hat sich das Zurückführen positiver Lernergebnisse auf die eigenen
          Fähigkeiten und Anstrengungen erwiesen. Im Falle negativer Lernergebnisse sollte die
          Ursache auf äußere Faktoren (z.B. Pech, zu schwere Aufgabe) zurückgeführt werden, um das
          Selbstbewusstsein und somit eine positive Einstellung zum Lernen zu erhalten. Die
          ausgewählten Lernstrategien sowie die gemachten Erfahrungen des Lernprozesses können
          anschließend im nächsten Lernprozess verwendet werden. Zusätzlich zu dem dargestellten
          Prozessmodell, kann das Selbstregulierte Lernen auch in seinen einzelnen Komponenten
          betrachtet werden. Komponentenmodelle (z.B. Boekaerts, 1999) unterscheiden meist
          kognitive, metakognitive und motivationale Komponenten des Selbstregulierten Lernens.
        </p>

        <base-button
          class="centerBtn"
          variant="primary"
          text="Weiter"
          @click="handleTheoryCompleted"
        />
      </div>
      <div v-else>
        <p class="p">
          Ordne die richtigen Strategien der jeweiligen Phase des Zimmerman Modells eindeutig zu.
          Manche Strategien sind nicht sinnvoll und sollen nicht zugeordnet werden. Wenn eine
          Strategie für mehrere Phasen passend erscheint, ordne sie der Phase zu, in der sie am
          wichtigsten ist.
        </p>
        <!-- <div
          v-if="!next"
          class="questionContainer"
        > -->
        <div
          class="questionContainer"
        >
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

          <zimmerman-model
            :drag-and-drop="dragAndDrop1"
            :completed="completed"
            @planungs-phase="planungsPhase"
            @handlungs-phase="handlungsPhase"
            @reflexions-phase="reflexionsPhase"
          />

          <multiple-choice
            :multiple-choice="multipleChoice3"
            :completed="completed"
            @change="multipleOptions"
          />

          <self-regulated-learning
            :drag-and-drop="dragAndDrop2"
            :completed="completed"
            @aktiver="aktiver"
            @motivation="motivation"
            @external-circumstances="externalCircumstances"
            @controlled="controlled"
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
          class="centerBtn"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <!-- <base-button
          v-if="completed && next"
          class="centerBtn"
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
          :disabled="nextBtnStatus"
          @click="handleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import MultipleChoice from '@/components/ui/MultipleChoice.vue'
import ZimmermanModel from '@/components/levels/level1/dragAndDrop/ZimmermanModel.vue'
import SelfRegulatedLearning from '@/components/levels/level1/dragAndDrop/SelfRegulatedLearning.vue'
// import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import colorsMixin from '@/mixins/colorsMixin'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level1Part1',
  components: {
    BaseButton,
    MultipleChoice,
    ZimmermanModel,
    SelfRegulatedLearning,
    // DoughnutChart,
  },
  mixins: [colorsMixin, timeMixin],
  data() {
    return {
      completed: false,
      theoryCompleted: false,
      // next: false,
      answers: {
        multipleChoice1: null,
        multipleChoice2: null,
        multipleChoice3: null,
        zimmermanModel: {
          planungsPhase: [],
          handlungsPhase: [],
          reflexionsPhase: [],
        },
        selfRegulatedLearning: {
          aktiver: '',
          motivation: '',
          externalCircumstances: '',
          controlled: '',
        },
      },
      multipleChoice1: {
        name: 'question_1',
        question: '1. Welches sind Komponenten der Selbstregulation?',
        rightChoice: 0,
        choices: [
          'kognitive Komponente, metakognitive Komponente, motivationale Komponente',
          'kognitive Komponente, kreative Komponente, volitionale Komponente',
          'metakognitive Komponente, volitionale Komponente, methodische Komponente',
          'Wissenskomponente, Intelligenzkomponente, Rigiditätskomponente',
        ],
      },
      multipleChoice2: {
        name: 'question_2',
        question: '2. Wie heißen die drei Phasen des Zimmerman Modells?',
        rightChoice: 0,
        choices: [
          'Planungsphase, Handlungsphase, Reflexionsphase',
          'Planungsphase, Testphase, Reflexionsphase',
          'Zielsetzungsphase, Ausführungsphase, Bewertungsphase',
          'Zielsetzungsphase, Handlungsphase, Kontrollphase',
        ],
      },
      multipleChoice3: {
        name: 'question_4',
        question: '4. Das Modell von Zimmerman ist ein lineares Modell der Selbstregulation',
        rightChoice: -1,
        choices: ['Wahr', 'Falsch'],
      },
      dragAndDrop1: {
        name: 'question_3',
        text: 'The following words have to be assigned to the corresponding phase: Kommunikation, Selbstmotivation (1), Selbstbeobachtung (2), Attribution (3), Prokrastination, Verbalisierung',
        question: '3. Ordne die richtigen Strategien den jeweiligen Phasen des Zimmerman Modells zu',
        phases: ['Planungsphase', 'Handlungsphase', 'Reflexionsphase'],
        strategies: ['Kommunikation', 'Selbstmotivation', 'Selbstbeobachtung', 'Attribution', 'Prokrastination', 'Verbalisierung'],
      },
      dragAndDrop2: {
        name: 'question_5',
        question: '5. Selbstreguliertes Lernen ist ein _______, konstruktiver Prozess, bei dem der Lernende sich Ziele setzt und zudem seine Kognitionen, seine _______ und sein Verhalten in Abhängigkeit von dessen Zielen und den gegebenen _______ beobachtet, reguliert und _______.',
        choices: ['investiert', 'denkt', 'langwieriger', 'Emotionen', 'Motivation', 'aktiver', 'kontrolliert', 'Gefühlen', 'Gedanken', 'Rückmeldungen', 'äußeren Umstände', 'zufälliger'],
      },
    }
  },
  computed: {
    username() {
      return this.$store.getters.getUsername
    },
    nextBtnStatus() {
      // if (this.answers.multipleChoice1 !== null
      // && this.answers.multipleChoice2 !== null
      // && this.answers.multipleChoice3 !== null
      // && this.answers.zimmermanModel.planungsPhase.length > 0
      // && this.answers.zimmermanModel.handlungsPhase.length > 0
      // && this.answers.zimmermanModel.reflexionsPhase.length > 0
      // && this.answers.selfRegulatedLearning.aktiver.length > 0
      // && this.answers.selfRegulatedLearning.motivation.length > 0
      // && this.answers.selfRegulatedLearning.externalCircumstances.length > 0
      // && this.answers.selfRegulatedLearning.controlled.length > 0) {
      //   return false
      // }
      // return true

      return false
    },
    // chartData() {
    //   const chart = {}
    //   let answer1 = 0
    //   let answer2 = 0
    //   let answer3 = 0
    //   let answer5 = 0
    //   let planungsPhase = 0
    //   let handlungsPhase = 0
    //   let reflexionsPhase = 0
    //   let aktiver = 0
    //   let motivation = 0
    //   let externalCircumstances = 0
    //   let controlled = 0

    //   // Multiple choice
    //   if (this.answers.multipleChoice1 === this.multipleChoice1.rightChoice) {
    //     answer1 = 1
    //   }
    //   if (this.answers.multipleChoice2 === this.multipleChoice2.rightChoice) {
    //     answer2 = 1
    //   }
    //   // Zimmerman model
    //   if (this.answers.zimmermanModel.planungsPhase.length === 2
    //   && this.answers.zimmermanModel.planungsPhase.includes('Kommunikation')
    //   && this.answers.zimmermanModel.planungsPhase.includes('Selbstmotivation')) {
    //     planungsPhase = 1
    //   }
    //   if (this.answers.zimmermanModel.handlungsPhase.length === 1
    //   && this.answers.zimmermanModel.handlungsPhase.includes('Selbstbeobachtung')) {
    //     handlungsPhase = 1
    //   }
    //   if (this.answers.zimmermanModel.reflexionsPhase.length === 1
    //   && this.answers.zimmermanModel.reflexionsPhase.includes('Attribution')) {
    //     reflexionsPhase = 1
    //   }
    //   answer3 = planungsPhase + handlungsPhase + reflexionsPhase
    //   // Self regulated learning
    //   if (this.answers.selfRegulatedLearning.aktiver.includes('aktiver')) {
    //     aktiver = 1
    //   }
    //   if (this.answers.selfRegulatedLearning.motivation.includes('Motivation')) {
    //     motivation = 1
    //   }
    //   if (this.answers.selfRegulatedLearning.externalCircumstances.includes('äußeren Umstände')) {
    //     externalCircumstances = 1
    //   }
    //   if (this.answers.selfRegulatedLearning.controlled.includes('kontrolliert')) {
    //     controlled = 1
    //   }
    //   answer5 = aktiver + motivation + externalCircumstances + controlled

    //   // Chart datasets
    //   chart.labels = ['Question 1', 'Question 2', 'Question 3', 'Question 5']
    //   chart.datasets = []
    //   chart.datasets.push({
    //     backgroundColor: this.randomColor(chart.labels.length),
    //     data: [answer1, answer2, answer3, answer5],
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
    },
    planungsPhase(e) {
      this.answers.zimmermanModel.planungsPhase = [...e]
    },
    handlungsPhase(e) {
      this.answers.zimmermanModel.handlungsPhase = [...e]
    },
    reflexionsPhase(e) {
      this.answers.zimmermanModel.reflexionsPhase = [...e]
    },
    aktiver(e) {
      this.answers.selfRegulatedLearning.aktiver = e
    },
    motivation(e) {
      this.answers.selfRegulatedLearning.motivation = e
    },
    externalCircumstances(e) {
      this.answers.selfRegulatedLearning.externalCircumstances = e
    },
    controlled(e) {
      this.answers.selfRegulatedLearning.controlled = e
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level1_1',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleTheoryCompleted() {
      this.theoryCompleted = true
    },
    handleNext() {
      this.$router.push('/level/1/2')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

.questionContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}
</style>
