<template>
  <div class="stretched main-bg">
    <article class="article">
      <header>
        <section class="content justify-content-center">
          <h1 class="text-center">
            Credits
          </h1>
        </section>
      </header>
      <div class="content justify-content-center">
        <div class="text-center">
          <div style="background: rgba(255,255,255,0.5); border-radius: 15px">
            <h2><u>Idea, Coordination and Instructional Design</u></h2>
            <br>
            <h3>Nathalie Barz</h3>
            <br>
            <br>
            <h2><u>Game Development</u></h2>
            <br>
            <h3>Ian Ferenc Diks</h3>
            <br>
            <h3>Mashal Naqui</h3>
            <br>
            <br>
            <h2><u>Storyline</u></h2>
            <br>
            <h3>Julia Ruhl</h3>
            <br>
            <h3>Nathalie Barz</h3>
            <br>
            <br>
            <h2><u>Learning Content</u></h2>
            <br>
            <h3>Laura Dörrenbächer-Ulrich</h3>
            <br>
            <h3>Nathalie Barz</h3>
            <br>
            <br>
            <h2><u>Game Tester</u></h2>
            <br>
            <h3>Christina David</h3>
            <br>
            <h3>Laura Dörrenbächer-Ulrich</h3>
            <br>
            <h3>Lena Grüneisen</h3>
            <br>
            <h3>Ramona Schöne-Hoffmann</h3>
            <br>
            <h3>Tom Selisko</h3>
            <br>
            <h3>Cosima Tolle</h3>
            <br>
            <br>
            <h2><u>Images by</u></h2>
            <br>
            <h3>pikisuperstar and upklyak on Freepik</h3>
            <br>
            <br>
            <h2><u>Characters by</u></h2>
            <br>
            <h3>hermandesign2015, winwin.artlab and Freepik</h3>
            <br>
            <hr style="color: #90a4ae; max-width: 420px">
            <br>
            <h2><u>Special Thanks to</u></h2>
            <br>
            <h3>Team DataPin</h3>
            <br>
            <h3>Franziska Perels</h3>
          </div>

        </div>
      </div>
    </article>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'OutroView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseButton,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    goToMain() {
      this.$router.push('/main')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
