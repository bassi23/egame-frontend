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
      alt="Child 1"
      class="character character_position_bottom character_animation_bottom"
      style="width: 15rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Selbstmotivationsriff"
        :dialouge="dialouge"
        link="/level/3/choose-motivators/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level3Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Wow, hier soll ich einen Selbstregulationswächter finden? Der könnte sich doch überall in den Korallen verstecken. Ich habe jetzt schon keine Lust mehr.',
          position: 'left',
        },
        {
          text: 'Motus: Was muss ich denn da hören? Du hast keine Lust mehr? Ich bin Motus und einer der Selbstregulationswächter von Regulatia. Mein Fachgebiet ist die Selbstwirksamkeit und Selbstmotivation. Was willst du hier?',
          position: 'left',
        },
        {
          text: 'Balina: Ich bin hier, um mir die zweite Perle zu verdienen, die die Tür zum Korallenturm öffnet.',
          position: 'left',
        },
        {
          text: 'Motus: Dafür siehst du aber ziemlich unmotiviert aus. Ich würde vorschlagen, dass du dich mit den Bewohnern der Korallenriffs unterhälst.  Von den Kindern kannst du dir bestimmt ein bisschen Motivation abschauen. Erst wenn du deine Motivation gefunden hast, bist du  würdig die gelbe Perle zu besitzen.',
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
