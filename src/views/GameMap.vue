<template>
  <div class="fixed main-bg">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 16rem; height: auto"
    >

    <div class="box container">
      <h1 class="heading mapHeader">
        Spielkarte
      </h1>

      <div class="wrapper">
        <div class="wrapper-inner">
          <h3 class="wrapper-heading">
            Level 1 - Zielsetzung
          </h3>
          <ul class="wrapper-list">
            <li>
              <a href="/start">Einführung</a>
            </li>
            <li>
              <a href="/level/1/intro">Prüfe dein Wissen zur Selbstregulation</a>
            </li>
            <li>
              <a href="/level/1/2">Ziele setzen</a>
            </li>
            <li>
              <a href="/level/1/3/intro">Smart quiz</a>
            </li>
            <li>
              <a href="/level/1/4">Zielorientierung</a>
            </li>
          </ul>
        </div>
        <div class="wrapper-inner">
          <h3 class="wrapper-heading">
            Level 2 - Zeitmanagement
          </h3>
          <ul class="wrapper-list">
            <li>
              <a href="/level/2/intro">Einführung</a>
            </li>
            <li>
              <a href="/level/2/generate-time-charts/intro">Zeitmanagement</a>
            </li>
            <li>
              <a href="/level/2/chrono-test/intro">Chronotest</a>
            </li>
            <li>
              <a href="/level/2/alpen-method-quiz/intro">ALPEN Quiz</a>
            </li>
            <li>
              <a href="/level/2/weekly-schedule/intro">Wochenplaner</a>
            </li>
          </ul>
        </div>
        <div class="wrapper-inner">
          <h3 class="wrapper-heading">
            Level 3 - Motivation
          </h3>
          <ul class="wrapper-list">
            <li>
              <a href="/level/3/intro">Einführung</a>
            </li>
            <li>
              <a href="/level/3/choose-motivators/intro">Wähle deine Motivatoren</a>
            </li>
            <li>
              <a href="/level/3/motives/intro">Motive</a>
            </li>
            <li>
              <a href="/level/3/motivation-quiz/intro">Motivationsquiz</a>
            </li>
            <li>
              <a href="/level/3/strategy-assessment/intro">Strategiebewertung</a>
            </li>
          </ul>
        </div>
        <div class="wrapper-inner">
          <h3 class="wrapper-heading">
            Level 4 - Stress & Konzentration
          </h3>
          <ul class="wrapper-list">
            <li>
              <a href="/level/4/intro">Einführung</a>
            </li>
            <li>
              <a href="/level/4/eliminate-stressors/intro">Stress</a>
            </li>
            <li>
              <a href="/level/4/muscle-relaxation/intro">Muskelentspannung</a>
            </li>
            <li>
              <a href="/level/4/stress-intensifyer-test/intro">Stressverstärkertest</a>
            </li>
            <li>
              <a href="/level/4/concentration-quiz/intro">Konzentrationsquiz</a>
            </li>
          </ul>
        </div>
        <div class="wrapper-inner">
          <h3 class="wrapper-heading">
            Level 5 - Lernstrategien
          </h3>
          <ul class="wrapper-list">
            <li>
              <a href="/level/5/intro">Einführung</a>
            </li>
            <li>
              <a href="/level/5/learning-strategy-assessment/intro">Lernstrategietest</a>
            </li>
            <li>
              <a href="/level/5/loci-method/intro">LOCI Methode</a>
            </li>
            <!--<li>
              <a href="/level/5/mindmaps/intro">Mindmaps</a>
            </li>-->
            <li>
              <a href="/level/5/learning-groups-quiz/intro">Lerngruppenquiz</a>
            </li>
          </ul>
        </div>
        <div class="wrapper-inner">
          <h3 class="wrapper-heading">
            Level 6 - Selbstreflexion
          </h3>
          <ul class="wrapper-list">
            <li>
              <a href="/level/6/intro">Einführung</a>
            </li>
            <li>
              <a href="/level/6/evaluate-scenarios/intro">Szenarien bewerten</a>
            </li>
            <li>
              <a href="/level/6/attribution-quiz/intro">Attributionsquiz</a>
            </li>
            <li>
              <a href="/level/6/benchmark-orientation/intro">Bezugsnormorientierung</a>
            </li>
            <li>
              <a href="/level/6/practical-application/intro">Kausalattribution in der
                Lehrerrolle</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- <img
      src="/images/map.png"
      alt="Game Map Image"
      class="mx-auto"
      style="width: 930px; height: 778px;"
    > -->

      <base-button
        class="containerBtn"
        variant="primary"
        text="Zum Hauptmenü"
        @click="goToMain"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'GameMap',
  components: {
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

ul {
  list-style-type: none;
  padding: 0 1rem;
}

h3 {
  font-weight: bold;
  color: #fff;
}

.container {
  display: flex;
  flex-direction: column;
}

.mapHeader {
  margin-bottom: 2rem;
}

.containerBtn {
  text-align: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding-bottom: 2rem;
}

.wrapper-inner {
  background-color: #8fc2d0;
  box-shadow: inset 0 0 3px #222020;
  border-radius: .5rem;
}

.wrapper-heading {
  background-color: #007a9c;
  border-radius: 0.5rem .5rem 0 0;
  padding: .5rem;
  text-align: center;
}

.wrapper-list a {
  color: #000;
  text-decoration: none;
}

.wrapper-list a:hover {
  color: #656262;
  text-decoration: underline;
  cursor: pointer;
}
</style>
