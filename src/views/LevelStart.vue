<template>
  <div class="fixed start-bg">

    <div class="startContainer">
      <level-intro
        title="Einführung"
        :dialouge="dialouge"
        link="/level/1/intro"
      />
    </div>

  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'LevelStart',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Endlich Urlaub! Strand, Meer und 10 Kugeln Eis, das hab ich mir wirklich verdient! ….',
          position: 'right',
        },
        {
          text: 'Ich entscheide mich, eine Runde schnorcheln zu gehen. Das Wasser ist angenehm kühl und fast so strahlend blau wie der Himmel. Links von mir spielen Kinder Ball, rechts von mir spritzt sich ein Paar gegenseitig nass und vor mir liegt das große, weite Meer. Also ziehe ich mir meine Schwimmbrille, meine Flossen sowie den Schnorchel an und schwimme raus zum nächsten Riff. Die Sicht ist heute dank des strahlenden Sonnenscheins perfekt.',
          position: 'right',
        },
        {
          text: 'Viele kleine und große Fische in den verschiedensten Farben schwimmen an mir vorbei. Sogar einen kleinen Rochen kann ich entdecken. Als ich mich gerade auf den Rückweg begeben will, zieht eine Bewegung meine Aufmerksamkeit auf sich. Direkt links von mir steigen hunderte Blubberblasen aus einem Spalt im Meeresboden.',
          position: 'right',
        },
        {
          text: 'Fasziniert beobachte ich das Schauspiel der Blasen, welche sich mittlerweile in schnellen Spiralen nach oben winden. Plötzlich erfasst mich ein Sog. Zu spät habe ich die Gefahr des entstehenden Strudels erkannt. Ich rudere mit den Armen, kämpfe gegen die Kraft des Wasserstroms an und versuche der Falle zu entfliehen. Trotz aller Anstrengung werde ich von dem mysteriösen Strudel in die Tiefe gezogen.',
          position: 'right',
        },
      ],
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

.startContainer {
  text-align: center;
}

</style>
