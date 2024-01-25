<template>
  <div class="stretched level3-reef">
    <img
      src="/images/level3/child-3.png"
      alt="Child 3"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 12rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Motivationsquiz
      </h1>

      <div v-if="theoreticalContent">
        <h3 class="h1">
          Motivation
        </h3>
        <p class="p">
          Motivation (lat. motus = die Bewegung) ist das, was die Richtung und die Energie des aktuellen Verhaltens beeinflusst. Mit der Richtung des Verhaltens ist insbesondere die Ausrichtung auf Ziele gemeint, während die Energie die psychischen Kräfte bezeichnet, welche das Verhalten antreiben. Als ein Synonym für den Begriff Motivation wird auch „Verhaltensbereitschaft“ verwendet. Das Wort „Motivation” wird in der Motivationspsychologie als Sammelbegriff für alle kognitiven und emotionalen Prozesse benutzt, die menschliches Verhalten antreiben und/oder dem Individuum ermöglichen, sein eigenes Handeln nach den zu erwartenden Handlungsergebnissen und deren Folgen auszurichten und selbst zu steuern. Motivation ist also das Ergebnis eines Prozesses, in welchem Motive durch situativ gegebene Anreize angeregt werden.
        </p>
        <h3 class="h1">
          Die intrinsische Motivation
        </h3>
        <p class="p">
          Intrinsische Motivation besagt, dass der Anreiz für ein Verhalten in der Person selbst liegt. Das Verhalten wird demnach auch dann begonnen und aufrechterhalten, wenn mit ihm keine externen Belohnungen (wie z. B. monetäre, materielle Anreize) einhergehen. Die Belohnung erfolgt vielmehr durch (körperinterne) kognitive und affektive Prozesse.
        </p>
        <p class="p">
          Die Selbstbestimmungstheorie postuliert unterschiedliche qualitative Ausprägungen motivationalen Handelns und unterteilt intentionale Handlungen nach dem Grad ihrer Selbstbestimmung bzw. nach dem Grad ihrer Kontrolliertheit. Dadurch ergibt sich ein Kontinuum des Handelns mit dem Endpol „selbstbestimmtes Handeln“ einerseits und dem Endpol „kontrolliertes Handeln“ andererseits. Eine Handlung wird als intrinsisch motiviert verstanden, wenn die Tätigkeit um ihrer selbst Willen ausgeführt wird und keiner externen Anregung bedarf; d.h. sie trägt ihr Ziel in sich selbst.
        </p>
        <h3 class="h1">
          Die extrinsische Motivation
        </h3>
        <p class="p">
          Als extrinsisch motiviert bezeichnet man im Gegensatz dazu Tätigkeiten, die nicht "um ihrer selbst willen" ausgeübt werden, sondern zum Beispiel für Geld oder Anerkennung. Intrinsische und extrinsische Motivation schließen sich nicht notwendigerweise gegenseitig aus. Auch Berufstätige können eine hohe intrinsische Motivation haben, obwohl sie für ihre Tätigkeit entlohnt werden. Dies gilt insbesondere dann, wenn sie einer Arbeit nachgehen, die verantwortungsvoll oder bedeutsam ist und mit der sie sich identifizieren können.
        </p>
        <p class="p">
          Deci und Ryan (1993) unterscheiden vier Stufen extrinsischer Verhaltensregulation: die externale Regulation (erste Stufe), die introjizierte Regulation (zweite Stufe), die identifizierte Regulation (dritte Stufe) und die integrierte Regulation (vierte Stufe). Beim Übergang von Stufe eins zu Stufe vier nimmt der Grad an Kontrolliertheit ab während der Grad an Selbstbestimmung zunimmt. Die Stufe der integrierten Regulation gilt dabei als Basis des selbstbestimmten Handelns, ist jedoch nicht mit der Stufe intrinsischer Motivation gleichzusetzen, da der autotelische Charakter (= die Handlung hat kein anderes Ziel als sich selbst) hier noch fehlt.
        </p>
        <img
          class="image"
          src="/images/level3/figure1.png"
          alt="Figure"
          width="800"
        >
        <h3 class="h1">
          Wie entsteht intrinsische Motivation?
        </h3>
        <p class="p">
          Prinzipiell spielt der soziale Kontext sowohl für die Entwicklung von Interesse als auch für die Entstehung und Aufrechterhaltung der intrinsischen Motivation eine entscheidende Rolle; genauer gesagt besteht ein  Zusammenhang zwischen intrinsisch motiviertem Verhalten, Interesse und den Bedürfnissen nach Kompetenz und Autonomie. Soziale Umweltfaktoren, die Gelegenheit geben, die Bedürfnisse nach Kompetenz, Autonomie und sozialer Eingebundenheit zu befriedigen, erhöhen das Auftreten von Interesse und intrinsischer Motivation und erleichtern die Integration extrinsischer Motivation.
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
  name: 'Level3MotivationQuiz',
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
      },
      multipleChoice1: {
        name: 'question_1',
        question: 'Welche Aussage ist richtig?',
        rightChoice: 1,
        choices: [
          'Das Wort „Motivation“ stammt ursprünglich aus dem Griechischen und bedeutet „Begegnung“',
          'Die Motivation beeinflusst Richtung und Energie des aktuellen Verhaltens',
          'Sie dient in der Motivationspsychologie als Sammelbegriff für kognitive und psychische Prozesse',
          '„Handlungsbereitschaft“ ist kein Synonym für „Motivation“',
        ],
      },
      multipleChoice2: {
        name: 'question_2',
        question: 'Welche Aussage ist falsch? Intrinsische Motivation…',
        rightChoice: 2,
        choices: [
          'bleibt auch dann bestehen, wenn sie nicht mit monetären Anreizen einhergeht',
          'braucht ein optimales Anforderungsniveau als Voraussetzung',
          'entsteht unabhängig vom sozialen Kontext',
          'manifestiert sich beispielsweise in Spaß und Interesse',
        ],
      },
      multipleChoice3: {
        name: 'question_3',
        question: 'Welche Aussage ist richtig? Extrinsische Motivation…',
        rightChoice: 2,
        choices: [
          'schließt automatisch intrinsische Motivation aus',
          'kann in fünf Stufen extrinsischer Verhaltensregulation unterschieden werden',
          'kann persönliche Bedeutsamkeit zur Grundlage haben',
          'kann bei der Stufe der integrierten Regulation mit intrinsischer Motivation gleichgesetzt werden',
        ],
      },
      multipleChoice4: {
        name: 'question_4',
        question: 'Deci und Ryan (1993) unterscheiden vier Stufen extrinsischer Verhaltensregulation.  Welche dieser Stufen bezeichnet die Übereinstimmung der Handlungsziele mit der persönlichen Selbstdefinition?',
        rightChoice: 1,
        choices: [
          'Introjizierte Regulation',
          'Integrierte Regulation',
          'Identifizierte Regulation',
          'Externale Regulation',
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
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level3_3',
        data: this.answers,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/3/motivation-quiz/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
