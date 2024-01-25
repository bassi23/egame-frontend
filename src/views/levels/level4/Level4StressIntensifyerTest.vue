<template>
  <div class="stretched level4-cave-of-stress">
    <img
      src="/images/level4/cera.png"
      alt="Cera"
      class="character character_position_top character_animation_top"
      style="width: 10rem; height: auto"
    >
    <div class="box boxContainer">
      <div v-if="theoreticalContent">
        <h3 class="h1">
          Stressverstärkertest
        </h3>
        <p class="p">
          Jeder Mensch hat individuell unterschiedliche Gedanken, die dazu führen, dass er Stress
          erlebt oder dass sich der Stress noch verschlimmert. Im Folgenden sind die sogenannten „5
          Antreiber“ aufgelistet. Wenn man seinen eigenen Antreiber kennt, hilft das dabei, den
          dadurch entstehenden Stress zu reduzieren.
        </p>
        <p class="p">
          Stressverstärkender Gedanke: "Sei perfekt!"
        </p>
        <ul class="p">
          <li>
            Der Stressverstärker "Sei Perfekt" besteht in einem überhöhten Wunsch nach Erfolg,
            Selbstbestätigung und Anerkennung durch andere. Daraus kann sich schnell Angst vor
            Misserfolg, Versagen und eigenen Fehlern bilden.
          </li>
          <li>
            Gegenmittel: Fehler als Lernchance sehen, Achtsamkeit mit sich selbst üben
          </li>
        </ul>
        <p class="p">
          Stressverstärkender Gedanke: "Sei beliebt!"
        </p>
        <ul class="p">
          <li>
            Der Stressverstärker "Sei beliebt" zeichnet sich durch einen überhöhten Wunsch nach
            Zugehörigkeit, Angenommen werden und Liebe aus. Damit verbunden ist eine ausgeprägte
            Angst vor Ablehnung, Kritik und Zurückweisung durch andere.
          </li>
          <li>
            Gegenmittel: Nein-sagen trainieren, eigene Grenzen kommunizieren, Kritik akzeptieren
            lernen
          </li>
        </ul>
        <p class="p">
          Stressverstärkender Gedanke: "Sei stark"
        </p>
        <ul class="p">
          <li>
            Der Stressverstärker "Sei stark" zeichnet sich durch einen überhöhten Wunsch nach
            persönlicher Unabhängigkeit und Selbstbestimmung aus. Damit kann eine ausgeprägte Angst
            vor Abhängigkeit von anderen, eigener Hilfebedürftigkeit und Schwäche verbunden sein.
          </li>
          <li>
            Gegenmittel: Schwächen eingestehen, Hilfe annehmen
          </li>
        </ul>
        <p class="p">
          Stressverstärkender Gedanke: "Sei auf der Hut"
        </p>
        <ul class="p">
          <li>
            Der Stressverstärker "Sei auf der Hut" besteht aus dem überhöhten Wunsch nach Sicherheit
            und Kontrolle. Damit kann eine ausgeprägte Angst vor Kontrollverlust, Fehleinschätzungen
            und Scheu vor Risiko verbunden sein.
          </li>
          <li>
            Gegenmittel: Gelassenheit üben, sich klar machen, dass es keine 100%ige Sicherheit gibt
          </li>
        </ul>
        <p class="p">
          Stressverstärkender Gedanke:" Ich kann nicht (mehr)
        </p>
        <ul class="p">
          <li>
            Der Stressverstärker "Ich kann nicht (mehr)" besteht in einem überhöhten Wunsch nach
            eigenem Wohlbefinden und einem bequemen Leben. Damit kann eine ausgeprägte Angst vor
            unangenehmen Gefühlen und vor Anstrengungen, sowie eine geringe Frustrationstoleranz
            verbunden sein.
          </li>
          <li>
            Gegenmittel: Selbstbewusstsein steigern, auf eigene Fähigkeiten vertrauen
          </li>
        </ul>
        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>
      <div v-else>
        <div v-if="!next">
          <p class="p">
            Bearbeite bitte die folgende Liste. Das Ziel besteht darin herauszufinden, welche
            Gedanken
            bei dir den Stress weiter verschärfen, statt ihn zu entschärfen.
            Du hast die Möglichkeit zu wählen, ob die jeweiligen Gedanken häufig, manchmal oder nie
            auftreten. Markiere Entsprechendes bitte.
            Die Auswertung erfolgt, nachdem du den Fragebogen vollständig bearbeitet hast.
          </p>

          <table>
            <thead>
            <tr>
              <th>&nbsp;</th>
              <th>{{ stressIntensifier.title }}</th>
              <th
                v-for="(choice, choiceIndex) in stressIntensifier.choices"
                :key="`choice_` + choiceIndex"
              >
                {{ choice }}
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="(option, optionIndex) in stressIntensifier.data"
              :key="`option_` + optionIndex"
            >
              <th>{{ }}</th>
              <th class="p">{{ option.question }}</th>
              <td colspan="3">
                <rating-form
                  :group-index="optionIndex"
                  :data-list="option.options"
                  @choose-rating="updateRating"
                />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- <text-area
          :id="experience.id"
          :label="experience.label"
          @input="handleText"
        /> -->
        <div
          v-else
          class=""
        >
          <h3>Dein persönliches Verstärkerprofil:</h3>
          <b-row>
            <b-col>
              <h3>Sei perfekt</h3>
              <h3>Sei beliebt</h3>
              <h3>Sei Stark</h3>
              <h3>Sei auf der Hut</h3>
              <h3>Ich kann nicht</h3>
            </b-col>
            <b-col>
              <h3>{{ results.perfect }}</h3>
              <h3>{{ results.popular }}</h3>
              <h3>{{ results.strong }}</h3>
              <h3>{{ results.careful }}</h3>
              <h3>{{ results.cant }}</h3>
            </b-col>
          </b-row>
          <!-- TODO: Balkendiagramm einfügen, Auswertung aus der Theorie anzeigen s. Dokumente -->
          <!-- <table
            style="width: 100%;"
            border="1"
            cellpadding="5"
          >
            <tbody>
              <tr>
                <td>Addiere die Punkte zu den Gedanken 6, 8, 12, 13, 23</td>
                <td>Wert 1: {{ results.perfect }}</td>
              </tr>
              <tr>
                <td>Addiere die Punkte zu den Gedanken 11, 14, 16, 17, 19</td>
                <td>Wert 2: {{ results.popular }}</td>
              </tr>
              <tr>
                <td>Addiere die Punkte zu den Gedanken 1, 15, 18, 22, 24</td>
                <td>Wert 3: {{ results.strong }}</td>
              </tr>
              <tr>
                <td>Addiere die Punkte zu den Gedanken 3, 10, 20, 21, 25</td>
                <td>Wert 4: {{ results.careful }}</td>
              </tr>
              <tr>
                <td>Addiere die Punkte zu den Gedanken 2, 4, 5, 7, 9</td>
                <td>Wert 5: {{ results.cant }}</td>
              </tr>
            </tbody>
          </table>-->
          <h3>Erklärung:</h3>
          <p>
            <b>Sei perfekt!</b>
            Der Stressverstärker besteht in einem überhöhtem Wunsch nach Erfolg.
            Selbstbestätigung & Anerkennung durch andere über Leistung.
            Damit verbunden ist eine ausgeprägte Angst vor Misserfolg, Versagen und eigenen Fehlern.
          </p>
          <p>
            <b>Sei beliebt!</b>
            Der Verstärker besteht in einem überhöhtem Wunsch nach Zugehörigkeit, Angenommensein und
            Liebe.
            Damit verbunden ist eine ausgeprägte Angst vor Ablehnung, Kritik und Zurückweisung durch
            andere.
          </p>
          <p>
            <b>Sei stark!</b>
            Der Stressverstärker besteht in einem überhöhtem Wunsch nach persönlicher Unabhängigkeit
            und Selbstbestimmung.
            Damit verbunden ist eine ausgeprägte Angst vor Abhängigkeit von anderen, eigener
            Hilfebedürftigkeit und Schwäche.
          </p>
          <p>
            <b>Sei auf der Hut!</b>
            Der Stressverstärker besteht in einem überhöhtem Wunsch nach Sicherheit und Kontrolle.
            Damit verbunden ist eine ausgeprägte Angst vor Kontrollverlust, Fehleinschätzungen und
            Scheu vor Risiko.
          </p>
          <p>
            <b>Ich kann nicht!</b>
            Der Verstärker besteht in einem überhöhtem Wunsch nach eigenem Wohlbefinden und einem
            bequemen Leben.
            Damit verbunden ist eine ausgeprägte Angst vor unangenehmen Gefühlen und vor Anstrengung
            sowie Einstellungen der eigenen Hilflosigkeit und eine geringe Frustrationstoleranz.
          </p>
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
        :disabled="false"
        @click="handleCompleted"
      /> -->
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
// import TextArea from '@/components/ui/TextArea.vue'
import RatingForm from '@/components/RatingForm.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level4StressIntensifyerTest',
  components: {
    BaseButton,
    // TextArea,
    RatingForm,
  },
  mixins: [timeMixin],
  data() {
    return {
      completed: false,
      next: false,
      // maxScore: null,
      results: {
        perfect: null,
        popular: null,
        strong: null,
        careful: null,
        cant: null,
      },
      theoreticalContent: true,
      answers: [
        {
          question: 'Am liebsten mache ich alles selbst.',
          selected: null,
        },
        {
          question: 'Ich halte das nicht durch.',
          selected: null,
        },
        {
          question: 'Es ist entsetzlich, wenn etwas nicht so läuft, wie ich will oder geplant habe.',
          selected: null,
        },
        {
          question: 'Ich werde versagen.',
          selected: null,
        },
        {
          question: 'Das schaffe ich nie.',
          selected: null,
        },
        {
          question: 'Es ist nicht akzeptabel, wenn ich eine Arbeit nicht schaffe oder einen Termin nicht einhalte.',
          selected: null,
        },
        {
          question: 'Ich kann diesen Druck einfach nicht aushalten.',
          selected: null,
        },
        {
          question: 'Ich muss immer etwas für mein Studium tun.',
          selected: null,
        },
        {
          question: 'Probleme und Schwierigkeiten sind einfach nur fürchterlich.',
          selected: null,
        },
        {
          question: 'Es ist wichtig, dass ich alles unter Kontrolle habe.',
          selected: null,
        },
        {
          question: 'Ich will die anderen nicht enttäuschen.',
          selected: null,
        },
        {
          question: 'Es gibt nichts Schlimmeres, als Fehler zu machen.',
          selected: null,
        },
        {
          question: 'Auf mich muss 100%iger Verlass sein.',
          selected: null,
        },
        {
          question: 'Es ist schrecklich, wenn andere mir böse sind.',
          selected: null,
        },
        {
          question: 'Starke Menschen brauchen keine Hilfe. ',
          selected: null,
        },
        {
          question: 'Ich will mit allen Leuten gut auskommen.',
          selected: null,
        },
        {
          question: 'Es ist schlimm, wenn andere mich kritisieren.',
          selected: null,
        },
        {
          question: 'Wenn ich mich auf andere verlasse, bin ich verlassen.',
          selected: null,
        },
        {
          question: 'Es ist wichtig, dass mich alle mögen.',
          selected: null,
        },
        {
          question: 'Bei Entscheidungen muss ich mir 100%ig sicher sein.',
          selected: null,
        },
        {
          question: 'Ich muss ständig daran denken, was alles passieren könnte.',
          selected: null,
        },
        {
          question: 'Ohne mich geht es nicht.',
          selected: null,
        },
        {
          question: 'Ich muss immer alles richtig machen.',
          selected: null,
        },
        {
          question: 'Es ist schrecklich, auf andere angewiesen zu sein.',
          selected: null,
        },
        {
          question: 'Es ist ganz fürchterlich, wenn ich nicht weiß, was auf mich zukommt.',
          selected: null,
        },
      ],
      stressIntensifier: {
        title: 'Dieser Gedanke kommt in meinem Kopf … vor:',
        choices: ['häufig', 'manchmal', 'nie'],
        data: [
          {
            question: 'Am liebsten mache ich alles selbst.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich halte das nicht durch.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist entsetzlich, wenn etwas nicht so läuft, wie ich will oder geplant habe.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich werde versagen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Das schaffe ich nie.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist nicht akzeptabel, wenn ich eine Arbeit nicht schaffe oder einen Termin nicht einhalte.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich kann diesen Druck einfach nicht aushalten.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich muss immer etwas für mein Studium tun.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Probleme und Schwierigkeiten sind einfach nur fürchterlich.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist wichtig, dass ich alles unter Kontrolle habe.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich will die anderen nicht enttäuschen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es gibt nichts Schlimmeres, als Fehler zu machen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Auf mich muss 100%iger Verlass sein.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist schrecklich, wenn andere mir böse sind.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Starke Menschen brauchen keine Hilfe.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich will mit allen Leuten gut auskommen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist schlimm, wenn andere mich kritisieren.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Wenn ich mich auf andere verlasse, bin ich verlassen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist wichtig, dass mich alle mögen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Bei Entscheidungen muss ich mir 100%ig sicher sein.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich muss ständig daran denken, was alles passieren könnte.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ohne mich geht es nicht.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Ich muss immer alles richtig machen.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist schrecklich, auf andere angewiesen zu sein.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
          {
            question: 'Es ist ganz fürchterlich, wenn ich nicht weiß, was auf mich zukommt.',
            options: [
              {
                text: 'häufig',
                value: 2,
              },
              {
                text: 'manchmal',
                value: 1,
              },
              {
                text: 'nie',
                value: 0,
              },
            ],
          },
        ],
        // experience: '',
      },
      // experience: {
      //   id: 'experience',
      //   label: 'Auch in der Schule können solche Stressverstärker auftreten und eventuell das Lernen erschweren. In welchen Situationen ist dies wahrscheinlich oder hast du vielleicht selbst schon einmal erlebt (z.B. im Rahmen eines Praktikums)? Wie sollte man dem entgegenwirken (als Lehrperson)?',
      // },
    }
  },
  watch: {
    answers: {
      handler(data) {
        this.results.perfect = data[5].selected
          + data[7].selected
          + data[11].selected
          + data[12].selected
          + data[22].selected
        this.results.popular = data[10].selected
          + data[13].selected
          + data[15].selected
          + data[16].selected
          + data[18].selected
        this.results.strong = data[0].selected
          + data[14].selected
          + data[17].selected
          + data[21].selected
          + data[23].selected
        this.results.careful = data[2].selected
          + data[9].selected
          + data[19].selected
          + data[20].selected
          + data[24].selected
        this.results.cant = data[1].selected
          + data[3].selected
          + data[4].selected
          + data[6].selected
          + data[8].selected

        // // calculate max value from results
        // const resultsList = []
        // Object.entries(this.results).map(item => resultsList.push(item[1]))
        // this.maxScore = Math.max(...resultsList)
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
    // handleText(id, value) {
    //   if (id === this.experience.id) {
    //     this.answers.experience = value
    //   }
    // },
    handleCompleted() {
      this.completed = true
      const answersNew = {
        answers: this.answers,
        results: this.results,
        time: this.seconds,
      }
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level4_3',
        data: answersNew,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/4/stress-intensifyer-test/end')
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
