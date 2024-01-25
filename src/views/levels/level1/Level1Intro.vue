<template>
  <div class="fixed level1-endless-ocean">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 18rem; height: auto"
    >
    <img
      src="/images/level1/frogfish.png"
      alt="Frogfish"
      class="character character_position_bottom character_animation_bottom"
      style="width: 18rem; height: auto"
    >

    <div class="introContainer">
      <level-intro
        title="Endloser Ozean"
        :dialouge="dialouge"
        link="/level/1/1"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level1Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina : Was ist passiert?...    Wo bin ich?',
          position: 'right',
        },
        {
          text: 'Aal : Du befindest dich im Unterwasserkönigreich Regulatia. Bei deiner Reise durch den Strudel bist du bewusstlos geworden. Ich habe dich während meines Spaziergangs gefunden.',
          position: 'left',
        },
        {
          text: 'Balina : Du meine Güte, ich habe ja Flossen! Was ist hier los? Das ist nicht mein Körper. Wie ist das passiert?',
          position: 'right',
        },
        {
          text: 'Aal : Als Mensch könntest du unter Wasser nicht atmen, deshalb wurdest du bei deiner Reise verwandelt.',
          position: 'left',
        },
        {
          text: 'Balina : Ich will nach Hause. Und aus diesem Körper raus.',
          position: 'right',
        },
        {
          text: 'Aal : Nach Hause gelangst du nur, wenn du unsere Königin befreist, die im Korallenturm festgehalten wird. Allerdings kann nur die Auserwählte die vier Perlen erlangen, um die Tür des Korallenturms zu öffnen. Dazu musst du die Aufgaben der vier Selbstregulationswächter lösen.',
          position: 'left',
        },
        {
          text: 'Balina: So habe ich mir meinen Urlaub nicht vorgestellt...',
          position: 'right',
        },
        {
          text: 'Aal : Bevor ich dich allerdings gehen lasse, prüfe ich zuerst, ob du auch wirklich die Auserwählte bist. Wenn du es schaffst, meine Aufgaben zu lösen, dann zeige ich dir den Weg zum Zeitpalast.',
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

.introContainer {
  text-align: center;
}
</style>
