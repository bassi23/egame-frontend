<template>
  <div class="fixed level3-reef">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level3/child-1.png"
      alt="Child 1"
      class="character character_position_bottom character_animation_bottom"
      style="width: 12rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Selbstmotivationsriff"
        :dialouge="dialouge"
        link="/level/3/choose-motivators"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level3ChooseMotivatorsIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Hey du, kannst du mich motivieren? Ich brauche nämlich unbedingt diese gelbe Perle.',
          position: 'left',
        },
        {
          text: 'Kind: Das wird keine leichte Aufgabe, aber einen Versuch ist es wert. Zunächst musst du dir deiner Motivatoren bewusst werden.',
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
