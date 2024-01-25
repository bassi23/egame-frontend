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

    <div class="endContainer">
      <level-intro
        title="Endloser Ozean"
        :dialouge="dialouge"
        link="/level/2/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level1IntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Aal : Du bist wirklich die Auserwählte! Ich will nicht derjenige, sein, der dich an deinem Abenteuer hindert. Nimm dieses Buch mit allem Wissen über die Selbstregulationswächter. Es wird dir auf deiner Reise helfen. Bitte rette die Königin. Beeil dich, du hast keine Zeit zu verlieren. Schnell, du musst in den Zeitpalast! Dort wartet der erste Selbstregulationswächter auf dich.',
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

.endContainer {
  text-align: center;
}

</style>
