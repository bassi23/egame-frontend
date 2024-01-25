<template>
  <div class="fixed level2-ship-wreck">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level2/octopus.png"
      alt="Butler"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 15rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Zeitpalast"
        :dialouge="dialouge"
        link="/level/3/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2IntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Timp: Vielen Dank für deine Hilfe. Jetzt habe ich die Zeit wieder im Blick. Nun fällt mir auch ein, wo ich die rosa Perle versteckt habe. Hier, die Perle hast du dir wirklich verdient.',
          position: 'left',
        },
        {
          text: 'Balina: Das habe ich  gerne gemacht, Timp. So, nur noch drei Perlen und dann komme ich endlich wieder nach Hause. Das nächste Ziel ist das Riff der Selbstmotivation.',
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
