<template>
  <div class="stretched level6-coral-tower">
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_top character_animation_top"
      style="width: 10rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Szenarien bewerten
      </h1>

      <div v-if="theoreticalContent">
        <h3 class="h1">
          Reflexion
        </h3>
        <p class="p">
          Reflexion [lat. re- zurück, flectere biegen, beugen] bezeichnet das «Sich-zurück-Wenden»
          des Denkens und des Bewusstseins auf sich selbst. Reflexionist insbesondere die Fähigkeit,
          eigenes Verhalten, mentale Konzepte, Gefühle und Haltungen wahrzunehmen und in Bezug zur
          Umwelt kritisch zu hinterfragen. Sie ist notwendige Voraussetzung, um aus gemachten
          Erfahrungen zu lernen, vor, während oder nach dem Ereignis. Durch die eigenständige, aber
          auch mit anderen gemeinsam durchgeführte Reflexion kann ein differenzierteres Verständnis
          des Selbst, des Anderen oder der Situation als Ganzes entstehen. Sie bezeichnet also einen
          von anderen Personen nicht beobachtbaren, bewussten inneren Prozess des Nachdenkens und
          der gedanklichen Verarbeitung von Informationen über sich selbst als Person sowie über das
          eigene Denken, Fühlen und Handeln.
        </p>
        <h3 class="h1">
          Kausalattribution
        </h3>
        <p class="p">
          Kausalattributionen sind subjektive Ursachenzuschreibungen, die Personen zur Erklärung von
          Ereignissen vornehmen. In der Pädagogischen Psychologie werden attributionale Theorien
          insbesondere zur Erklärung von Motivation, Emotionen und Lernverhalten verwendet. Im Lern-
          und Leistungskontext existieren Ursachenfaktoren, die bevorzugt zur Erklärung von
          Erfolg/Misserfolg herangezogen werden (u.a. Begabung, Anstrengung, Zufall). Diese
          Kausalfaktoren lassen sich auf Kausaldimensionen einordnen. Dazu zählen die Lokation (Ort
          der Ursache; innerhalb/außerhalb der handelnden Person), die Stabilität (zeitliche
          Stabilität/Variabilität der Ursache), die Globalität (Ausmaß der Generalisierung über
          Situationen) sowie die Kontrollierbarkeit des Ursachenfaktors.
        </p>
        <p class="p">
          Kausalattributionen beeinflussen, wie sich Erfahrungen auf zukünftiges Lernverhalten
          auswirken. Die Kombination von Lokation und Stabilität bzw. Kontrollierbarkeit beeinflusst
          die Emotionen (Schuld, Scham, Stolz) und auch den zukünftigen Aufgabenwert. Es zeigen sich
          zudem Effekte u.a. auf das Selbstwertgefühl und die Leistung. Die Kausalattribution auf
          internal-variable-kontrollierbare Ursachen, wie Anstrengung,gelten aufgrund ihrer
          Steuerbarkeit durch die Person als motivationsförderlich. Ein ungünstiger Attributionsstil
          (internal-stabil-global-unkontrollierbar) kann zu erlernter Hilflosigkeit (erlernte
          Hilflosigkeit) und depressiven Reaktionen (Depression) auf Misserfolg führen. Vereinfacht
          bedeutet das, dass der Mensch bei einem bestimmten Erlebnis dieses Erlebnis
          unterschiedlich erklären kann. Ich kann eine schlechte Note auf meine mangelnden
          Fähigkeiten zurückführen, oder aber auf meine mangelnde Anstrengung. Beide Attributionen
          wären internal (also auf mich persönlich) bezogen, wobei die erstere eine stabile Ursache
          beschreibt, während eine mangelnde Anstrengung variabel ist (beim nächsten Mal strenge ich
          mich mehr an!). Ursachen kann man aber auch external (in seinem Umfeld) suchen: Man könnte
          auch dem Lehrer die Schuld geben, weil die Klausur einfach viel zu schwer war. Aber auch
          Glück oder Pech können als Erklärung dienen, diese Faktoren wären auch external,
          allerdings variabel, im Gegensatz zu den Aufgabenschwierigkeiten des zu strengen Lehrers.
        </p>
        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <p class="description">
          Bewerte welcher Attributionsstil verwendet wurde. Du musst immer zwei Kreuze setzen.
          Unterscheide einmal, ob der Stil internal oder external ist und einmal, ob stabil oder
          variabel attribuiert wurde.
        </p>
        <div class="questionText">
          <b-row
            v-for="(option, optionIndex) in evaluateScenarios"
            :key="`option_` + optionIndex"
          >
            <b-col>
              {{ optionIndex + 1 + '.' }} {{ option.question }}
            </b-col>
            <b-col class="option">
              <form-check-box
                :group-index="optionIndex"
                :data-list="option.options"
                :right-choice="option.rightChoice"
                :completed="completed"
                @check="updateCheck"
              />
              <!-- TODO show right answers! -->
            </b-col>
          </b-row>
        </div>

        <base-button
          v-if="completed"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <base-button
          v-else
          variant="primary"
          text="Zeige Ergebnisse"
          :disabled="false"
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
          :disabled="false"
          @click="handleCompleted"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import FormCheckBox from '@/components/FormCheckBox.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level6EvaluateScenarios',
  components: {
    BaseButton,
    FormCheckBox,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      // next: false,
      answers: [
        {
          question: 'Weil ich jeden Abend vor dem Schlafengehen Yoga mache, fühle ich mich mental ausgeglichen.',
          selected: null,
        },
        {
          question: 'Es tut mir leid, dass ich zu spät komme, aber der Bus ist mir vor der Nase weggefahren.',
          selected: null,
        },
        {
          question: 'Sonst bin ich in Biologie gut, aber diesmal habe ich eine vier geschrieben, weil ich nicht genug gelernt habe.',
          selected: null,
        },
        {
          question: 'Mein letzter Vokabeltest war schlecht. Herr Schmitt kündigt die Tests aber auch nie an.',
          selected: null,
        },
        {
          question: 'Mein Regal hängt schief, weil ich nicht handwerklich begabt bin.',
          selected: null,
        },
        {
          question: 'Ich habe gestern ausnahmsweise den Aufzug genommen, weil ich zu erschöpft war, um die Treppen zu laufen.',
          selected: null,
        },
        {
          question: 'Wenn ich koche, schmeckt es meiner Mutter nie. Sie isst nur das gerne, was sie selbst gekocht hat.',
          selected: null,
        },
        {
          question: 'Ich muss heute leider früher gehen, weil ich heute einen wichtigen Termin habe.',
          selected: null,
        },
      ],
      evaluateScenarios: [
        {
          question: 'Weil ich jeden Abend vor dem Schlafengehen Yoga mache, fühle ich mich mental ausgeglichen.',
          rightChoice: [0, 2],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Es tut mir leid, dass ich zu spät komme, aber der Bus ist mir vor der Nase weggefahren.',
          rightChoice: [1, 3],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Sonst bin ich in Biologie gut, aber diesmal habe ich eine vier geschrieben, weil ich nicht genug gelernt habe.',
          rightChoice: [0, 3],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Mein letzter Vokabeltest war schlecht. Herr Schmitt kündigt die Tests aber auch nie an.',
          rightChoice: [1, 2],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Mein Regal hängt schief, weil ich nicht handwerklich begabt bin.',
          rightChoice: [0, 2],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Ich habe gestern ausnahmsweise den Aufzug genommen, weil ich zu erschöpft war, um die Treppen zu laufen.',
          rightChoice: [0, 3],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Wenn ich koche, schmeckt es meiner Mutter nie. Sie isst nur das gerne, was sie selbst gekocht hat.',
          rightChoice: [1, 2],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
        {
          question: 'Ich muss heute leider früher gehen, weil ich heute einen wichtigen Termin habe.',
          rightChoice: [1, 3],
          options: [
            {
              text: 'internal',
              value: 'internal',
            },
            {
              text: 'external',
              value: 'external',
            },
            {
              text: 'stabil',
              value: 'stabil',
            },
            {
              text: 'variabel',
              value: 'variabel',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    updateCheck(index, check) {
      this.answers[index].selected = check
    },
    handleCompleted() {
      this.completed = true
      const answersNew = {
        answers: this.answers,
        time: this.seconds,
      }
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level6_1',
        data: answersNew,
      })
    },
    // handleResults() {
    //   this.next = true
    // },
    handleNext() {
      this.$router.push('/level/6/evaluate-scenarios/end')
    },
    handleMult() {
      this.handleCompleted()
      // this.handleResults()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

.questionText {
  justify-content: left;
  padding: 2rem;
  color: $dark;
  font-weight: bold;
}

.option {
  color: black;
  border-radius: 1rem;
  padding: 2rem;
}
</style>
