<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="stretched level5-garden">
    <img
      src="/images/level5/little-turtle1.png"
      alt="Little Turtle 1"
      class="character character_position_top character_animation_top"
      style="width: 10rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        LOCI-Methode
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Bei dieser Methode werden Punkte entweder am Körper (Körperroute) oder im Raum (Raumroute)
          festgelegt. An diese so genannten Routenpunkte hängt man dann Schlüsselwörter an, indem
          man sie zu einem Bild verknüpft.
        </p>
        <p class="p">
          Die Loci-Methode besteht aus 3 Schritten. In einem ersten Schritt wird eine sogenannte
          Route mit verschiedenen Routenpunkten festgelegt. Im 2. Schritt erarbeitet man wichtige
          Schlüsselwörter des Lernthemas – dazu eignet sich übrigens besonders gut eine Mind-Map. Im
          3. Schritt verbindet man dann diese wichtigen Schlüsselwörter des Lernthemas mit den
          einzelnen Routenpunkten der Route. Und zwar, indem man sich ein (lustiges) Bild dazu
          einfallen lässt!
        </p>
        <h3 class="h1">
          Beispiel für die Körper-Route
        </h3>
        <p class="p">
          Die einfachste Route, die man auch immer bei sich hat, ist die Körperroute.
        </p>
        <strong><u>Schritt 1: Festlegen der Route</u></strong>
        <p class="p">
          Man prägt sich beliebige Körperpunkte in der entsprechenden Reihenfolge ein. Das ist ganz
          einfach, denn man geht den Körper von unten nach oben durch und schon hat man die erste
          Route! Hier ein Beispiel für eine Körperroute:
        </p>
        <code class="p">
          Fuß = Knie = Oberschenkel = Gesäß = Hüfte = Bauch = Brust = Schultern = Kopf
        </code>
        <br><br>
        <strong><u>Schritt 2: Verbinden der Routenpunkte mit Schlüsselwörtern</u></strong>
        <p>
          Angenommen man will sich die Planeten unseres Sonnensystems merken:
        </p>
        <code class="p">
          Merkur – Venus –Erde – Mars – Jupiter – Saturn – Uranus – Neptun
        </code>
        <p>
          Im 2. Schritt dieser Methode verbindet man jetzt also die einzelnen Routenpunkte mit den
          Planeten:
        </p>
        <code class="p">
          Fuß = Merkur, Knie = Venus, Oberschenkel = Erde, Gesäß = Mars, Hüfte = Jupiter,
          Bauch = Saturn, Brust/Schulter = Uranus, Kopf = Neptun
        </code>
        <p>
          Das allein hilft aber noch nicht dabei, die Planeten auch wirklich zu lernen. Jetzt kommt
          Schritt 3 ins Spiel.
        </p>
        <strong><u>Schritt 3: (Lustige) Bilder und Geschichten erfinden</u></strong>
        <p class="p">
          Man überlegt sich zu jedem Planeten ein Bild und dieses Bild verknüpft man dann mit dem
          entsprechenden Routenpunkt. Hier beispielhaft dazugehörige Bilder und Geschichten:
        </p>
        <ul class="p">
          <li>
            Fuß – Merkur: Meer-Kur: Ich gönne meinen Füßen eine Meeres-Kur. Ich stehe mit meinen
            Füßen am Strand, Meerwasser umfließt die müden Füße.
          </li>
          <li>
            Knie – Venus: Venusmuschel: Dann knie ich im Sand vor einer Venusmuschel.
          </li>
          <li>
            Oberschenkel – Erde: Globus: Ich balanciere einen Globus (= Erde) auf meinen
            Oberschenkeln.
          </li>
          <li>
            ...
          </li>
        </ul>
        <p class="p">
          Wenn man die Namen der Planeten mit den entsprechenden Bildern an den einzelnen
          Körperpunkten verankert, dann wird man sich auch nach Jahren noch an die Planeten des
          Sonnensystems erinnern und sie in der richtigen Reihenfolge aufzählen können.
        </p>

        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <p class="description">
          Der Begriff „Saprobien“ bezeichnet Lebewesen, die in Gewässern mit fäulnisfähigen
          Stoffen leben. Im sogenannten Saprobiensystem werden diese Lebewesen nach ihrer
          Widerstandfähigkeit gegenüber Verunreinigungen eingeteilt, was die Bestimmmung
          der Gewässergüte ermöglicht.
          Merke dir die Zuordnungen, drücke dann auf weiter, und ordne sie erneut korrekt zu.
        </p>

        <loci-methode-saprobie
          :grade="grade"
          :saprobia="saprobia"
          :shuffle-saprobia="shuffleSaprobia"
          :completed="completed"
          :disabled="disableDragging"
          @update-saprobia="updateSaprobia"
        />

        <base-button
          v-if="completed"
          variant="primary"
          text="Nächstes Level"
          @click="handleNext"
        />
        <base-button
          v-else-if="!disableDragging"
          variant="primary"
          text="Zeige Ergebnisse"
          @click="handleCompleted"
        />
        <base-button
          v-else
          variant="primary"
          text="Weiter"
          @click="handleDisable"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import LociMethodeSaprobie from '@/components/levels/level5/LociMethodeSaprobie.vue'
import timeMixin from '@/mixins/timeMixin'

export default {
  name: 'Level5LociMethod',
  components: {
    BaseButton,
    LociMethodeSaprobie,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      completed: false,
      disableDragging: true,
      answers: {
        grade_1: null,
        grade_1_2: null,
        grade_2: null,
        grade_2_3: null,
        grade_3: null,
        grade_3_4: null,
        grade_4: null,
      },
      grade: ['1', '1-2', '2', '2-3', '3', '3-4', '4'],
      saprobia: ['Alpenstrudelwurm', 'Flussschwimmschnecke', 'Großer Schneckenegel', 'Bachflohkrebs', 'Wasserassel', 'Rattenschwanzlarve', 'Schlammröhrenwurm'],
    }
  },
  computed: {
    shuffleSaprobia() {
      const a = [...this.saprobia]

      let j
      let x
      let i

      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
      }

      return a
    },
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    updateSaprobia(obj) {
      for (let i = 0; i < this.saprobia.length; i++) {
        this.answers[Object.keys(this.answers)[i]] = obj[i]
      }
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.completed = true
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level5_2',
        data: this.answers,
      })
    },
    handleDisable() {
      this.disableDragging = false
    },
    handleNext() {
      this.$router.push('/level/5/loci-method/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
