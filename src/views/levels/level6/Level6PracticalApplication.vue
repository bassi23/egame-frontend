<template>
  <div class="stretched level6-coral-tower">
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_top character_animation_top"
      style="width: 12rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Kausalattribution in der Lehrerrolle
      </h1>

      <p class="description">
        <strong>Bitte versetze dich in folgende Situation:</strong> Du übernimmst heute zum ersten
        Mal die Klasse deiner schwangeren Kollegin.
        Du bist vorbereitet und hast einen festen Plan, den du in der Doppelstunde durchbringen
        möchtest.
        Als du in die Klasse kommst, merkst du, dass diese ziemlich unruhig ist.
        Du denkst dir vorerst nichts dabei und willst mit dem Unterricht beginnen.
        Du fängst an und stellst fest, dass die unruhige Stimmung der Klasse anhält.
        Es ist besonders schwierig den Unterricht ordentlich fortzusetzen.
      </p>

      <div v-if="!next">
        <p class="description">
          Was tust du? Wie fühlst du dich? Schreibe zu jeder Frage mindestens 3 Punkte auf.
        </p>

        <b-row style="margin-top: 2rem;">
          <b-col cols="6">
            <h3 class="h1">
              Was tust du?
            </h3>
            <div
              v-for="(item, doIndex) in item1"
              :key="doIndex"
            >
              <text-area
                :id="item.id"
                :label="item.label"
                @input="handleText"
              />
            </div>
          </b-col>
          <b-col cols="6">
            <h3 class="h1">
              Wie fühlst du dich?
            </h3>
            <div
              v-for="(item, feelIndex) in item2"
              :key="feelIndex"
            >
              <text-area
                :id="item.id"
                :label="item.label"
                @input="handleText"
              />
            </div>
          </b-col>
        </b-row>

        <p class="p">
          <br>
          Du unternimmst mehrere Versuche die Klasse zu beruhigen.
          Deine Maßnahmen haben nicht funktioniert.
          Die Klasse ist immer noch unruhig und du hast Probleme deinen Unterricht fortzusetzen.
        </p>

        <p class="p">
          Im Folgenden findest du kurze Fragen zur Situation.
          Du sollst dich nun in diese Situation nochmals hineinversetzen und anschließend jeweils
          die Antwortalternative auswählen,
          die am ehesten auf dich persönlich zutrifft. Dabei stehen vier Möglichkeiten zur Auswahl.
          Beachte, dass es dabei keine „richtigen“ oder „falschen“ Antworten gibt! Diese Gedanken
          beschreiben nur ganz persönliche Meinungen und sind keine Tatsachen! (die Auflösung deiner
          Antworten findest du auf der letzten Seite)
        </p>

        <h3 class="p">
          Bearbeite die Fragen zügig und spontan!
          (Markiere deine Antworten und schau am Ende nach, bei welchem Attributionsstil ihr die
          meisten Antworten markiert habt)
        </h3>

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

        <!-- <p>
          <b>Wie kann man Misserfolgsmotivation in Erfolgsmotivation transformieren?</b>
        </p>
        <ul>
          <li>Realistische Zielsetzung angemessen an momentanes Leistungsniveau</li>
          <li>Günstige Ursachenzuschreibung von Erfolg oder Misserfolg</li>
          <li>Günstige Selbstbewertung</li>
        </ul>

        <p>
          <b>… der Unterricht geht weiter</b>
        </p>

        <p>
          In der 5-Minuten-Pause warst du im Lehrerzimmer und hast dich mit deinen Kollegen/Kolleginnen unterhalten.
          Du hast herausgefunden, dass die schlechte Stimmung deiner Klasse wohl durch die Rückgabe einer Klassenarbeit während der vorangegangenen Stunde verursacht wurde.
          Die Klassenarbeit ist sehr schlecht ausgefallen, so schlecht, dass selbst die für gewöhnlich guten Schüler/Innen (SuS) schlecht abgeschnitten haben.
          Du denkst das Thema anzusprechen kann dir helfen deine Klasse wieder zu beruhigen und auch dabei deinen Unterricht nun ungestört fortzusetzen.
          Du erinnerst dich an dein Wissen über Attributionsstile und willst deinen SuS das Wissen vermitteln,
          damit sie nicht jedes Mal bei einer vermasselten Klassenarbeit in eine negative Stimmung abrutschen.
        </p>
        <p>Wie würdest du die Sache angehen?</p>

        <text-area
          id="mood_feedback"
          label=""
          @input="handleText"
        /> -->
        <base-button
          v-if="!completed"
          variant="primary"
          text="Zeige Ergebnisse"
          :disabled="false"
          @click="handleCompleted"
        />
        <base-button
          v-if="completed"
          variant="primary"
          text="Zeige Ergebnisse"
          @click="handleResults"
        />
      </div>

      <div v-else>
        <p class="p">
          <b>Mögliche Maßnahmen</b>
        </p>
        <p class="p">
          <b>Was kann die Lehrperson tun um SuS zu Erfolg zu verhelfen?</b>
        </p>
        <p class="p">
          <b>Unterrichtsgestaltung:</b>
        </p>
        <ul class="p">
          <li>Klarheit und Transparenz im Unterricht schaffen: Lernstrategien vermitteln,
            Lernstrategien als Werkzeug zur Planung und Zielsetzung, auch nach der Selbstreflexion
          </li>
          <li>Ein angemessenes Schwierigkeitsniveau bei den Hausaufgaben wählen: Meidung zu schwerer
            oder zu leichter Aufgaben, da diese die Misserfolgsattribuierung begünstigen
          </li>
          <li>Selbstwertgünstige Attribution fördern: Erfolg internal, Misserfolg variabel (und
            damit für die nächste Leistungsüberprüfung veränderbar)
          </li>
          <li>Dabei besonders zeigen, dass Unklarheiten ein normaler Teil des Lernprozesses sind und
            Fragen den Unterricht positiv vorantreiben können: Unklarheiten als wichtiger Teil der
            Selbstreflexion
          </li>
          <li>Mit den Schülerinnen und Schülern angemessen kommunizieren: Transparenz bei der
            Notengebung und bei Klassenarbeiten  bessere Reflexion & Attribution der Schüler
          </li>
        </ul>

        <p class="p">
          <b>Du attribuierst in diesem Fall:</b>
        </p>

        <!-- Feedback -->
        <div v-if="internalStable">
          <h1 class="h1">
            Internal-Stabil
          </h1>
        </div>

        <div v-if="externalStable">
          <h1 class="h1">
            External-Stabil
          </h1>
        </div>

        <div v-if="internalVariable">
          <h1 class="h1">
            Internal-Variabel
          </h1>
        </div>

        <div v-if="externalVariable">
          <h1 class="h1">
            External-Variabel
          </h1>
        </div>

        <em class="p">
          Zu den Gütekriterien kann keine Aussage getroffen werden,
          weshalb das Ergebnis nur mit Vorsicht zu interpretieren ist und als Denkanstoß zum eigenen
          Interpretationsstil gelten soll
        </em>
        <base-button
          v-if="next"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import TextArea from '@/components/ui/TextArea.vue'
