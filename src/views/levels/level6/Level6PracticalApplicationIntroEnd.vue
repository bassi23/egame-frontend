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
        title="Praktische Anwendung"
        :dialouge="dialouge"
        link="/outro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level6PracticalApplicationIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Malkia: Gut gemacht! Ich hoffe, du konntest auf deiner Reise durch Regulatia viel lernen. Wie versprochen öffne ich dir das Portal in deine Heimat. Du musst nur hindurchtreten.',
          position: 'left',
        },
        {
          text: 'Balina: Ich freue mich sehr auf mein zu Hause. Auf Wiedersehen Regulatia, ich werde dich vermissen.',
          position: 'left',
        },
        {
          text: '',
          position: 'left',
        },
        {
          text: 'Malkia: … wir werden dich nie vergessen.',
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
