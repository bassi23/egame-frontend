<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="stretched level5-garden">
    <img
      src="/images/level5/balina.png"
      alt="Balina"
      class="character character_position_top character_animation_top"
      style="width: 20rem; height: auto"
    >
    <div class="box boxContainer">
      <h1 class="heading">
        Mindmaps
      </h1>

      <div v-if="theoreticalContent">
        <p class="p">
          Eine Mindmap (bzw. „Mind-Map“) ist eine alternative Form, um Notizen anzufertigen sowie eine Brainstorming-Methode. Mindmaps eignen sich zum Verknüpfen und Speichern bekannter Inhalte. Es ist eine sehr aktive und ansprechende Form der Wiederholung. Die Mindmap-Methode ist auch hilfreich, um sich Überblick zu verschaffen.
        </p>
        <h3 class="h1">
          Schritt für Schritt zur Mindmap
        </h3>
        <ol>
          <li class="p">
            Kernthema finden
            <ul>
              <li>
                wird in der Mitte des Blattes eingetragen.
              </li>
              <li>
                von diesem Mittelpunkt aus verzweigen sich die grundlegenden Ordnungsideen in unterschiedlichen Gestaltungsformen.
              </li>
              <li>
                die Mindmap sollte nicht mehr als sieben Hauptzweige haben
              </li>
            </ul>
          </li>
          <li class="p">
            Unterthemen festlegen und als Verzweigungen einzeichnen
          </li>
          <li class="p">
            Ergänzen von Details in Form von Beschriftungen (ein Wort) oder von Listen.
          </li>
          <li class="p">
            Visualisierung
            <ul>
              <li>
                Verwende verschiedene Schriftgrößen
              </li>
              <li>
                füge Bilder hinzu
              </li>
              <li>
                verwende verschiedene Farben
              </li>
            </ul>
          </li>
        </ol>
        <base-button
          variant="primary"
          text="Start"
          @click="theoreticalContent = false"
        />
      </div>

      <div v-else>
        <table>
          <tbody>
            <tr>
              <td
                colspan="4"
                rowspan="4"
              />
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeTopLeft2', $event.target.value)"
                />
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeTopRight2', $event.target.value)"
                />
              </td>
              <td
                colspan="4"
                rowspan="4"
              />
            </tr>
            <tr>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeTopLeft2', $event.target.value)"
                >
              </td>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeTopRight2', $event.target.value)"
                >
              </td>
            </tr>
            <tr>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeTopLeft1', $event.target.value)"
                />
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeTopRight1', $event.target.value)"
                />
              </td>
            </tr>
            <tr>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeTopLeft1', $event.target.value)"
                >
              </td>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeTopRight1', $event.target.value)"
                >
              </td>
            </tr>
            <tr>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeLeftTop2', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeLeftTop2', $event.target.value)"
                >
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeLeftTop1', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeLeftTop1', $event.target.value)"
                >
              </td>
              <td
                colspan="2"
                rowspan="2"
                class="node"
              >
                <textarea
                  :rows="MID_ROWS"
                  :cols="MID_COLUMNS"
                  @input="handleText('midpoint', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeRightTop1', $event.target.value)"
                >
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeRightTop1', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeRightTop2', $event.target.value)"
                >
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeRightTop2', $event.target.value)"
                />
              </td>
            </tr>
            <tr>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeLeftBottom2', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeLeftBottom2', $event.target.value)"
                >
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeLeftBottom1', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeLeftBottom1', $event.target.value)"
                >
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeRightBottom1', $event.target.value)"
                >
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeRightBottom1', $event.target.value)"
                />
              </td>
              <td class="edge horizontal">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeRightBottom2', $event.target.value)"
                >
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeRightBottom2', $event.target.value)"
                />
              </td>
            </tr>
            <tr>
              <td
                colspan="4"
                rowspan="4"
              />
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeBottomLeft1', $event.target.value)"
                >
              </td>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeBottomRight1', $event.target.value)"
                >
              </td>
              <td
                colspan="4"
                rowspan="4"
              />
            </tr>
            <tr>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeBottomLeft1', $event.target.value)"
                />
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeBottomRight1', $event.target.value)"
                />
              </td>
            </tr>
            <tr>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeBottomLeft2', $event.target.value)"
                >
              </td>
              <td class="edge vertical">
                <input
                  type="text"
                  :size="SIZE"
                  @input="handleInput('edgeBottomRight2', $event.target.value)"
                >
              </td>
            </tr>
            <tr>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeBottomLeft2', $event.target.value)"
                />
              </td>
              <td class="node">
                <textarea
                  :rows="ROWS"
                  :cols="COLUMNS"
                  @input="handleText('nodeBottomRight2', $event.target.value)"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- <img
        src="@/assets/images/mindmapping.png"
        alt="Mindmapping"
      > -->

        <base-button
          variant="primary"
          text="Next"
          :disabled="false"
          @click="handleNext"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import timeMixin from '@/mixins/timeMixin'

const COLUMNS = 15
const ROWS = 2
const MID_COLUMNS = 45
const MID_ROWS = 6
const SIZE = 10