import MultipleChoice from '@/components/ui/MultipleChoice.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level6PracticalApplication',
  components: {
    BaseButton,
    TextArea,
    MultipleChoice,
  },
  mixins: [timeMixin],
  data() {
    return {
      completed: false,
      next: false,
      answers: {
        doing_1: '',
        doing_2: '',
        doing_3: '',
        doing_4: '',
        feeling_1: '',
        feeling_2: '',
        feeling_3: '',
        feeling_4: '',
        multipleChoice1: null,
        multipleChoice2: null,
        multipleChoice3: null,
        multipleChoice4: null,
        multipleChoice5: null,
        // mood_feedback: '',
      },
      item1: [
        {
          id: 'do_1',
          label: '',
        },
        {
          id: 'do_2',
          label: '',
        },
        {
          id: 'do_3',
          label: '',
        },
        {
          id: 'do_4',
          label: '',
        },
      ],
      item2: [
        {
          id: 'feel_1',
          label: '',
        },
        {
          id: 'feel_2',
          label: '',
        },
        {
          id: 'feel_3',
          label: '',
        },
        {
          id: 'feel_4',
          label: '',
        },
      ],
      multipleChoice1: {
        name: 'multiple_choice_1',
        question: 'Woran kann es liegen, dass die Klasse sich nicht beruhigen ließ?',
        rightChoice: -1,
        choices: [
          'Meine angewandten Methoden, reichten nicht aus.',
          'Diese Klasse lässt sich von niemandem leicht beruhigen.',
          'Ich war heute schon sehr müde und nicht so durchsetzungsfähig wie sonst. ',
          'Die Klasse war heute unruhiger als erwartet.',
        ],
      },
      multipleChoice2: {
        name: 'multiple_choice_2',
        question: 'Auf die einzelnen Schüler und ihre Probleme konnte nicht eingegangen werden, weil…',
        rightChoice: -1,
        choices: [
          'mich die Situation überfordert hat.',
          'weil die Schüler allesamt außergewöhnlich aufgebracht waren. ',
          'es zu viele Schüler mit Hilfebedarf gab. ',
          'weil ich dazu nicht genügend Zeit hatte.',
        ],
      },
      multipleChoice3: {
        name: 'multiple_choice_3',
        question: 'Wenn diese Situation das nächste Mal auftritt...',
        rightChoice: -1,
        choices: [
          'ist der Hintergrund der Unruhe für die erfolgreiche Unterrichtsgestaltung wichtig. ',
          'werde ich besser vorbereitet sein und die Klasse beruhigen können. ',
          'wird es wahrscheinlich ähnlich ablaufen. ',
          'kann auch eine bessere Vorbereitung nichts an der Situation verändern.',
        ],
      },
      multipleChoice4: {
        name: 'multiple_choice_4',
        question: 'Liegt die Ursache dafür, dass es nicht geklappt hat eher an dir oder an anderen?',
        rightChoice: -1,
        choices: [
          'An mir',
          'Überwiegend an mir',
          'Ein bisschen an mir',
          'Nur an anderen',
        ],
      },
      multipleChoice5: {
        name: 'multiple_choice_5',
        question: 'Wird der Hauptgrund für das vorliegende Problem auch in Zukunft wieder wichtig sein, wenn du eine Klasse beruhigen musst?',
        rightChoice: -1,
        choices: [
          'Sehr wichtig',
          'Ziemlich wichtig',
          'Ein bisschen wichtig',
          'Gar nicht wichtig',
        ],
      },
    }
  },
  computed: {
    internalStable() {
      return this.answers.multipleChoice1 === 0
        && this.answers.multipleChoice2 === 0
        && this.answers.multipleChoice3 === 2

        && (this.answers.multipleChoice4 === 0
          || this.answers.multipleChoice4 === 1)

        && (this.answers.multipleChoice5 === 0
          || this.answers.multipleChoice5 === 1)
    },
    externalStable() {
      return this.answers.multipleChoice1 === 1
        && this.answers.multipleChoice2 === 2
        && this.answers.multipleChoice3 === 3

        && (this.answers.multipleChoice4 === 2
          || this.answers.multipleChoice4 === 3)

        && (this.answers.multipleChoice5 === 0
          || this.answers.multipleChoice5 === 1)
    },
    internalVariable() {
      return this.answers.multipleChoice1 === 2
        && this.answers.multipleChoice2 === 3
        && this.answers.multipleChoice3 === 1

        && (this.answers.multipleChoice4 === 0
          || this.answers.multipleChoice4 === 1)

        && (this.answers.multipleChoice5 === 2
          || this.answers.multipleChoice5 === 3)
    },
    externalVariable() {
      return this.answers.multipleChoice1 === 3
        && this.answers.multipleChoice2 === 1
        && this.answers.multipleChoice3 === 0

        && (this.answers.multipleChoice4 === 2
          || this.answers.multipleChoice4 === 3)

        && (this.answers.multipleChoice5 === 2
          || this.answers.multipleChoice5 === 3)
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    handleText(id, val) {
      if (id === this.item1[0].id) {
        this.answers.doing_1 = val
      }
      if (id === this.item1[1].id) {
        this.answers.doing_2 = val
      }
      if (id === this.item1[2].id) {
        this.answers.doing_3 = val
      }
      if (id === this.item1[3].id) {
        this.answers.doing_4 = val
      }
      if (id === this.item2[0].id) {
        this.answers.feeling_1 = val
      }
      if (id === this.item2[1].id) {
        this.answers.feeling_2 = val
      }
      if (id === this.item2[2].id) {
        this.answers.feeling_3 = val
      }
      if (id === this.item2[3].id) {
        this.answers.feeling_4 = val
      }
      // if (id === 'mood_feedback') {
      //   this.answers.mood_feedback = val
      // }
    },
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
        level: 'level6_4',
        data: this.answers,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/6/practical-application/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
