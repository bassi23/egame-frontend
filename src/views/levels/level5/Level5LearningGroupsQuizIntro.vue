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
        title="Lerngruppenquiz"
        :dialouge="dialouge"
        link="/level/5/learning-groups-quiz"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level5LearningGroupsQuizIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Hi, was stimmt mit der Quelle nicht? Sie sieht von außen ganz in Ordnung aus.',
          position: 'left',
        },
        {
          text: 'Schildkröte: Das Wissen ist abhanden gekommen und alleine schaffe ich es nicht, es wieder dem Wasser hinzuzufügen. Aber ich glaube zu zweit können wir es schaffen. Du weißt doch, wie Teamwork geht, oder?',
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
