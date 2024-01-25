<template>
  <div class="stretched level1-endless-ocean">
    <img
      src="/images/level1/frogfish.png"
      alt="Frogfish"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 18rem; height: auto"
    >

    <div class="box container">
      <!-- Goal orientation test -->
      <h1 class="heading">
        Zielorientierung
      </h1>
      <div
        v-if="theoreticalContent"
      >
        <p class="p">
          Zielorientierung bezeichnet eine Präferenz für eine bestimmte Art von Zielen in Lern- und Leistungskontexten und kann grob in zwei verschiedene Kategorien unterschieden werden:
        </p>
        <ul class="p">
          <li>
            1. Lernzielorientierung: Das Ziel ist, die eigenen Fähigkeiten zu erweitern
          </li>
          <li>
            2. Leistungszielorientierung: Das Ziel ist, gut ausgeprägte Fähigkeiten zu demonstrieren und schlecht ausgeprägte Fähigkeiten zu verbergen
          </li>
        </ul>
        <p class="p">
          Die Leistungszielorientierung lässt sich unterscheiden in
        </p>
        <ul class="p">
          <li>
            1. Annäherungs- Leistungszielorientierung: Hohe Fähigkeiten demonstrieren
          </li>
          <li>
            2. Vermeidungs-Leistungszielorientierung: Mangelnde Fähigkeiten zu verbergen
          </li>
          <li>
            3. Arbeitsvermeidung: Möglichst wenig Arbeit zu investieren.
          </li>
        </ul>
        <div class="image">
          <img
            src="/images/level1/figure1.png"
            alt="Figure"
            width="700"
          >
        </div>
        <br>
        <p class="p">
          Zusammenfassend geht eine hohe Lernzielorientierung kurz- und langfristig mit positiven lern- und leistungsbezogenen Emotionen und Kognitionen einher.
          Auch bestehen bei hoher Lernzielorientierung meist eine hohe intrinsische Motivation, welche zu guten Leistungen beiträgt.
          Annäherungs-Leistungszielorientierungen sind in der aktuellen Forschungslandschaft mit besseren Leistungen assoziiert.
          Vermeidungs-Leistungszielorientierung sowie Arbeitsvermeidung werden hingegen mit negativen lern- und leistungsbezogenen Erlebens- und Verhaltensweisen sowie schlechteren Leistungen assoziiert.
        </p>

        <base-button
          class="baseBtn"
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <!-- <p class="description">
        Bei dieser Aufgabe geht es um Dinge, die dir im Studium wichtig sind. Bitte lies die Fragen
        sorgfältig durch und versuche sie ehrlich zu beantworten. Es gibt keine falschen Antworten. Kreuze
        immer das Kästchen an, das am ehesten für dich zutrifft (lösche dazu einfach das Kästchen und setze
        ein “x”
      </p> -->

        <div
          v-if="!next"
        >
          <p class="p">Bei dieser Aufgabe geht es um Dinge, die dir im Studium
            wichtig  sind.  Bitte  lies die  Fragen sorgfältig  durch  und
            versuche sie ehrlich zu beantworten. Es gibt keine falschen
            Antworten. Kreuze immer das Kästchen an, das am ehesten für dich zutrifft.</p>
          <p class="p">
            Im Studium geht es mir darum, ...
          </p>
          <likert-scale-table
            :likert-scale="likertScale"
            @change="getLikertScale"
          />

        <!-- <div class="container">
          <p>So wertest du deine Antworten aus</p>
          <p>Für jedes Kreuz gibt es folgende Punkte:</p>
          <table>
            <tr>
              <td>stimmt gar nicht</td>
              <td>1</td>
            </tr>
            <tr>
              <td>stimmt eher nicht</td>
              <td>2</td>
            </tr>
            <tr>
              <td>weder/noch</td>
              <td>3</td>
            </tr>
            <tr>
              <td>stimmt eher</td>
              <td>4</td>
            </tr>
            <tr>
              <td>stimmt genau</td>
              <td>5</td>
            </tr>
          </table>
        </div> -->
        </div>

        <div
          v-else
        >
          <!-- <p>
          Nun kannst du für die Zielarten Lernziele, Annäherungs-Leistungsziele, Vermeidungs- Leistungsziele
          und Arbeitsvermeidung deine persönliche Punktzahl berechnen und in dein Profildiagramm eintragen.
        </p>
        <p>Auf der nächsten Seite erhältst du genauere Informationen zu den Zielarten.</p> -->
          <p class="p">
            Hier siehst du deine jeweilige Ausprägung der Zielorientierung. Je höher deine Punktzahl, desto höher deine Ausprägung. Hier erhältst du genauere Infos zu den Zielarten:“
          </p>
          <h4 class="d-flex justify-content-start">
            Lernziele
          </h4>
          <b-row class="d-flex justify-content-start">
            <b-col class="d-flex justify-content-start">
            <!-- <p class="lead">
              <strong>Addiere die Items 01, 05, 08, 12, 16, 20, 24 und 28:</strong>
            </p> -->
            </b-col>
            <b-col class="d-flex justify-content-end">
              <h4>{{ answers.learningObjectives }} / 40</h4>
            </b-col>
          </b-row>
          <h4 class="d-flex justify-content-start">
            Annäherungs-Leistungsziele
          </h4>
          <b-row class="d-flex justify-content-start">
            <b-col class="d-flex justify-content-start">
            <!-- <p class="lead">
              <strong>Addiere die Items 02, 09, 13, 17, 21, 25 und 29:</strong>
            </p> -->
            </b-col>
            <b-col class="d-flex justify-content-end">
              <h4>{{ answers.proximityPerformanceGoals }} / 35</h4>
            </b-col>
          </b-row>

          <h4 class="d-flex justify-content-start">
            Vermeidungs-Leistungsziele
          </h4>
          <b-row class="d-flex justify-content-start">
            <b-col class="d-flex justify-content-start">
            <!-- <p class="lead">
              <strong>Addiere die Items 03, 06, 10, 14, 18, 22, 26 und 30:</strong>
            </p> -->
            </b-col>
            <b-col class="d-flex justify-content-end">
              <h4>{{ answers.avoidancePerformanceGoals }} / 40</h4>
            </b-col>
          </b-row>

          <h4 class="d-flex justify-content-start">
            Arbeitsvermeidung
          </h4>
          <b-row class="d-flex justify-content-start">
            <b-col class="d-flex justify-content-start">
            <!-- <p class="lead">
              <strong>Addiere die Items 04, 07, 11, 15, 19, 23, 27 und 31:</strong>
            </p> -->
            </b-col>
            <b-col class="d-flex justify-content-end">
              <h4>{{ answers.avoidanceOfWork }} / 40</h4>
            </b-col>
          </b-row>

          <h4>Lernziele</h4>
          <p>
            Die Lernzielorientierung, auch mastery-goal orientation, bezeichnet die Ausrichtung seines
            Leistungsverhaltens auf den Zweck, weitere Fähigkeiten zu entwickeln. Es gibt zahlreiche
            Belege dafür, dass sich eine hohe Lernzielorientierung positiv auf universitäres Engagement
            und Leistungen auswirkt.
          </p>
          <h4>Annäherungs-Leistungsziele</h4>
          <p>
            Hierbei geht es vorrangig darum, hohe Fähigkeiten zu demonstrieren.
            Annäherungs-Leistungsziele können zumindest kurzfristig mit guten Leistungen einhergehen. Dies dürfte
            beispielsweise der Fall sein, wenn gleichzeitig hohe Lernziele vorliegen. Die langfristige,
            intensive Beschäftigung mit bestimmten Themen ist dabei aber nicht sichergestellt.
          </p>
          <h4>Vermeidungs-Leistungsziele</h4>
          <p>
            Hier steht das Ziel im Vordergrund, mangelnde Fähigkeiten zu verbergen, insbesondere um
            im Vergleich mit anderen nicht schlecht dazustehen. Vermeidungs-Leistungsziele wirken
            sich im Gegensatz zu den Annäherungs-Leistungszielen eher negativ auf Lernen und
            Leistung aus, vor allem wenn ein geringes Fähigkeitskonzept vorliegt. Kann möglicherweise
            ein Hinweis für motivationale Defizite sein.
          </p>
          <h4>Arbeitsvermeidung</h4>
          <p>
            Bei dieser Zielart geht es vorrangig darum, möglichst wenig Arbeit zu investieren. Je stärker
            die Tendenz zur Arbeitsvermeidung, desto schlechter – diese Orientierungsart stellt
            ebenfalls einen Indikator für motivationale Defizite dar und geht einher mit geringem
            Engagement und geringer Leistung.
          </p>
        </div>

        <base-button
          v-if="completed"
          class="baseBtn"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <base-button
          v-else
          class="baseBtn"
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
        :disabled="nextBtnStatus"
        @click="handleCompleted"
      /> -->
      </div>
    </div>

  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import LikertScaleTable from '@/components/levels/level1/LikertScaleTable.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level1Part4',
  components: {
    BaseButton,
    LikertScaleTable,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      next: false,
      answers: {
        learningObjectives: null,
        proximityPerformanceGoals: null,
        avoidancePerformanceGoals: null,
        avoidanceOfWork: null,
      },
      likertScale: {
        name: 'question_1',
        questions: [
          { id: 0, question: 'neue Ideen zu bekommen' },
          { id: 1, question: 'zu zeigen, dass ich bei einer Sache gut bin' },
          { id: 2, question: 'dass andere Studierende nicht denken, ich sei dumm' },
          { id: 3, question: 'keine schwierigen Prüfungen zu haben' },
          { id: 4, question: 'etwas Interessantes zu lernen' },
          { id: 5, question: 'mich nicht zu blamieren' },
          { id: 6, question: 'zu Hause keine Arbeiten erledigen zu müssen' },
          { id: 7, question: 'später knifflige Probleme lösen zu können' },
          { id: 8, question: 'Arbeiten besser zu schaffen als andere' },
          { id: 9, question: 'dass niemand merkt, wenn ich etwas nicht verstehe' },
          { id: 10, question: 'keine schwierigen Fragen oder Aufgaben lösen zu müssen' },
          { id: 11, question: 'komplizierte Inhalte zu verstehen' },
          { id: 12, question: 'bessere Noten oder Beurteilungen zu bekommen' },
          { id: 13, question: 'dass niemand denkt, ich sei weniger schlau als andere' },
          { id: 14, question: 'nicht so schwer zu arbeiten' },
          { id: 15, question: 'dass das Gelernte für mich Sinn ergibt' },
          { id: 16, question: 'dass andere denken, dass ich klug bin' },
          { id: 17, question: 'zu verbergen, wenn ich weniger weiß als andere' },
          { id: 18, question: 'dass die Arbeit leicht ist' },
          { id: 19, question: 'zum Nachdenken angeregt zu werden' },
          { id: 20, question: 'zu zeigen,dass ich die Inhalte beherrsche' },
          { id: 21, question: 'keine falschen Antworten auf Fragen der Dozierenden zu geben' },
          { id: 22, question: 'aufwendige Aufgaben nicht selber erledigen zu können' },
          { id: 23, question: 'so viel wie möglich zu lernen' },
          { id: 24, question: 'dass ich was kann und weiß es auch zu zeigen' },
          { id: 25, question: 'nicht durch dumme Fragen aufzufallen' },
          { id: 26, question: 'mit wenig Arbeit durchs Studium zu kommen' },
          { id: 27, question: 'ein tiefes Verständnis für die Inhalte zu erwerben' },
          { id: 28, question: 'dass die anderen merken,wenn ich in Prüfungen gut abschneide' },
          { id: 29, question: 'nicht zu zeigen, wenn mir eine Aufgabe schwerer fällt als den anderen' },
          { id: 30, question: 'den Arbeitsaufwand stets gering zu halten' },
        ],
        choices: ['stimmt gar nicht', 'stimmt eher nicht', 'weder noch', 'stimmt eher', 'stimmt genau'],
      },
      likertScaleItems: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        question6: null,
        question7: null,
        question8: null,
        question9: null,
        question10: null,
        question11: null,
        question12: null,
        question13: null,
        question14: null,
        question15: null,
        question16: null,
        question17: null,
        question18: null,
        question19: null,
        question20: null,
        question21: null,
        question22: null,
        question23: null,
        question24: null,
        question25: null,
        question26: null,
        question27: null,
        question28: null,
        question29: null,
        question30: null,
        question31: null,
      },
    }
  },
  computed: {
    username() {
      return this.$store.getters.getUsername
    },
    nextBtnStatus() {
      // if (this.answers.learningObjectives !== null
      // && this.answers.proximityPerformanceGoals !== null
      // && this.answers.avoidancePerformanceGoals !== null
      // && this.answers.avoidanceOfWork !== null) {
      //   return false
      // }
      // return true

      return false
    },
  },
  watch: {
    likertScaleItems: {
      handler(item) {
        this.answers.learningObjectives = item[`question${1}`]
        + item[`question${5}`]
        + item[`question${8}`]
        + item[`question${12}`]
        + item[`question${16}`]
        + item[`question${20}`]
        + item[`question${24}`]
        + item[`question${28}`]
        this.answers.proximityPerformanceGoals = item[`question${2}`]
        + item[`question${9}`]
        + item[`question${13}`]
        + item[`question${17}`]
        + item[`question${21}`]
        + item[`question${25}`]
        + item[`question${29}`]
        this.answers.avoidancePerformanceGoals = item[`question${3}`]
        + item[`question${6}`]
        + item[`question${10}`]
        + item[`question${14}`]
        + item[`question${18}`]
        + item[`question${22}`]
        + item[`question${26}`]
        + item[`question${30}`]
        this.answers.avoidanceOfWork = item[`question${4}`]
        + item[`question${7}`]
        + item[`question${11}`]
        + item[`question${15}`]
        + item[`question${19}`]
        + item[`question${23}`]
        + item[`question${27}`]
        + item[`question${31}`]
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
    getLikertScale(question, option) {
      this.likertScaleItems[`question${question + 1}`] = option + 1
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      // const answersParsed = JSON.parse(JSON.stringify(this.answers))
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level1_4',
        data: this.answers,
      })
    },
    handleResults() {
      this.next = true
    },
    handleNext() {
      this.$router.push('/level/1/4/end')
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

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

ul {
  list-style: none;
}

.baseBtn {
  text-align: center;
}
</style>
