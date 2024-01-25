<template>
  <div class="fixed level2-former-treasury">
    <img
      src="/images/whale.png"
      alt="whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level2/treasurer.png"
      alt="fish"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: auto; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Ehemalige Schatzkammer"
        :dialouge="dialouge"
        link="/level/2/alpen-method-quiz"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2AlpenMethodQuizIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Schatzmeister: Ah, ein Dieb, zur Hilfe!',
          position: 'left',
        },
        {
          text: 'Balina: Nein, ich bin kein Dieb. Ich helfe Timp seine Uhren wiederzufinden. Hast du vielleicht eine gesehen?',
          position: 'right',
        },
        {
          text: 'Schatzmeister: Wie du sehen kannst, liegen hier ganz viele wertvolle Dinge herum. Unter anderem wertvolle Zeit und die stiehlst du mir gerade. Zeit ist kostbar und sollte sinnvoll verwendet werden. Ich zeige dir mal, wie du durch gute Zeitplanung Zeit sparen kannst.',
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
