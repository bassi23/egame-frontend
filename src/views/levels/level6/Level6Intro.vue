<template>
  <div class="fixed level6-coral-tower">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 12rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Korallenturm"
        :dialouge="dialouge"
        link="/level/6/evaluate-scenarios/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level6Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: . Wo müssen nun die Perlen hin? Diese Einkerbungen an der Säule da hinten sehen passend aus. Vielleicht öffnet sich die Tür, wenn ich die Perlen dort einsetze.',
          position: 'left',
        },
        {
          text: 'Die Perlen müssen in die Säulen eingesetzt werden.',
          position: 'left',
        },
        {
          text: 'Balina: Ja, die Tür ist offen. Jetzt sind es nur noch ein paar Stufen bis nach oben.',
          position: 'left',
        },
        {
          text: 'Balina: Eure Hoheit. Schön, dass ihr wohlauf seid.',
          position: 'left',
        },
        {
          text: 'Malkia: Bitte, spare dir die Förmlichkeit. Mein Name ist Malkia, Königin von Regulatia. Ich wusste, dass du kommst und mich befreist. Du bist also der*die Auserwählte?',
          position: 'left',
        },
        {
          text: 'Balina: Ja genau, und ich  würde nun gerne wieder nach Hause.',
          position: 'left',
        },
        {
          text: 'Malkia: Selbstverständlich. Aber zuerst hätte ich noch eine Prüfung für dich. Wenn du sie bestehst, öffne ich dir das Portal nach Hause.',
          position: 'left',
        },
        {
          text: 'Balina: Eine Prüfung? Ernsthaft?',
          position: 'left',
        },
        {
          text: 'Malkia: Genau. Ich hatte in der Zeit, die ich hier oben verbracht habe, viel Zeit zum Nachdenken. Ich bin nun Malkia, die Königin von Regulatia und die Wächterin der Selbstreflexion! Nur  wenn du wirklich der*die Auserwählte bist, kannst du meine Prüfung bestehen.',
          position: 'left',
        },
        {
          text: 'Balina: Okay. Dann lass uns beginnen…',
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
