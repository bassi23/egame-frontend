<template>
  <div class="stretched level3-reef">
    <img
      src="/images/level3/child-4.png"
      alt="Child 4"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 12rem; height: auto"
    />
    <div class="box boxContainer">
      <h1 class="heading">Strategiebewertung</h1>
      <div>
        <div v-if="theoreticalContent">
          <p class="p">
            Prinzipiell gibt es zwei Aspekte, nach denen sich Maßnahmen zur Selbstmotivation
            untergliedern lassen: Demotivatoren abbauen vs. Motivatoren nutzen. Welcher der beiden
            Aspekte den besseren Ansatzpunkt zur Selbstmotivation bildet, oder ob beide Punkte
            nacheinander abgearbeitet werden müssen, hängt dabei von der jeweiligen Aufgabe ab.
          </p>
          <p class="p">
            Zur Steigerung der Selbstmotivation können zunächst diejenigen Dinge abgebaut werden,
            die man bei der Ausführung der Arbeit als störend empfindet. Der erste Schritt besteht
            also darin, solche störenden Gegebenheiten ausfindig zu machen und aufzulisten, um
            anschließend etwas dagegen zu unternehmen. Das ist nur in gewissen Grenzen möglich, so
            wie es die Aufgabe oder das Umfeld zulässt. Motivatoren sind die Dinge, die einem an
            bestimmten Arbeiten direkt oder indirekt Spaß machen. <br />Jede Person kann abhängig
            von ihren Interessen und Zielen unterschiedliche Motivatoren aufführen, die sie bei der
            Entwicklung einer positiveren Einstellung zur jeweiligen Aufgabe unterstützen könnten.
            Unterschiede gibt es auch in der Rangfolge der Motivatoren: Was für Person A ein großer
            Motivator ist, ist für Person B nur ein kleiner, oder vielleicht sogar ein Demotivator.
            Motivatoren sowie deren Rangfolge sind aber nicht statisch, sondern weisen über die Zeit
            ein dynamisches Verhalten auf und können sich verändern. <br />Deshalb sollten
            persönliche Motivatoren von Zeit zu Zeit erneut überprüft werden.
          </p>

          <p class="p">
            Es folgt eine Liste mit verschiedenen Strategien, um sich selbst zu motivieren. Die
            Liste ist jedoch nicht vollständig, denn jede Person hat andere Vorlieben.
          </p>

          <p class="p">
            <ul>
              <li>Ziele setzen</li>
              <li>Überlegen, welche Anteile einer Aufgabe Spaß machen</li>
              <li>Hindernisse beseitigen, um besser beginnen zu können</li>
              <li>Arbeitsfortschritte visualisieren (gerade dann, wenn viel Kopfarbeit erfolgt, die
                nicht immer gleich sichtbar ist)
              </li>
              <li>Aufgabe als Herausforderung ansehen und nicht als Last</li>
              <li>Konsequenzen verdeutlichen, wenn die Aufgabe nicht erledigt wird</li>
              <li>Aufgabe in kleinere Stücke zerlegen und Teilaufgaben terminieren</li>
              <li>Mit leichten Aufgaben beginnen, Schwierigkeitsgrad steigern</li>
              <li>Zeitpläne erstellen, um einen Überblick zu gewinnen</li>
              <li>Abmachung mit einer zweiten Person/Kontrolle durch andere</li>
              <li>Erinnerungshinweise an Arbeitsplatz anbringen</li>
              <li>Gründe für Aufschieben laut Aussprechen und sich deren Ausredencharakter bewusst
                werden
              </li>
              <li>Positives Gefühl der Erledigungen vorstellen</li>
              <li>Pro/Kontra-Liste für Aufschieben aufstellen</li>
            </ul>
          </p>

          <base-button variant="primary" text="Start" @click="theoreticalContent = false" />
        </div>

        <div v-else>
          <div v-if="!next">
            <p class="p">
              Ergänze die folgende Liste von Selbstmotivationsstrategien und bewerte jede Strategie
              im Hinblick auf Nützlichkeit und Anwendbarkeit (zwischen 1 und 10 Punkten).
            </p>
            <b-table class="p" :items="items" :fields="fields" striped hover>
              <template #cell(usefulness)="row">
                <label for="usefulness">
                  <input
                    id="usefulness"
                    type="number"
                    min="1"
                    max="10"
                    @input="inputHandler(row.field.key, row.index, $event.target.value)"
                  />
                </label>
              </template>
              <template #cell(applicability)="row">
                <label for="applicability">
                  <input
                    id="applicability"
                    type="number"
                    min="1"
                    max="10"
                    @input="inputHandler(row.field.key, row.index, $event.target.value)"
                  />
                </label>
              </template>
            </b-table>
          </div>
          <div v-else>
            <p class="p">Deine TOP 3 nützlichsten Strategien</p>
            <b-row v-for="(item, index) in highestScoresUsefulNess" :key="index">
              <b-col class="p">
                <h2>{{ item.strategy }}</h2>
              </b-col>
            </b-row>
            <p class="p">Deine TOP 3 anwendbarsten Strategien</p>
            <b-row v-for="(item, index) in highestScoresApplicability" :key="index">
              <b-col class="p">
                <h2>{{ item.strategy }}</h2>
              </b-col>
            </b-row>
          </div>
          <base-button v-if="completed" variant="primary" text="Nächstes Level" @click="handleNext" />
          <base-button
            v-else
            variant="primary"
            text="Zeige Ergebnisse"
            :disabled="nextBtnStatus"
            @click="handleMult"
          />
        </div>

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
          :disabled="nextBtnStatus"
          @click="handleCompleted"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level3StrategyAssessment',
  components: {
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      next: false,
      highestScoresUsefulNess: null,
      highestScoresApplicability: null,
      results: [],
      answers: [
        {
          usefulness: '',
          applicability: '',
          strategy: 'Erfolgserlebnisse schaffen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Positive Einstellung / positiv denken',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Sich Ziele setzen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Spaß haben',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Durststrecken ertragen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Hindernisse beseitigen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Sich Belohnungen in Aussicht stellen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Arbeitsschritte visualisieren',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Sinn in Tätigkeit suchen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Arbeit als Herausforderung sehen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Konsequenzen verdeutlichen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Teilaufgaben terminieren',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Mit leichten Aufgaben beginnen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Zeitpläne',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Kontrolle durch andere Personen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Erinnerungshinweise',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Gründe für Aufschieben laut aussprechen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Positives Gefühl der Erledigung vorstellen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Überblick verschaffen',
        },
        {
          usefulness: '',
          applicability: '',
          strategy: 'Pro/Kontra für Aufschieben samme',
        },
      ],
      fields: [
        {
          key: 'strategy',
          label: 'Strategie',
        },
        {
          key: 'usefulness',
          label: 'Nützlichkeit',
        },
        {
          key: 'applicability',
          label: 'Anwendbarkeit',
        },
      ],
      items: [
        { strategy: 'Erfolgserlebnisse schaffen' },
        { strategy: 'Positive Einstellung / positiv denken' },
        { strategy: 'Sich Ziele setzen' },
        { strategy: 'Spaß haben' },
        { strategy: 'Durststrecken ertragen' },
        { strategy: 'Hindernisse beseitigen' },
        { strategy: 'Sich Belohnungen in Aussicht stellen' },
        { strategy: 'Arbeitsschritte visualisieren' },
        { strategy: 'Sinn in Tätigkeit suchen' },
        { strategy: 'Arbeit als Herausforderung sehen' },
        { strategy: 'Konsequenzen verdeutlichen' },
        { strategy: 'Teilaufgaben terminieren' },
        { strategy: 'Mit leichten Aufgaben beginnen' },
        { strategy: 'Zeitpläne' },
        { strategy: 'Kontrolle durch andere Personen' },
        { strategy: 'Erinnerungshinweise' },
        { strategy: 'Gründe für Aufschieben laut aussprechen' },
        { strategy: 'Positives Gefühl der Erledigung vorstellen' },
        { strategy: 'Überblick verschaffen' },
        { strategy: 'Pro/Kontra für Aufschieben sammeln' },
      ],
    }
  },
  computed: {
    nextBtnStatus() {
      let isNull = true
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      this.answers.forEach(item => {
        isNull = !(item.usefulness && item.applicability)
      })
      return isNull
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    inputHandler(row, index, value) {
      // save user's answers
      if (row === 'usefulness') this.answers[index].usefulness = value
      if (row === 'applicability') this.answers[index].applicability = value

      // construct results
      this.results[index] = {
        strategy: this.answers[index].strategy,
        usefulness: parseInt(this.answers[index].usefulness, 10) % 11,
        applicability: parseInt(this.answers[index].applicability, 10) % 11,
      }

      // The three strategies with the highest scores
      this.highestScoresUsefulNess = this.results.sort((a, b) => b.usefulness - a.usefulness)
        .slice(0, 3)

      this.highestScoresApplicability = this.results.sort((a, b) => b.applicability - a.applicability)
        .slice(0, 3)
    },
    handleCompleted() {
      this.completed = true
      const answersNew = {
        answers: this.answers,
        time: this.seconds,
      }
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level3_4',
        data: answersNew,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/3/strategy-assessment/end')
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
