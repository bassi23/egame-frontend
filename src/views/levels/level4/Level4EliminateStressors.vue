<template>
  <div class="stretched level4-cave-of-stress">
    <img
      src="/images/level4/cera.png"
      alt="Cera"
      class="character character_position_top character_animation_top"
      style="width: 10rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Wähle deine Stressoren
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Wissenschaftlich unterscheidet man zwei Arten von „Stress“:
        </p>
        <ul class="p">
          <li>
            Distress = negativer und hemmender Stress
          </li>
          <li>
            Eustress = positiver und aktivierender Stress.
          </li>
        </ul>
        <p class="p">
          Ob aber nun eine Situation als stressig empfunden wird oder nicht kommt auch viel auf die
          Wahrnehmung und die Interpretation der Situation seitens der Person an. So wird im ersten
          Schritt die Situation anhand ihrer Umwelt- und Personenmerkmale bewertet: „Ist die
          Situation irrelevant, ungünstig oder günstig für mein Wohlergehen?“. Falls die Situation
          ungünstig ist, wird im nächsten Schritt bewertet, ob man die Möglichkeiten hat,
          erfolgreich aus der Stresssituation herauszugehen. Stress ist also immer eine Interaktion
          aus den äußeren Umständen und den personeninternen Bewertungen dieser.
        </p>
        <h3 class="h1">
          Das SORK-Modell
        </h3>
        <p class="p">
          Stress ist eine Abweichung vom psychophysischen Gleichgewicht, die nicht durch verfügbare
          Routinen kompensiert werden kann. Zur Erklärung der Entstehung von Stress und seiner
          Auswirkungen wird oft das SORK-Modell nach Kanfer herangezogen. Es beschreibt vier Ebenen
          von Stress:
        </p>
        <ol class="p">
          <li>
            <b>S</b>tressor: Der Stressor ist die stressauslösende Bedingung. Dies kann z. B.
            Zeitdruck oder eine bevorstehende Prüfung sein.
          </li>
          <li>
            <b>O</b>rganismus: Der Organismus ist die Person selbst. Sie vermittelt zwischen
            Stressor und Reaktion durch eine individuelle Bewertung des Stressors.
          </li>
          <li>
            <b>R</b>eaktion: Die Stressreaktion kann in verschiedene Bereiche untergliedert werden.
            Es gibt die gedankliche Reaktion, die emotionale Reaktion, die vegetativ-hormonelle
            Reaktion, die muskuläre Reaktion und die Reaktion auf der Ebene des Verhalten.
          </li>
          <li>
            <b>K</b>onsequenz: Mit Konsequenzen sind langfristige Folgen oder Schädigungen durch
            langanhaltenden Stress gemeint wie z. B. Gereiztheit, Schlafstörungen,
            Leistungseinbußen, Burn-Out.
          </li>
        </ol>
        <img
          class="image"
          src="/images/level4/figure1.png"
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
        <div v-if="!completed">
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            html-field="html"
            stacked
          />

          <base-button
            class="baseBtn"
            variant="primary"
            text="Weiter"
            @click="handleCompleted"
          />
        </div>
        <div v-else>
          <h2 class="h2">
            Du hast die folgenden Stressoren gewählt!</h2>
          <div v-for="(item, index) in selected" :key="index">
            <div v-html="getHTML(item)" />
          </div>
          <base-button
            class="baseBtn"
            variant="primary"
            text="Nächstes Level"
            @click="handleNext"
          />
        </div>
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
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level4EliminateStressors',
  components: {
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      selected: [],
      answers: {
        selected: null,
      },
      options: [
        {
          item: 'ringing-phone',
          name: 'Ringing phone',
          html: '<img src="/images/level4/stressors/ringing-phone.jpg" alt="image" width="300"><p>Klingelndes Telefon</p>',
        },
        {
          item: 'noise',
          name: 'Noise from the street/aircrafts/trains',
          html: '<img src="/images/level4/stressors/noise-from-the-street.jpg" alt="image" width="300"><p>Lärm von draußen</p>',
        },
        {
          item: 'voice/speech/music',
          name: 'Voices/irrelevant speech/noises from inside the house/music',
          html: '<img src="/images/level4/stressors/noises-from-inside-the-house.jpg" alt="image" width="300"><p>Laute Stimmen oder Musik</p>',
        },
        {
          item: 'text',
          name: 'Texts (blinking mobile phone)/notifications',
          html: '<img src="/images/level4/stressors/text.jpg" alt="image" width="300"><p>Benachrichtigungen auf dem Smartphone</p>',
        },
        {
          item: 'finantial-stressor',
          name: 'Financial stressors',
          html: '<img src="/images/level4/stressors/financial-stressors.jpg" alt="image" width="300"><p>Finanzielle Sorgen</p>',
        },
        {
          item: 'interpersonal-stressors',
          name: 'Interpersonal stressors (conflict with family, partner or instructor)',
          html: '<img src="/images/level4/stressors/conflict-with-family.jpg" alt="image" width="300"><p>Zwischenmenschliche Stressoren (Konflikte mit Familie, Partner, Freunden,...)</p>',
        },
        {
          item: 'poor-living-conditions',
          name: 'Poor living conditions (health, food options)',
          html: '<img src="/images/level4/stressors/poor-living-conditions.jpg" alt="image" width="300"><p>Lebensqualität (Gesundheit, Essensoptionen,...)</p>',
        },
        {
          item: 'loneliness',
          name: 'Loneliness',
          html: '<img src="/images/level4/stressors/loneliness.jpg" alt="image" width="300"><p>Einsamkeit</p>',
        },
        {
          item: 'exhaustion/tiredness',
          name: 'Exhaustion/tiredness',
          html: '<img src="/images/level4/stressors/exhaustion.jpg" alt="image" width="300"><p>Müdigkeit</p>',
        },
        {
          item: 'academic-achievement-related',
          name: 'Academic achievement related stress/exams/unclear instructions',
          html: '<img src="/images/level4/stressors/unclear-instructions.jpg" alt="image" width="300"><p>Leistungsbezogener Stress, z.B. Klausuren, unklare Instruktionen</p>',
        },
      ],
    }
  },
  watch: {
    selected(value) {
      this.answers.selected = value
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level4_1',
        data: this.answers,
      })
    },
    getHTML(itemName) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of this.options) {
        if (item.item === itemName) {
          return item.html
        }
      }
      return null
    },
    handleNext() {
      this.$router.push('/level/4/eliminate-stressors/end')
    },
    handleMult() {
      this.handleCompleted()
      this.handleNext()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