export default {
  name: 'Level5Mindmaps',
  components: {
    BaseButton,
  },
  mixins: [timeMixin],
  data() {
    return {
      theoreticalContent: true,
      answers: {
        nodeTopLeft1: '',
        nodeTopRight1: '',
        nodeTopLeft2: '',
        nodeTopRight2: '',
        nodeBottomLeft1: '',
        nodeBottomRight1: '',
        nodeBottomLeft2: '',
        nodeBottomRight2: '',
        nodeLeftTop1: '',
        nodeLeftBottom1: '',
        nodeLeftTop2: '',
        nodeLeftBottom2: '',
        nodeRightTop1: '',
        nodeRightBottom1: '',
        nodeRightTop2: '',
        nodeRightBottom2: '',
        midpoint: '',
        edgeTopLeft1: '',
        edgeTopRight1: '',
        edgeTopLeft2: '',
        edgeTopRight2: '',
        edgeBottomLeft1: '',
        edgeBottomRight1: '',
        edgeBottomLeft2: '',
        edgeBottomRight2: '',
        edgeLeftTop1: '',
        edgeLeftBottom1: '',
        edgeLeftTop2: '',
        edgeLeftBottom2: '',
        edgeRightTop1: '',
        edgeRightBottom1: '',
        edgeRightTop2: '',
        edgeRightBottom2: '',
      },
      COLUMNS,
      ROWS,
      MID_COLUMNS,
      MID_ROWS,
      SIZE,
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.startTimer()
  },
  methods: {
    handleInput(id, value) {
      if (id === 'edgeTopLeft1') this.answers.edgeTopLeft1 = value
      if (id === 'edgeTopRight1') this.answers.edgeTopRight1 = value
      if (id === 'edgeTopLeft2') this.answers.edgeTopLeft2 = value
      if (id === 'edgeTopRight2') this.answers.edgeTopRight2 = value
      if (id === 'edgeBottomLeft1') this.answers.edgeBottomLeft1 = value
      if (id === 'edgeBottomRight1') this.answers.edgeBottomRight1 = value
      if (id === 'edgeBottomLeft2') this.answers.edgeBottomLeft2 = value
      if (id === 'edgeBottomRight2') this.answers.edgeBottomRight2 = value
      if (id === 'edgeLeftTop1') this.answers.edgeLeftTop1 = value
      if (id === 'edgeLeftBottom1') this.answers.edgeLeftBottom1 = value
      if (id === 'edgeLeftTop2') this.answers.edgeLeftTop2 = value
      if (id === 'edgeLeftBottom2') this.answers.edgeLeftBottom2 = value
      if (id === 'edgeRightTop1') this.answers.edgeRightTop1 = value
      if (id === 'edgeRightBottom1') this.answers.edgeRightBottom1 = value
      if (id === 'edgeRightTop2') this.answers.edgeRightTop2 = value
      if (id === 'edgeRightBottom2') this.answers.edgeRightBottom2 = value
    },
    handleText(id, value) {
      if (id === 'midpoint') this.answers.midpoint = value
      if (id === 'nodeTopLeft1') this.answers.nodeTopLeft1 = value
      if (id === 'nodeTopRight1') this.answers.nodeTopRight1 = value
      if (id === 'nodeTopLeft2') this.answers.nodeTopLeft2 = value
      if (id === 'nodeTopRight2') this.answers.nodeTopRight2 = value
      if (id === 'nodeBottomLeft1') this.answers.nodeBottomLeft1 = value
      if (id === 'nodeBottomRight1') this.answers.nodeBottomRight1 = value
      if (id === 'nodeBottomLeft2') this.answers.nodeBottomLeft2 = value
      if (id === 'nodeBottomRight2') this.answers.nodeBottomRight2 = value
      if (id === 'nodeLeftTop1') this.answers.nodeLeftTop1 = value
      if (id === 'nodeLeftBottom1') this.answers.nodeLeftBottom1 = value
      if (id === 'nodeLeftTop2') this.answers.nodeLeftTop2 = value
      if (id === 'nodeLeftBottom2') this.answers.nodeLeftBottom2 = value
      if (id === 'nodeRightTop1') this.answers.nodeRightTop1 = value
      if (id === 'nodeRightBottom1') this.answers.nodeRightBottom1 = value
      if (id === 'nodeRightTop2') this.answers.nodeRightTop2 = value
      if (id === 'nodeRightBottom2') this.answers.nodeRightBottom2 = value
    },
    updateTime() {
      this.answers.time = this.seconds
    },
    handleCompleted() {
      this.updateTime()
      this.$store.dispatch({
        type: 'insertAndUpdate',
        level: 'level5_3',
        data: this.answers,
      })
    },
    handleNext() {
      this.handleCompleted()
      this.$router.push('/level/5/mindmaps/end')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

table {
  width: 100%;
}

table, th, td {
  border: 0px;
  border-spacing: 10px;
  border-collapse: separate;
}

.node {
  border: 2px solid rgb(20, 20, 20);
}

.edge {
  height: 50px;
}

.vertical {
  border-left: 5px solid rgb(20, 20, 20);
}

.horizontal {
  border-top: 5px solid rgb(20, 20, 20);
}
</style>
