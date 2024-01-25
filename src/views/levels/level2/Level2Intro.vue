<template>
  <div class="fixed level2-palace-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <!-- TODO: grafik ändern zum Oktopus, anstatt Gärtner, DONE-->
    <img
      src="/images/level2/octopus.png"
      alt="Gardener"
      class="character character_position_bottom character_animation_bottom"
      style="width: 20rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Zeitpalast"
        :dialouge="dialouge"
        link="/level/2/generate-time-charts/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Ok, das sind die Überreste des Zeitpalastes. Schauen wir mal in das Wissensbuch: Hier wohnt der erste Selbstregulationswächter. Sein Spezialgebiet ist die Zeitplanung. Im Zeitpalast selbst vergeht die Zeit sehr schnell, oder auch sehr langsam. Manche sagen, im Zeitpalast gäbe es gar keine Zeit. Andere behaupten, alle Zeit der Welt beginnt und endet im Zeitpalast. Die Wahrheit kennt nur der erste Selbstregulationswächter.',
          position: 'right',
        },
        {
          text: 'Timp: Willkommen. Ich bin der Selbstregulationswächter des Zeitpalastes. Mein Name ist Timp. Wie kann ich dir behilflich sein?',
          position: 'left',
        },

        {
          text: 'Balina: Ich suche die Perlen zum Öffnen des Korallenturms.',
          position: 'right',
        },
        {
          text: 'Timp: Da bist du bei mir richtig. Allerdings habe ich einen Teil meiner Uhren in den Ruinen des Palastes verloren und ohne die kann ich nicht klar denken. Wenn du mir hilfst, meine Uhren zu finden, dann fällt mir bestimmt wieder ein, wo ich die rosa Perle versteckt habe. Vielleicht weiß mein Personal mehr über den Verbleib meiner kostbaren Uhren.',
          position: 'left',
        },
      ],
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
