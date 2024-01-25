<template>
  <div class="stretched level3-reef">
    <img
      src="/images/level3/child-2.png"
      alt="Child 2"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 12rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Eigene Motive
      </h1>
      <div v-if="theoreticalContent">
        <h3 class="h1">
          Prokrastination
        </h3>
        <p class="p">
          Unter Prokrastination versteht man das Aufschieben bzw. Hinauszögern von zu erledigenden
          Arbeiten. Die Gründe dafür sind vielfältig und umfassen beispielsweise
          Unter-/Überforderung mit einer Aufgabe, Versagensangst oder Unlust. Neben der
          offensichtlichen Konsequenz fehlender Ergebnisse, kann Prokrastination auch mit einem
          schlechten Gewissen bzw. Unruhe einhergehen, da die betreffende Person weiß, dass sie
          ihren Pflichten nicht nachkommt. Darüber hinaus mündet ständiges Aufschieben irgendwann in
          Zeitdruck und die Aufgabe muss unter Stress erledigt werden, wodurch das Arbeiten
          fehleranfälliger wird.
        </p>
        <h3 class="h1">
          Motive
        </h3>
        <p class="p">
          Motive werden allgemein als überdauernde Dispositionen oder Eigenschaften verstanden, die
          das Verhalten und Erleben eines Menschen beeinflussen. Es wird davon ausgegangen, dass
          Motive relativ stabile Persönlichkeitsmerkmale sind. Es gibt Motive die den Menschen
          bewusst sind – andere wiederum nicht. Aus diesem Grund wird zwischen impliziten und
          expliziten Motiven differenziert.
        </p>
        <ul class="p">
          <li>
            Explizite Motive können kommuniziert werden. Es sind Motive, welche die Person sich
            aufgrund ihrer Erziehung, ihres Verhaltens und den sozialen Normen bewusst zuschreibt.
          </li>
          <li>
            Implizite Motive werden durch frühkindliche Erfahrungen geprägt, sie werden dem
            emotionalen, unbewussten und nicht sprachlichen Bereich zugeordnet.
          </li>
        </ul>
        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <div v-if="!completed">
          <p class="p">
            Bearbeite als Einstieg den folgenden Kurztest zu den verschiedenen
            Lebensmotiven, um dein individuelles Motivprofil zu erstellen und
            weniger/stärker ausgeprägte Grundbedürfnisse zu identifizieren.
            Setze ein Kreuz neben die Aussagen, die dich klar und eindeutig beschreiben.
          </p>
        </div>
        <div v-else>
          <p class="p">Hier siehst du nun die Auswertung deines persönlichen Lebensmotiv-Profils.
            Die Ergebnisse zeigen aber lediglich einen Trend hinsichtlich der denkbaren
            Motivausprägungen an, weshalb sie dir nur als Anhaltspunkt und nicht als endgültiges
            Ergebnis dienen sollten.
          </p>
          <p class="p">
            Dein Gesamtscore pro Kategorie bedeutet Folgendes:
          </p>
          <ul>
            <li>
              Wenn dein Gesamtscore <b>+2 oder +3</b> beträgt, fällst du unter die Kategorie <b>starkes
              Grundbedürfnis</b>.
            </li>
            <li>
              Wenn dein Gesamtscore <b>-2 oder -3</b> beträgt, fällst du unter die Kategorie <b>schwaches
              Grundbedürfnis</b>.
            </li>
            <li>
              Wenn den Gesamtscore <b>-1, 0 oder +1</b> beträgt, fällst du unter die Kategorie <b>durchschnittliches
              Grundbedürfnis</b>.
            </li>
          </ul>
        </div>

        <!-- <p class="description">
        Für jedes Lebensmotiv gilt:
      </p>
      <ul>
        <li>
          Wenn die Zahl in Zeile 9 <b>+2 oder +3</b> beträgt, fällst du unter die Kategorie <b>starkes Grundbedürfnis</b>.
        </li>
        <li>
          Wenn die Zahl in Zeile 9 <b>-2 oder -3</b> beträgt, fällst du unter die Kategorie <b>schwaches Grundbedürfnis</b>.
        </li>
        <li>
          Wenn die Zahl in Zeile 9 <b>-1, 0 oder +1</b> beträgt, fällst du unter die Kategorie <b>durchschnittliches Grundbedürfnis</b>.
        </li>
      </ul> -->

        <h1 class="h1">
          {{ dataObj1.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj1"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj2.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj2"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj3.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj3"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj4.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj4"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj5.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj5"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj6.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj6"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj7.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj7"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj8.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj8"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj9.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj9"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

        <h1 class="h1">
          {{ dataObj10.title }}
        </h1>
        <EigeneMotive
          :data-obj="dataObj10"
          :answers="answers"
          :completed="completed"
          @change="updateValue"
          @input="updateInput"
        />

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

import EigeneMotive from '@/components/levels/level3/EigeneMotive.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level3Motives',
  components: {
    EigeneMotive,
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      next: false,
      answers: {
        macht: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        autonomie: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        neugier: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        anerkennung: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        ordnung: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        sparen: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        beziehungen: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        status: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        sport: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
        emotionale_ruhe: {
          strongNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          weakNeed: {
            choice1: null,
            choice2: null,
            choice3: null,
          },
          feedbacks: {
            sumHigh: null,
            sumLow: null,
            total: null,
          },
        },
      },
      dataObj1: {
        name: 'macht',
        title: 'Macht',
        questions: [
          {
            question: null,
            choices: [
              'Man sagt mir nach, selbst die Dinge in die Hand zu nehmen',
              'Ich strebe nach der Führungsrolle',
              'Ich neige dazu, anderen ungefragt Ratschläge zu geben',
            ],
          },
          {
            question: null,
            choices: [
              'Ich meide Herausforderungen',
              'Es widerstrebt mir, anderen zu sagen, was sie tun sollen',
              'Man sagt mir nach, dass ich entspannt bin',
            ],
          },
        ],
        feedbacks: [
          'Starkes Machtbedürfnisse: ',
          'Schwaches Machtbedürfnisse: ',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj2: {
        name: 'autonomie',
        title: 'Autonomie',
        questions: [
          {
            question: '',
            choices: [
              'Mir ist es sehr wichtig selbstsicher zu sein',
              'Man sagt mir nach, eigensinnig zu sein',
              'Man sagt mir nach, etwas so zu machen, wie ich es will',
            ],
          },
          {
            question: '',
            choices: [
              'Ich schätze „gefühlsbetonte“ Erfahrungen',
              'Ich bin stärker ein Nonkonformist als die meisten Menschen, die ich kenne',
              'Es ist mir wohl dabei, mich auf die Unterstützung der Familie oder des Ehepartners verlassen zu können',
            ],
          },
        ],
        feedbacks: [
          'Starkes Autonomiebedürfnis Score:',
          'Schwaches Autonomiebedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj3: {
        name: 'neugier',
        title: 'Neugier',
        questions: [
          {
            question: '',
            choices: [
              'Man sagt mir nach, analytisch oder nachdenklich zu sein',
              'Meine Ideen sind mir wichtig',
              'Man sagt mir nach, ein Denker zu sein',
            ],
          },
          {
            question: '',
            choices: [
              'Man sagt mir nach, ein praktisch veranlagter Mensch zu sein',
              'Ich denke nur selten über Theorien nach, die nicht umgesetzt werden können',
              'Die Schule fand ich langweilig',
            ],
          },
        ],
        feedbacks: [
          'Starkes Neugierbedürfnis Score:',
          'Schwaches Neugierbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj4: {
        name: 'anerkennung',
        title: 'Anerkennung',
        questions: [
          {
            question: '',
            choices: [
              'Ich bin merklich unsicherer als die meisten Menschen',
              'Ich habe mehr Schwierigkeiten als die meisten Menschen, mit Kritik umzugehen',
              'Man sagt mir nach, unbeständig in Bezug auf meine Leistungen zu sein',
            ],
          },
          {
            question: '',
            choices: [
              'Ich bin selbstsicher',
              'Man sagt mir nach, in Bezug auf meine Leistungen beständig zu sein',
              'Ich habe eine „Kann-Ich“ - Einstellung',
            ],
          },
        ],
        feedbacks: [
          'Starkes Anerkennungsbedürfnis Score:',
          'Schwaches Anerkennungsbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj5: {
        name: 'ordnung',
        title: 'Ordnung',
        questions: [
          {
            question: '',
            choices: [
              'Man sagt mir nach, wohlorganisiert zu sein',
              'Man sagt mir nach, sauber und ordentlich zu sein',
              'Ich habe Schwierigkeiten , mich an Veränderungen anzupassen',
            ],
          },
          {
            question: '',
            choices: [
              'Man sagt mir nach, desorganisiert zu sein',
              'Ich mache gern etwas spontan',
              'Ich neige dazu, mehrere Eisen gleichzeitig im Feuer zu haben',
            ],
          },
        ],
        feedbacks: [
          'Starkes Ordnungsbedürfnis Score:',
          'Schwaches Ordnungsbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj6: {
        name: 'sparen',
        title: 'Sparen',
        questions: [
          {
            question: '',
            choices: [
              'Ich repariere lieber etwas, als dass ich etwas als Ersatz kaufe',
              'Ich mag es überhaupt nicht, etwas wegzuwerfen',
              'Man sagt mir nach, dass ich sparsam bin',
            ],
          },
          {
            question: 'Schwaches Sparbedürfnis',
            choices: [
              'Die Dinge, die ich besitze, sind mir gleichgültig',
              'Ich gebe oft mehr aus, als mir im Monat zu Verfügung steht.',
              'Man sagt mir nach, dass ich verschwenderisch bin',
            ],
          },
        ],
        feedbacks: [
          'Starkes Sparbedürfnis Score:',
          'Schwaches Sparbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj7: {
        name: 'beziehungen',
        title: 'Beziehungen',
        questions: [
          {
            question: '',
            choices: [
              'Ich bin gut darin, soziale Beziehungen aufzubauen',
              'Man sagt mir nach, dass ich freundlich bin',
              'Ich habe ein aktiveres soziales Leben als die meisten Leute, die ich kenne',
            ],
          },
          {
            question: '',
            choices: [
              'Man sagt mir nach, dass ich unnahbar bin',
              'Ich verbringe viel Zeit alleine (mehr, als die meisten Leute, die ich kenne)',
              'Ich mache nicht gerne „Small-Talk“',
            ],
          },
        ],
        feedbacks: [
          'Starkes Beziehungsbedürfnis Score:',
          'Schwaches Beziehungsbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj8: {
        name: 'status',
        title: 'Status',
        questions: [
          {
            question: '',
            choices: [
              'Man sagt mir nach, dass ich ein fröhlicher Mensch bin',
              'Ich kaufe mir meist die prestigeträchtigsten Dinge, die ich mir leisten kann',
              'Ich bin von reichen Menschen beeindruckt',
            ],
          },
          {
            question: '',
            choices: [
              'Ich lasse mich von reichen Menschen nicht beeindrucken',
              'Ich bin ein zwangloser Mensch',
              'Ich mache mir nicht viel daraus, was andere Menschen von mir denken',
            ],
          },
        ],
        feedbacks: [
          'Starkes Statusbedürfnis Score:',
          'Schwaches Statusbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj9: {
        name: 'sport',
        title: 'Sport',
        questions: [
          {
            question: '',
            choices: [
              'Sport zu treiben, ist wichtig dafür, dass ich glücklich bin',
              'Ich war beim Sport schon zweimal Mitglied einer Mannschaft',
              'Fit zu sein ist mir sehr wichtig',
            ],
          },
          {
            question: '',
            choices: [
              'Man sagt mir nach, körperlich faul zu sein',
              'Ich neige dazu, körperlich anstrengende Aktivitäten zu vermeiden',
              'Ich bin nicht fit',
            ],
          },
        ],
        feedbacks: [
          'Starkes Sportbedürfnis Score:',
          'Schwaches Sportbedürfnis Score:',
          'Dein Gesamtscore: ',
        ],
      },
      dataObj10: {
        name: 'emotionale_ruhe',
        title: 'Emotionale Ruhe',
        questions: [
          {
            question: '',
            choices: [
              'Ich bin jemand, der sich ständig Sorgen macht',
              'Ich habe Panikattacken',
              'Ich habe eine geringe Schmerztoleranz',
            ],
          },
          {
            question: '',
            choices: [
              'Man sagt mir nach, dass ich unter Druck gelassen bleibe',
              'Ich bin ein Draufgänger',
              'Man sagt mir nach, dass ich bei Gefahren mutig bin',
            ],
          },
        ],
        feedbacks: [
          'Starke emotionale Ruhe Score:',
          'Schwache emotionale Ruhe Score:',
          'Dein Gesamtscore: ',
        ],
      },
    }
  },
  computed: {},
  watch: {
    answers: {
      handler(obj) {
        for (let i = 0; i < Object.keys(obj).length; i++) {
          const item = Object.entries(obj)[i]
          const strong = obj[item[0]][Object.keys(obj[item[0]])[0]].choice1
            + obj[item[0]][Object.keys(obj[item[0]])[0]].choice2
            + obj[item[0]][Object.keys(obj[item[0]])[0]].choice3
          const weak = obj[item[0]][Object.keys(obj[item[0]])[1]].choice1
            + obj[item[0]][Object.keys(obj[item[0]])[1]].choice2
            + obj[item[0]][Object.keys(obj[item[0]])[1]].choice3

          // set values
          obj[item[0]][Object.keys(obj[item[0]])[2]].sumHigh = strong
          obj[item[0]][Object.keys(obj[item[0]])[2]].sumLow = weak
          obj[item[0]][Object.keys(obj[item[0]])[2]].total = strong - weak
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
    updateValue(name, questionIndex, choiceIndex, value) {
      if (value) {
        this.answers[name][Object.keys(this.answers[name])[questionIndex]][`choice${choiceIndex + 1}`] = 1
      } else {
        this.answers[name][Object.keys(this.answers[name])[questionIndex]][`choice${choiceIndex + 1}`] = 0
      }
    },
    // eslint-disable-next-line no-unused-vars
    updateInput(name, index, value) {
      // const fb = this.answers[name].feedbacks
      // fb[Object.keys(fb)[index]] = value
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level3_2',
        data: this.answers,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/3/motives/end')
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
