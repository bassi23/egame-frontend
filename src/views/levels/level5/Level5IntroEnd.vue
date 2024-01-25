<template>
  <div class="fixed level5-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level5/little-turtle2.png"
      alt="Little Turtle 2"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 15rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Garten des Wissens"
        :dialouge="dialouge"
        link="/level/6/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level5IntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Zivo: Die Quellen versorgen Regulatia wieder mit Wissen. Ich bin dir zu tiefsten Dank verpflichtet. Bitte nimm diese blaue Perle als Zeichen meiner ewigen Dankbarkeit an.',
          position: 'left',
        },
        {
          text: 'Balina: Ich habe es geschafft. Mit den vier Perlen kann ich nun endlich die Königin befreien. Nichts wie hin zum Korallenturm.',
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
