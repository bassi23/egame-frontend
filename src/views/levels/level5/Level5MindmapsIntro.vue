<template>
  <div class="fixed level5-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level5/balina.png"
      alt="Balina"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Mindmaps"
        :dialouge="dialouge"
        link="/level/5/mindmaps"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level5MindmapsIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Ich finde, dass hier ziemlich viel Unkraut in der Quelle schwimmt. Sehen wir mal, wie wir das wieder loswerden.',
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
