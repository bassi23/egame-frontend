<template>
  <div class="stretched level2-ship-wreck">
    <img
      src="/images/level2/butler.png"
      alt="Butler"
      class="character character_position_top character_animation_top"
      style="width: 13rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Wochenplan Erstellen
      </h1>

      <div v-if="theoreticalContent">
        <h3 class="h1">
          Zeitplanung
        </h3>
        <p class="p">
          Zeitpläne helfen bei deinem Zeitmanagement und können verschiedene Zeithorizonte betreffen:
        </p>
        <ul class="p">
          <li>
            die kurzfristige Planung betrifft die nächsten Tage
          </li>
          <li>
            die mittelfristige Planung bezieht sich auf die kommenden Wochen und Monate
          </li>
          <li>
            die langfristige Planung dreht sich um mehrere Jahre
          </li>
        </ul>
        <p class="p">
          Kurzfristige Pläne sind sehr detailliert und genau terminiert, während langfristige Zeitpläne nur grobe Ziele enthalten und weniger handlungsnah sind. Ein Zeitplan bringt verschiedene Vorteile mit sich; er dient als roter Faden von Handlungen und kann als Entscheidungs- und Orientierungshilfe herangezogen werden. Nachteile eines Zeitplans können sein, dass die festgehaltenen Termine und Aufgaben Druck verursachen und Konsequenzen aufzeigen, die mit dem Nichterfüllen der Aufgaben einhergehen. Außerdem bedarf es einiger Disziplin, um einen aufgestellten Zeitplan auch einhalten zu können.
        </p>

        <h3 class="h1">
          Zwei wichtige Grundsätze
        </h3>
        <p class="p">
          1 Schriftlich planen = mehr Selbstmotivation und besserer Überblick
        </p>
        <p class="p">
          2. Flexibel bleiben! Es gibt immer unvorhergesehene Dinge, die den Plan beeinträchtigen und die planmäßige Umsetzung der Aufgaben behindern.
        </p>
        <h3 class="h1">
          Wochen- und Tagesplanung
        </h3>
        <p class="p">
          Es ist sinnvoll, zuerst einen Wochenplan zu erstellen, nach dem sich ein daraufhin erstellter Tagesplan richten kann.
        </p>
        <strong><u>1. Schritt: Wochenplan</u></strong>
        <ul class="p">
          <li>
            Eintragen von regelmäßigen und festen Terminen
          </li>
          <li>
            Eintragen von Deadlines, die für die mittelfristige Planung wichtig sind.
          </li>
          <li>
            Vorausschauend planen: Was muss ich diese Woche noch tun, damit die nächsten 2-3 Wochen alles gut läuft?
          </li>
        </ul>
        <strong><u>2. Schritt: Tagesplanung</u></strong>
        <ul class="p">
          <li>
            Erstellen einer Tätigkeitsliste.
          </li>
          <li>
            Für jede Tätigkeit Tag und Uhrzeit festlegen.
          </li>
          <li>
            Lücken lassen, Prioritäten festlegen, Freizeit einplanen.
          </li>
          <li>
            Abhaken was erledigt wurde, Unerledigtes übertragen.
          </li>
        </ul>

        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <p class="description">
          Erstelle im Folgenden einen Plan für die nächsten 2 Wochen. Nutze dabei die gelernten Strategien des
          Zeitmanagements. Sammle zuerst alle Aufgaben, die für die nächste Woche anstehen (Hausarbeiten, Lernen,
          Termine etc. - wenn es hilfreich für dich ist, beziehe auch deine Freizeitaktivitäten mit ein).
          Trage diese in die Liste unten ein und gib an, welche Priorität die jeweilige Aufgabe hat (ABC-Analyse).
          Schätze dann die ungefähre Dauer für die Erledigung der Aufgabe. Gib an, wann du mit welcher Aufgabe
          beginnst und wann du welche Aufgabe fertigstellen willst.
        </p>

        <editable-table
          v-model="weeklyPlan"
          :fields="weeklyPlanFields"
          :editable="true"
        />

        <p class="description">
          Überlege nun, was du in den nächsten 2 Wochen erreichen willst und was du zur Zielerreichung tun kannst.
          Trage im Wochenplan ein, was du an welchem Tag machen willst. Denke dabei auch an Pufferzeiten (d.h. nur
          60% der Zeit verplanen).
        </p>

        <editable-table
          v-model="achieve"
          :fields="achieveFields"
          :editable="false"
        />

        <p class="description">
          Erstelle nun mit Hilfe deines Wochenplans einen Handlungsplan für eine Woche. Trage dort ein, was du wann
          zu welcher Zeit machen willst. Vergiss hier bitte auf keinen Fall, Pufferzeiten und auch Freizeitaktivitäten wie
          Sport, Zeit für Hobby, Familie usw. einzutragen. Am Ende sollte dir ein Plan vorliegen, mit Hilfe dessen du
          dein (Teil-) Ziel erreichen kannst.
          Falls es Abweichungen zwischen deiner realen und idealen Zeitaufteilung gibt, kannst du auch mit Hilfe des
          Plans erste Schritte einplanen, um sich deiner idealen Zeiteinteilung anzunähern. Falls du z.B. mehr Sport
          machen möchtest, kannst du dies auch in deinem Handlungsplan berücksichtigen und dafür mehr Zeit als bisher
          einplanen. Du kannst natürlich noch weitere Zeiten ergänzen.
        </p>

        <p>
          Woche vom
          <label for="week-from">
            <input
              id="week-from"
              v-model="weekFrom"
              type="text"
            >
          </label>
          bis
          <label for="week-to">
            <input
              id="week-to"
              v-model="weekTo"
              type="text"
            >
          </label>
        </p>

        <p>
          Arbeitsschwerpunkte:
          <label for="main-focus">
            <input
              id="main-focus"
              v-model="mainFocus"
              type="text"
            >
          </label>
        </p>

        <editable-table
          v-model="actionPlan"
          :fields="actionPlanFields"
          :editable="false"
        />

        <base-button
          variant="primary"
          text="Nächstes Level"
          :disabled="false"
          @click="handleCompleted"
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
          text="Next"
          :disabled="false"
          @click="handleCompleted"
        /> -->
      <!-- :disabled="weekFrom === '' && weekTo === '' && mainFocus === ''" -->
      </div>
    </div>
  </div>
