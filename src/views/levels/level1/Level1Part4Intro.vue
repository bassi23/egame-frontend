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

    <div class="introContainer">
      <level-intro
        title="Zielorientierung"
        :dialouge="dialouge"
        link="/level/1/4"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level1Part4Intro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Der Grund, dass die meisten Projekte, die wir uns vornehmen scheitern, ist die unklare Zielsetzung.Um eine gute Zielsetzung zu erreichen, hat sich die SMART-Technik als gutes Hilfsmittel erwiesen.',
        },
        {
          text: 'Die SMART-Formel',
          position: 'right',
        },
        {
          text: 'Um Ziele erfolgversprechender zu gestalten, sollten sie sich an den folgenden Kriterien orientieren. Diese kannst du in Zukunft immer verwenden, wenn du dir ein Ziel formulierst.',
          position: 'right',
        },
        {
          text: '1. Spezifisch: Das Ziel so präzise und genau wie möglich formulieren. Wichtig ist, dass du den konkreten Zielzustand (SOLL-Zustand) beschreibst.',
          position: 'right',
        },
        {
          text: '2. Messbar: Das Ziel sollte Kriterien enthalten, mit denen du die Zielerreichung überprüfen kannst. Verwende ruhig konkrete Zahlen, an denen du erkennen kannst, ob du deinem Ziel nähergekommen bist.',
          position: 'right',
        },
        {
          text: '3. Anspruchsvoll: Das Ziel sollte anspruchsvoll sein, um deinen Ehrgeiz zur Erreichung des Ziels zu steigern. Achte jedoch darauf, dass dein Ziel dich nicht überfordert.',
          position: 'right',
        },
        {
          text: '4. Realistisch: Das Ziel sollte dennoch realistisch sein. Ziele, bei denen von Anfang an die Zielerreichung unmöglich ist, wirken demotivierend. Vielmehr führt es zu einer Motivationssteigerung, wenn du dir sicher bist, dass du dein Ziel auch wirklich erreichen kannst.',
          position: 'right',
        },
        {
          text: '5. Terminierbar: Das Ziel sollte eine genaue Zeitangabe enthalten, bis wann das Ziel erreicht werden soll.',
          position: 'right',
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
