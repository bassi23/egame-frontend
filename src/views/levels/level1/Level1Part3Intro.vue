<template>
  <div class="fixed level1-endless-ocean">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level1/frogfish.png"
      alt="Frogfish"
      class="character character_position_bottom character_animation_bottom"
      style="width: 20rem; height: auto"
    >

    <div class="introContainer">
      <level-intro
        title="Smart Quiz"
        :dialouge="dialouge"
        link="/level/1/3"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level1Part3Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Der Grund, dass die meisten Projekte, die wir uns vornehmen scheitern, ist die unklare Zielsetzung. Um eine gute Zielsetzung zu erreichen, hat sich die SMART-Technik als gutes Hilfsmittel erwiesen.',
        },
        {
          text: 'Die SMART-Formel',
          position: 'right',
        },
        {
          text: 'Um Ziele erfolgversprechender zu gestalten, sollten sie sich an den folgenden Kriterien orientieren. Diese kannst du in Zukunft immer verwenden, wenn du dir ein Ziel formulierst.',
          position: 'right',
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
