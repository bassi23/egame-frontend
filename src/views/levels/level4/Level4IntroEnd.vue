<template>
  <div class="fixed level4-cave-of-stress">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level4/cera.png"
      alt="Cera"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 10rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Stresshöhle"
        :dialouge="dialouge"
        link="/level/5/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level4IntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Das hat richtig gut getan, ich fühle mich wie neu geboren. Danke Cera.',
          position: 'left',
        },
        {
          text: 'Cera: Das freut mich sehr. Nun kann ich dir auch guten Gewissens die grüne Perle anvertrauen.',
          position: 'left',
        },
        {
          text: 'Balina: Nur noch eine Perle, dann ist es geschafft. Auf zum Garten des Wissens.',
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
