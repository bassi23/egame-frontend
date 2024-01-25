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
        title="Muskelentspannung"
        :dialouge="dialouge"
        link="/level/4/stress-intensifyer-test/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level4MuscleRelaxationIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Cera: Viel besser. Jetzt haben wir alle Verspannungen gelockert und du kannst dich wieder besser auf deine Bestimmung konzentrieren. Allerdings glaube ich, dass du auch noch von ein paar mentalen Stressoren geplagt wirst.',
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
