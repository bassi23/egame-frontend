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
        Muskelentspannung
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Auf den folgenden Seiten findest du verschiedene Möglichkeiten Stress effektiv zu reduzieren. Du wirst die kognitive Umstrukturierung, progressive Muskelentspannung und weitere Maßnahmen zur Stressreduktion kennenlernen.
        </p>
        <h3 class="h1">
          Progressive Muskelrelaxation
        </h3>
        <p class="p">
          Die Methode der Progressiven Muskelrelaxation (Relaxation = Entspannung) wurde 1934 von Jacobson zum Abbau von Angst und Spannungen entwickelt. Er beobachtete bei eigenen Patientinnen und Patienten, dass diese im Zustand der Angst von erheblichen muskulären Spannungen berichteten. Er folgerte daraus, dass es umgekehrt möglich sein musste, durch muskuläre Entspannung zu einer Gesamtentspannung zu gelangen.
        </p>
        <p class="p">
          Der Ablauf der Übung ist bei jeder Muskelgruppe stets derselbe:
        </p>
        <ol class="p">
          <li>
            Konzentration auf die jeweilige Muskelgruppe
          </li>
          <li>
            Anspannen dieser Muskelgruppe
          </li>
          <li>
            Spannung ca. 5-7 Sekunden aufrechterhalten
          </li>
          <li>
            Spannung lösen (20-40 Sek)
          </li>
          <li>
            Empfinden der Entspannung.
          </li>
        </ol>
        <p class="p">
          Die Beobachtung des Entspannungsvorganges führt in der Regel zu einem entspannten Gesamtgefühl. Falls man das gesamte Programm durchläuft, beträgt die Übungszeit ca. 20 bis 25 Minuten. Bei guter Beherrschung dieser Methode lässt sich das Verfahren jedoch erheblich verkürzen und der Entspannungszustand schneller erreichen.
        </p>
        <h3 class="p">
          Weitere stressreduzierende Maßnahmen
        </h3>
        <ul class="p">
          <li>
            maßvolle körperliche Betätigung,  Sport
          </li>
          <li>
            gesunde Ernährung
          </li>
          <li>
            regelmäßiger Schlaf
          </li>
          <li>
            realistisches und positives Denken und Handeln
          </li>
        </ul>

        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <p class="p">
          Begib dich in eine ruhige Umgebung und höre dir die folgende Audiodatei an, die dich durch eine Muskelentspannung leitet. Diese kannst du im Sitzen oder im Liegen durchführen.
        </p>
        <div class="audio">
          <audio
            id="audio"
            ref="audio"
            controls
            preload
            loop
            muted
          >
            <source
              src="@/assets/audio/level4/muscle-relaxation.mp3"
              type="audio/mpeg"
            >
            Your browser does not support the audio element.
          </audio>
        </div>

        <base-button
          variant="primary"
          text="Nächstes Level"
          :disabled="false"
          @click="handleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level4MuscleRelaxation',
  components: {
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      answers: {},
    }
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
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level4_2',
        data: this.answers,
      })
      this.handleNext()
    },
    handleNext() {
      this.$router.push('/level/4/muscle-relaxation/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';
.audio{
  padding: 2rem;
}
</style>
