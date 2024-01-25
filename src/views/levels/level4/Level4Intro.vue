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
        title="Stresshöhle"
        :dialouge="dialouge"
        link="/level/4/eliminate-stressors/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level4Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Hier ist es ganz schön dunkel… soll ich vielleicht doch lieber umdrehen?',
          position: 'left',
        },
        {
          text: 'Cera: Hallo, schön dich kennenzulernen. Weshalb hast du den weiten Weg in meine Höhle auf dich genommen?',
          position: 'left',
        },
        {
          text: 'Balina: Ich bin auf der Suche nach den Perlen, die den Zugang zum Korallenturm öffnen. Ich muss die Königin retten und das kann nur ich, denn ich bin der*die Auserwählte. Und zwar möglichst schnell, denn ich will wieder nach Hause.',
          position: 'left',
        },
        {
          text: 'Cera: Hui, also ich sehe hier nur einen Fall von akuter Gestresstheit. Die grüne Perle kann ich dir in diesem Zustand leider nicht überlassen. Zuerst musst du lernen, wie du dich richtig entspannen kannst. Na los, mach dich mal richtig locker!',
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
