<template>
  <div class="stretched level6-coral-tower">
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_top character_animation_top"
      style="width: 10rem; height:auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Bezugsnormorientierung
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Bezugsnorm meint einen bestimmten Standard, mit dem man ein vorliegendes Resultat vergleicht, wenn man es als Leistung bewerten will. Solche Vergleichsstandards können aus qualitativ verschiedenen Bezugssystemen stammen (z.B. Vergleich mit anderen, mit sich selbst oder mit Sachanforderungen) und deshalb unterschiedliche Aspekte desselben Resultats hervorheben oder ausblenden.
        </p>
        <ol class="p">
          <li>
            Die soziale Bezugsnorm
            <ul class="p">
              <li>
                Beim Vergleich mit anderen wird eine <b><u>soziale Bezugsnorm</u></b> verwandt.
                «Gut» bedeutet hier überdurchschnittlich, «schlecht» unterdurchschnittlich.
                In heterogenen Gruppen hebt diese interindividuelle Perspektive Leistungsunterschiede zwischen Personen besonders hervor.
                Allerdings bleibt ein gemeinsamer Lernzuwachs aller unsichtbar.
              </li>
            </ul>
          </li>
          <li>
            Die individuelle Bezugsnorm
            <ul>
              <li>
                Ein erzieltes Resultat mit dem verglichen, was diese Person zuvor geschafft hat.
                «Gut» ist ein Anstieg, «schlecht» ein Abfall.
                Diese intraindividuelle Perspektive hebt die Variabilität und Beeinflussbarkeit von Leistung hervor und erwies sich in Lernsituationen als motivationsförderlich.
                Allerdings bleiben Fähigkeitsunterschiede unerkannt
              </li>
            </ul>
          </li>
          <li>
            Die sachliche Bezugsnorm
            <ul class="p">
              <li>
                Ein Resultat wird mit einem Standard verglichen, der in der Sache selbst liegt.
                Diese Vergleichsperspektive macht sichtbar, welche inhaltlich definierte Kompetenzgrade jemand beherrscht.
                Allerdings bleibt bei einem rein deskriptiven Standard unsichtbar, ob die Erreichung des jeweiligen Kriteriums für die Person eine anstrengende Kompetenzsteigerung war.
                Zudem bleibt ohne den Vergleich mit anderen Lernern unerkannt, ob die Person in diesem Bereich vielleicht besondere Lernfähigkeit besitzt.
              </li>
            </ul>
          </li>
        </ol>

        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <div v-if="!next">
          <p class="description">
            Bewerte folgende Aussagen. Es gibt keine richtigen oder falschen Antworten.
          </p>
          <p class="p">
            <b>Skala:</b><br>
            (-3) völlig unzutreffend<br>
            (-2) weitgehend unzutreffend<br>
            (-1) eher unzutreffend<br>
            (+1) eher zutreffend als unzutreffend<br>
            (+2) weitgehend zutreffend<br>
            (+3) völlig zutreffend<br>
          </p>

          <b-row
            v-for="(option, optionIndex) in evaluateScenarios"
            :key="`option_` + optionIndex"
          >
            <div class="question">
              <b-col cols="7">
                {{ option.question }}
              </b-col>
            </div>
            <b-col cols="4">
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
          <div v-if="totalScore >= 9 && totalScore <= 27">
            <h3>Soziale BZN</h3>
            <h3>Du hast {{ totalScore }} Punkte erreicht</h3>
            <p>
              Du stellst öfter den Bezug in der Leistungsbreite einer Lerngruppe her.
              Alle Leistungen werden miteinander verglichen und in eine Rangfolge gebracht.
              Der Leistungsstand eines Schülers wird damit abhängig von der zufälligen Zugehörigkeit zu einer Lerngruppe.
              Dies ist nicht zwingend schlecht, jedoch sollte die individuelle Bezugsnorm priorisiert werden.
            </p>
          </div>

          <div v-if="totalScore >= 28 && totalScore <= 35">
            <h3>Gemischte Bezugsnorm</h3>
            <h3>Du hast {{ totalScore }} Punkte erreicht</h3>
            <p>
              Du verwendest eine gute Mischung aus sozialer und individueller Bezugsnorm.
              Zum einen vergleichst du die Leistung jedes einzelnen mit der Gesamtgruppe,
              zum anderen beziehst du aber den individuellen Lernfortschritt der Schüler*innen ein.
            </p>
          </div>

          <div v-if="totalScore >= 36 && totalScore <= 54">
            <h3>Individuelle BZN: Du vergleichst die erbrachten Leistungen</h3>
            <h3>Du hast {{ totalScore }} Punkte erreicht</h3>
            <p>
              eines Kindes mit seinem früheren Leistungsstand und misst die Leistung am persönlichen Lernfortschritt.
              Damit förderst du Schüler*innen, ohne dass sie sich an den Leistungen anderer Personen orientieren müssen.
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
  name: 'Level6BenchmarkOrientation',
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
      totalScore: null,
      answers: [
        {
          question: 'Ehe ich von einer „Leistungsverbesserung“ sprechen kann, muss der Schüler wiederholt Leistungen zeigen, die über dem Klassendurchschnitt liegen',
          selected: null,
        },
        {
          question: 'Alles in allem könnte ich eher genaue Angaben über das generelle Leistungsniveau eines Schülers machen als genaue Angaben darüber, ob er dem Unterricht besser oder schlechter folgen kann als vor 1 Monat',
          selected: null,
        },
        {
          question: 'Wenn ich die Leistung eines Schülers beurteilen will, so vergleiche ich sein erzieltes Ergebnis nicht so sehr mit entsprechenden Ergebnissen seiner Klassenkameraden, sondern stärker mit Ergebnissen, die dieser Schüler zuvor bei vergleichbaren Aufgaben erzielt hat',
          selected: null,
        },
        {
          question: 'Ich kann gewöhnlich vom einzelnen Schüler ziemlich sicher sagen, auf welchem Platz er in der Leistungsverteilung einer Klasse steht',
          selected: null,
        },
        {
          question: 'Wenn ich von einer „guten Leistung“ spreche, so meine ich ein Ergebnis, das deutlich über dem Klassendurchschnitt liegt',
          selected: null,
        },
        {
          question: 'Wenn ich von einer „schlechten Leistung“ spreche, so meine ich ein Ergebnis, das unter dem vorherigen Resultat des jeweiligen Schülers liegt',
          selected: null,
        },
        {
          question: 'Ehe ich von einer „Leistungsverschlechterung“ sprechen kann, muss der Schüler wiederholt Leistungen zeigen, die unter dem Klassendurchschnitt liegen',
          selected: null,
        },
        {
          question: 'Wenn ich von einer „guten Leistung“ spreche, so meine ich damit ein Ergebnis, das über dem vorherigen Resultat des jeweiligen Schülers liegt',
          selected: null,
        },
        {
          question: 'Wenn ich von einer „schlechten Leistung“ spreche, so meine ich damit ein Ergebnis, das deutlich unter dem Klassendurchschnitt liegt',
          selected: null,
        },
      ],
      evaluateScenarios: [
        {
          question: 'Ehe ich von einer „Leistungsverbesserung“ sprechen kann, muss der Schüler wiederholt Leistungen zeigen, die über dem Klassendurchschnitt liegen',
          options: [
            { text: '-3', value: '6' },
            { text: '-2', value: '5' },
            { text: '-1', value: '4' },
            { text: '1', value: '3' },
            { text: '2', value: '2' },
            { text: '3', value: '1' },
          ],
        },
        {
          question: 'Alles in allem könnte ich eher genaue Angaben über das generelle Leistungsniveau eines Schülers machen als genaue Angaben darüber, ob er dem Unterricht besser oder schlechter folgen kann als vor 1 Monat',
          options: [
            { text: '-3', value: '6' },
            { text: '-2', value: '5' },
            { text: '-1', value: '4' },
            { text: '1', value: '3' },
            { text: '2', value: '2' },
            { text: '3', value: '1' },
          ],
        },
        {
          question: 'Wenn ich die Leistung eines Schülers beurteilen will, so vergleiche ich sein erzieltes Ergebnis nicht so sehr mit entsprechenden Ergebnissen seiner Klassenkameraden, sondern stärker mit Ergebnissen, die dieser Schüler zuvor bei vergleichbaren Aufgaben erzielt hat',
          options: [
            { text: '-3', value: '1' },
            { text: '-2', value: '2' },
            { text: '-1', value: '3' },
            { text: '1', value: '4' },
            { text: '2', value: '5' },
            { text: '3', value: '6' },
          ],
        },
        {
          question: 'Ich kann gewöhnlich vom einzelnen Schüler ziemlich sicher sagen, auf welchem Platz er in der Leistungsverteilung einer Klasse steht',
          options: [
            { text: '-3', value: '6' },
            { text: '-2', value: '5' },
            { text: '-1', value: '4' },
            { text: '1', value: '3' },
            { text: '2', value: '2' },
            { text: '3', value: '1' },
          ],
        },
        {
          question: 'Wenn ich von einer „guten Leistung“ spreche, so meine ich ein Ergebnis, das deutlich über dem Klassendurchschnitt liegt',
          options: [
            { text: '-3', value: '6' },
            { text: '-2', value: '5' },
            { text: '-1', value: '4' },
            { text: '1', value: '3' },
            { text: '2', value: '2' },
            { text: '3', value: '1' },
          ],
        },
        {
          question: 'Wenn ich von einer „schlechten Leistung“ spreche, so meine ich ein Ergebnis, das unter dem vorherigen Resultat des jeweiligen Schülers liegt',
          options: [
            { text: '-3', value: '1' },
            { text: '-2', value: '2' },
            { text: '-1', value: '3' },
            { text: '1', value: '4' },
            { text: '2', value: '5' },
            { text: '3', value: '6' },
          ],
        },
        {
          question: 'Ehe ich von einer „Leistungsverschlechterung“ sprechen kann, muss der Schüler wiederholt Leistungen zeigen, die unter dem Klassendurchschnitt liegen',
          options: [
            { text: '-3', value: '6' },
            { text: '-2', value: '5' },
            { text: '-1', value: '4' },
            { text: '1', value: '3' },
            { text: '2', value: '2' },
            { text: '3', value: '1' },
          ],
        },
        {
          question: 'Wenn ich von einer „guten Leistung“ spreche, so meine ich damit ein Ergebnis, das über dem vorherigen Resultat des jeweiligen Schülers liegt',
          options: [
            { text: '-3', value: '1' },
            { text: '-2', value: '2' },
            { text: '-1', value: '3' },
            { text: '1', value: '4' },
            { text: '2', value: '5' },
            { text: '3', value: '6' },
          ],
        },
        {
          question: 'Wenn ich von einer „schlechten Leistung“ spreche, so meine ich damit ein Ergebnis, das deutlich unter dem Klassendurchschnitt liegt',
          options: [
            { text: '-3', value: '6' },
            { text: '-2', value: '5' },
            { text: '-1', value: '4' },
            { text: '1', value: '3' },
            { text: '2', value: '2' },
            { text: '3', value: '1' },
          ],
        },
      ],
    }
  },
  watch: {
    answers: {
      handler(data) {
        const score = []
        for (let i = 0; i < this.answers.length; i++) {
          score.push(Number(data[i].selected))
        }
        this.totalScore = score.reduce((partialSum, a) => partialSum + a, 0)
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
        time: this.seconds,
      }
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level6_3',
        data: answersNew,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/6/benchmark-orientation/end')
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