</template>

<script>
import EditableTable from '@/components/EditableTable.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level2WeeklySchedule',
  components: {
    EditableTable,
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      weekFrom: '',
      weekTo: '',
      mainFocus: '',
      answers: {},
      weeklyPlanFields: [
        { key: 'index', label: '', type: 'index' },
        { key: 'task', label: 'Aufgabe', type: 'text' },
        { key: 'priority', label: 'Priorität (A,B,C)', type: 'text' },
        { key: 'timeRequirement', label: 'Zeitbedarf', type: 'text' },
        { key: 'begin', label: 'Beginn', type: 'text' },
        { key: 'finishedUntil', label: 'Fertig bis', type: 'text' },
        { key: 'isDone', label: 'Erledigt?', type: 'checkbox' },
        { key: 'edit', label: '', type: 'edit' },
      ],
      weeklyPlan: [
        {
          task: '', priority: '', timeRequirement: '', begin: '', finishedUntil: '', isDone: false,
        },
        {
          task: '', priority: '', timeRequirement: '', begin: '', finishedUntil: '', isDone: false,
        },
        {
          task: '', priority: '', timeRequirement: '', begin: '', finishedUntil: '', isDone: false,
        },
        {
          task: '', priority: '', timeRequirement: '', begin: '', finishedUntil: '', isDone: false,
        },
        {
          task: '', priority: '', timeRequirement: '', begin: '', finishedUntil: '', isDone: false,
        },
      ],
      achieveFields: [
        { key: 'day', label: '', type: 'title' },
        { key: 'week1', label: 'Woche 1', type: 'text' },
        { key: 'week2', label: 'Woche 2', type: 'text' },
      ],
      achieve: [
        { day: 'Montag', week1: '', week2: '' },
        { day: 'Montag', week1: '', week2: '' },
        { day: 'Dienstag', week1: '', week2: '' },
        { day: 'Dienstag', week1: '', week2: '' },
        { day: 'Mittwoch', week1: '', week2: '' },
        { day: 'Mittwoch', week1: '', week2: '' },
        { day: 'Donnerstag', week1: '', week2: '' },
        { day: 'Donnerstag', week1: '', week2: '' },
        { day: 'Freitag', week1: '', week2: '' },
        { day: 'Freitag', week1: '', week2: '' },
        { day: 'Samstag', week1: '', week2: '' },
        { day: 'Samstag', week1: '', week2: '' },
        { day: 'Sonntag', week1: '', week2: '' },
        { day: 'Sonntag', week1: '', week2: '' },
      ],
      actionPlanFields: [
        { key: 'time', label: 'Zeit', type: 'title' },
        { key: 'monday', label: 'Montag', type: 'text' },
        { key: 'tuesday', label: 'Dienstag', type: 'text' },
        { key: 'wednesday', label: 'Mittwoch', type: 'text' },
        { key: 'thursday', label: 'Donnerstag', type: 'text' },
        { key: 'friday', label: 'Freitag', type: 'text' },
        { key: 'saturday', label: 'Samstag', type: 'text' },
        { key: 'sunday', label: 'Sonntag', type: 'text' },
      ],
      actionPlan: [
        {
          time: '07:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '08:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '09:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '10:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '11:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '12:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '13:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '14:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '15:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '16:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '17:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '18:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '19:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '20:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '21:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
        },
        {
          time: '22:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '',
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
    updateAnswers() {
      this.answers.weeklyPlan = this.weeklyPlan
      this.answers.achieve = this.achieve
      this.answers.weekFrom = this.weekFrom
      this.answers.weekTo = this.weekTo
      this.answers.mainFocus = this.mainFocus
      this.answers.actionPlan = this.actionPlan
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateAnswers()
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level2_4',
        data: this.answers,
      })
      this.handleNext()
    },
    handleNext() {
      this.$router.push('/level/2/weekly-schedule/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
