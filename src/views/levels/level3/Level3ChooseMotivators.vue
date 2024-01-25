<template>
  <div class="stretched level3-reef">
    <img
      src="/images/level3/child-1.png"
      alt="Child 1"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 12rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Wähle deine Motivatoren
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Selbstmotivation bedeutet, dass eine Person mit Interesse, Spaß und Freude Dinge angeht
          und selbst einen Sinn in ihrer Tätigkeit sieht. Eine Person nutzt also ganz bewusst
          bestimmte Wege, um eine eigene Absicht erreichen zu können. Letztendlich hat
          Selbstmotivation viel mit Selbststeuerung und Selbstmanagement zu tun. Je besser sich eine
          Person kennt und wahrnimmt, umso besser kann sie sich auch steuern und somit für
          Tätigkeiten motivieren, die ihr weniger Spaß machen.
        </p>
        <h3 class="h1">
          Selbstmotivationsstrategien
        </h3>
        <strong>1. Erfolgserlebnisse verschaffen</strong>
        <p class="p">
          Um die Motivation über einen längeren Zeitraum aufrechtzuerhalten, hilft es, sich
          Erfolgserlebnisse zu verschaffen. Dazu kann man sich z.B. in angemessenem Maß selbst für
          die Erreichung von Zwischenzielen belohnen.
        </p>
        <strong>2. Positive Einstellung</strong>
        <p class="p">
          Auch wenn man noch so wenig Lust hat, eine bestimmte Aufgabe anzugehen sollte man sich
          immer wieder klar machen, dass die zu bewältigende Aufgabe auch positive Aspekte aufweist.
        </p>
        <strong>3. Persönlicher Nutzen</strong>
        <p class="p">
          Die Motivation für eine Aufgabe stellt sich eher ein, wenn man sich den persönlichen
          Nutzen der Aufgabe klar macht. Als zusätzliche Motivation dient die Identifizierung des
          gegenwärtigen Nutzens der Lerninhalte für die Lebensbereiche Studium, Familie und
          Freizeit. Um die Motivation zusätzlich zu steigern, ist es sinnvoll, sich auch den
          zukünftigen Nutzen der Lerninhalte für diese Lebensbereiche klar zu machen.
        </p>
        <strong>4. Sich selbst belohnen</strong>
        <p class="p">
          Eine weitere Strategie, sich zu motivieren, besteht darin, sich selbst eine Belohnung in
          Aussicht zu stellen, wenn man das Tagesziel oder ein Zwischenziel erreicht hat. Dabei darf
          die Belohnung aber nicht selbst zum Ziel werden, sondern es muss klar sein, dass sie nur
          das Mittel zur Zielerreichung ist.
        </p>
        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>

        <div v-if="!completed">
          <div class="options">
            <b-form-checkbox-group
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              html-field="html"
              stacked
            />
          </div>
          <base-button
            variant="primary"
            text="Weiter"
            :disabled="false"
            @click="handleCompleted"
          />
        </div>
        <div v-else>
          <h2 class="h2">
            Du hast die folgenden Motivatoren gewählt!</h2>
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
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level3ChooseMotivators',
  components: {
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      result: false,
      selected: [],
      answers: {
        selected: null,
      },
      options: [
        {
          item: 'positive',
          name: 'Positive, performance related feedback',
          html: '<img src="/images/level3/motivators/performance-related-feedback.jpg" alt="image" width="300"><p>Positives, leistungsbezogenes Feedback</p>',
        },
        {
          item: 'anxiety',
          name: 'Anxiety',
          html: '<img src="/images/level3/motivators/anxiety.jpg" alt="image" width="300"><p>Sorgen, Ängste</p>',
        },
        {
          item: 'optimal-challenge',
          name: 'Optimal challenge',
          html: '<img src="/images/level3/motivators/optimal-challenge.jpg" alt="image" width="300"><p>Optimale Herausforderung</p>',
        },
        {
          item: 'enjoyment',
          name: 'Enjoyment and playfulness',
          html: '<img src="/images/level3/motivators/enjoyment-and-playfulness.jpg" alt="image" width="300"><p>Spaß</p>',
        },
        {
          item: 'choice/opportunity',
          name: 'Choice/opportunity for self-direction',
          html: '<img src="/images/level3/motivators/opportunity-for-self-direction.jpg" alt="image" width="300"><p>Möglichkeit für eigene Entscheidungen</p>',
        },
        {
          item: 'fear-of-sanctions',
          name: 'Fear of (parental) sanctions',
          html: '<img src="/images/level3/motivators/fear.jpg" alt="image" width="300"><p>Angst vor Strafe/Konsequenzen</p>',
        },
        {
          item: 'purpose',
          name: 'Purpose e.g. helping other/value for future career',
          html: '<img src="/images/level3/motivators/helping-others.jpg" alt="image" width="300"><p>Sinnhaftigkeit: z.B. anderen helfen, Wert für die zukünftige Karriere</p>',
        },
        {
          item: 'praise/rewards',
          name: 'Praise or (monetary) rewards',
          html: '<img src="/images/level3/motivators/rewards.jpg" alt="image" width="300"><p>Anerkennung oder (monetäre) Belohnungen</p>',
        },
        {
          item: 'social-influence',
          name: 'Social influence',
          html: '<img src="/images/level3/motivators/social-influence.jpg" alt="image" width="300"><p>Sozialer Druck</p>',
        },
        {
          item: 'deadlines',
          name: 'Deadlines',
          html: '<img src="/images/level3/motivators/deadlines.jpg" alt="image" width="300"><p>Deadlines</p>',
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
        level: 'level3_1',
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
      this.$router.push('/level/3/choose-motivators/end')
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

.options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 1rem;
  text-align: left;
  grid-auto-rows: minmax(100px, auto);
}
</style>
