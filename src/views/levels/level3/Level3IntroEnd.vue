<template>
  <div class="fixed level3-reef">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level3/crab.png"
      alt="Child 4"
      class="character character_position_bottom character_animation_bottom"
      style="width: 15rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Selbstmotivationsriff"
        :dialouge="dialouge"
        link="/level/4/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level3IntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Motus: Wie hat dir dein Spaziergang im Korallenriff gefallen?',
          position: 'left',
        },
        {
          text: 'Balina: Super, ich kann  es  kaum erwarten die restlichen Prüfungen zu meistern. ',
          position: 'left',
        },
        {
          text: 'Motus: Das wollte ich hören. Mit dieser Motivation hast du dich als würdig erwiesen die gelbe Perle zu besitzen. ',
          position: 'left',
        },
        {
          text: 'Balina: Vielen Dank Motus. Ich bin bereit für die nächste Herausforderung. Nur noch zwei Perlen verbleiben! Damit heißt unser nächstes Ziel laut Wissensbuch: die Stresshöhle.',
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
