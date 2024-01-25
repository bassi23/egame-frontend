<template>
  <div class="stretched level5-garden">
    <img
      src="/images/level5/balina.png"
      alt="Balina"
      class="character character_position_top character_animation_top"
      style="width: 17rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Lernstrategietest
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Lernstrategien sind Verhaltensweisen und Kognitionen, die von Lernenden zum Wissenserwerb genutzt werden. Sie können dabei einer oberflächlichen oder einer tiefen Verarbeitung von Informationen dienen. Es werden drei Kategorien von Lernstrategien unterschieden:
          kognitive, metakognitive und ressourcenbezogene Lernstrategien.
        </p>
        <h3 class="h1">
          Kognitive Lernstrategien
        </h3>
        <ul class="p">
          <li>
            Dienen dem Wissenserwerb und der Informationsverarbeitung
          </li>
          <li>
            Als kognitive gelten:
            <ul class="p">
              <li>
                Wiederholungsstrategien: durch Wiederholung Inhalte im Langzeitgedächtnis speichern
              </li>
              <li>
                Organisationsstrategien: Konstruktion von Bezügen innerhalb des zu lernenden Stoffes
              </li>
              <li>
                Elaborationsstrategien: neues Wissen in vorhandenes Wissen einbetten, z.B. durch ein ausgedachtes Beispiel
              </li>
              <li>
                Kritische Prüfen: prüfen von Argumentationszusammenhängen
              </li>
            </ul>
          </li>
        </ul>
        <img
          class="image"
          src="/images/level5/figure1.jpg"
          alt="Figure"
          width="700"
        >
        <h3 class="h1">
          Metakognitive Lernstrategien
        </h3>
        <ul class="p">
          <li>
            übergeordnete Strategien der Planung, Überwachung und Regulation sowie der Bewertung des eigenen Lernprozesses.
          </li>
          <li>
            auf die Steuerung und Kontrolle der kognitiven Strategien ausgerichtet
          </li>
          <li>
            Helfen beim Kontrollieren des eigenen Lernprozesses
          </li>
          <li>
            Planung: Ziele setzen und Zielerreichung planen
          </li>
          <li>
            Überwachung/Regulation: Feststellung von IST-SOLL Diskrepanzen und Korrektur der Aufgabenbearbeitung
          </li>
          <li>
            Bewertung: Beurteilung, ob gesetztes Ziel erreicht und ob zukünftig Anpassungen im Lernprozess vollzogen werden müssen
          </li>
        </ul>
        <img
          class="image"
          src="/images/level5/figure2.jpg"
          alt="Figure"
          width="700"
        >
        <h3 class="h1">
          Ressourcenbezogene Lernstrategien
        </h3>
        <ul class="p">
          <li>
            umfassen die Organisation des eigenen Lernens und die Rahmenbedingungen des Lernens
          </li>
          <li>
            lassen sich unterscheiden in interne und externe ressourcenbezogene Lernstrategien
          </li>
          <li>
            Internen  ressourcenbezogene Lernstrategien:  Aufmerksamkeit, Anstrengung, Zeitmanagement
          </li>
          <li>
            Externe ressourcenbezogene Lernstrategien: Gestaltung der Lernumgebung, Zusammentragen von zusätzlichen Informationen, Einsatz von kooperativem Lernen
          </li>
        </ul>
        <img
          class="image"
          src="/images/level5/figure3.jpg"
          alt="Figure"
          width="700"
        >

        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <div v-if="!next">
          <p class="description">
            Die folgenden 14 Aussagen beschäftigen sich mit deinen Lernstrategien im Studium.
            Dabei gibt es keine richtigen oder falschen Antworten.
            Wenn du denkst, dass eine Aussage sehr gut zu dir passt, wähle „stimmt genau“, falls die Aussage überhaupt nicht zu dir passt, wähle „stimmt gar nicht“.
            Wähle die Abstufung, die am besten zu dir passt.
          </p>

          <p class="description">
            7 stufige Skala (stimmt gar nicht (1), stimmt genau (7))
          </p>

          <b-row
            v-for="(option, optionIndex) in learningStrategyAssessment"
            :key="`option_` + optionIndex"
          >
            <b-col>
              {{ optionIndex + 1 }}
            </b-col>
            <b-col>
              {{ option.question }}
            </b-col>
            <b-col>
              <rating-form
                :group-index="optionIndex"
                :data-list="option.options"
                @choose-rating="updateRating"
              />
            </b-col>
          </b-row>
        </div>

        <div
          v-else
          class=""
        >
          <div>
            <h3>Wiederholen</h3>
            <h4>Dein Ergebnis ist {{ results.repeating }}</h4>
            <p v-if="results.repeating >= 5">
              Hohe Nutzung dieser Strategie
            </p>
            <p v-if="results.repeating > 3 && results.repeating < 5">
              Moderate Nutzung dieser Strategie
            </p>
            <p v-if="results.repeating <= 3">
              Geringe Nutzung dieser Strategie
            </p>
          </div>
          <hr>

          <div>
            <h3>Elaborieren</h3>
            <h4>Dein Ergebnis ist {{ results.elaborating }}</h4>
            <p v-if="results.elaborating >= 5">
              Hohe Nutzung dieser Strategie
            </p>
            <p v-if="results.elaborating > 3 && results.elaborating < 5">
              Moderate Nutzung dieser Strategie
            </p>
            <p v-if="results.elaborating <= 3">
              Geringe Nutzung dieser Strategie
            </p>
          </div>
          <hr>

          <div>
            <h3>Organisieren</h3>
            <h4>Dein Ergebnis ist {{ results.organizing }}</h4>
            <p v-if="results.organizing >= 5">
              Hohe Nutzung dieser Strategie
            </p>
            <p v-if="results.organizing > 3 && results.organizing < 5">
              Moderate Nutzung dieser Strategie
            </p>
            <p v-if="results.organizing <= 3">
              Geringe Nutzung dieser Strategie
            </p>
          </div>
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
          @click="handleMult"
        />
      <!-- <base-button
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
      /> -->
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import RatingForm from '@/components/RatingForm.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level5LearningStrategyAssessment',
  components: {
    BaseButton,
    RatingForm,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      next: false,
      results: {
        repeating: null,
        elaborating: null,
        organizing: null,
      },
      answers: [
        {
          question: 'Wenn ich Studieninhalte lerne, spreche ich mir das Material immer wieder laut vor.',
          selected: null,
        },
        {
          question: 'Wenn ich Studieninhalte lerne, lese ich meine Notizen immer und immer wieder.',
          selected: null,
        },
        {
          question: 'Ich merke mir Schlüsselwörter, um mich an wichtige Studieninhalte zu erinnern.',
          selected: null,
        },
        {
          question: 'Ich erstelle Listen mit wichtigen Begriffen und merke mir diese.',
          selected: null,
        },
        {
          question: 'Wenn ich Studieninhalte lerne, suche ich mir Informationen aus verschiedenen Quellen zusammen.',
          selected: null,
        },
        {
          question: 'Ich versuche Zusammenhänge zwischen den Inhalten verschiedener Kurse zu finden.',
          selected: null,
        },
        {
          question: 'Wenn ich Studieninhalte lese, versuche ich neue Informationen mit meinem Vorwissen zu verbinden.',
          selected: null,
        },
        {
          question: 'Wenn ich Studieninhalte lerne, schreibe ich mir eine Zusammenfassung.',
          selected: null,
        },
        {
          question: 'Ich versuche Studieninhalte zu verstehen, indem ich Zusammenhänge zwischen der gelesenen Literatur und den Vorlesungen suche.',
          selected: null,
        },
        {
          question: 'Ich versuche Studieninhalte eines Kurses auf andere Aktivitäten (z.B. Diskussionen) zu übertragen.',
          selected: null,
        },
        {
          question: 'Wenn ich Literatur lese, gliedere ich die Inhalte, um meine Gedanken besser ordnen zu können.',
          selected: null,
        },
        {
          question: 'Wenn ich Studieninhalte lerne, gehe ich die Literatur/meine Notizen durch und versuche die Hauptthemen herauszuarbeiten.',
          selected: null,
        },
        {
          question: 'Ich erstelle einfache Tabellen, Diagramme oder Abbildungen, um die Studieninhalte zu veranschaulichen.',
          selected: null,
        },
        {
          question: 'Wenn ich Studieninhalte lerne, gehe ich meine Notizen durch und versuche wichtige Themen zu identifizieren.',
          selected: null,
        },
      ],
      learningStrategyAssessment: [
        {
          question: 'Wenn ich Studieninhalte lerne, spreche ich mir das Material immer wieder laut vor.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Studieninhalte lerne, lese ich meine Notizen immer und immer wieder.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Ich merke mir Schlüsselwörter, um mich an wichtige Studieninhalte zu erinnern.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Ich erstelle Listen mit wichtigen Begriffen und merke mir diese.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Studieninhalte lerne, suche ich mir Informationen aus verschiedenen Quellen zusammen.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Ich versuche Zusammenhänge zwischen den Inhalten verschiedener Kurse zu finden.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Studieninhalte lese, versuche ich neue Informationen mit meinem Vorwissen zu verbinden.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Studieninhalte lerne, schreibe ich mir eine Zusammenfassung.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Ich versuche Studieninhalte zu verstehen, indem ich Zusammenhänge zwischen der gelesenen Literatur und den Vorlesungen suche.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Ich versuche Studieninhalte eines Kurses auf andere Aktivitäten (z.B. Diskussionen) zu übertragen.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Literatur lese, gliedere ich die Inhalte, um meine Gedanken besser ordnen zu können.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Studieninhalte lerne, gehe ich die Literatur/meine Notizen durch und versuche die Hauptthemen herauszuarbeiten.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Ich erstelle einfache Tabellen, Diagramme oder Abbildungen, um die Studieninhalte zu veranschaulichen.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
        {
          question: 'Wenn ich Studieninhalte lerne, gehe ich meine Notizen durch und versuche wichtige Themen zu identifizieren.',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
          ],
        },
      ],
    }
  },
  watch: {
    answers: {
      handler(data) {
        this.results.repeating = ((data[0].selected
        + data[1].selected
        + data[2].selected
        + data[3].selected) / 4).toFixed(2)
        this.results.elaborating = ((data[4].selected
        + data[5].selected
        + data[6].selected
        + data[7].selected
        + data[8].selected
        + data[9].selected) / 6).toFixed(2)
        this.results.organizing = ((data[10].selected
        + data[11].selected
        + data[12].selected
        + data[13].selected) / 4).toFixed(2)
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
    updateRating(index, rating) {
      this.answers[index].selected = rating
    },
    handleCompleted() {
      this.completed = true
      const answersNew = {
        answers: this.answers,
        results: this.results,
        time: this.seconds,
      }
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level5_1',
        data: answersNew,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/5/learning-strategy-assessment/end')
    },
    handleMult() {
      this.handleCompleted()
      this.handleResults()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
