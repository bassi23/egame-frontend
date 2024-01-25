<template>
  <div class="container">
    <p class="question">
      <span>5. Selbstreguliertes Lernen ist ein,</span>
      <drop
        class="drop"
        :class="completed && isAktiver ? 'correct' : completed && !isAktiver ? 'wrong' : ''"
        @drop="aktiver"
      >
        <span
          v-for="(item, index) in aktiverDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>

      <span>konstruktiver Prozess, bei dem der Lernende sich Ziele setzt und zudem seine Kognitionen, seine</span>
      <drop
        class="drop"
        :class="completed && isMotivation ? 'correct' : completed && !isMotivation ? 'wrong' : ''"
        @drop="motivation"
      >
        <span
          v-for="(item, index) in motivationDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>

      <span>und sein Verhalten in Abhängigkeit von dessen Zielen und den gegebenen</span>
      <drop
        class="drop"
        :class="completed && isExternalCircumstances ? 'correct' : completed && !isExternalCircumstances ? 'wrong' : ''"
        @drop="externalCircumstances"
      >
        <span
          v-for="(item, index) in externalCircumstancesDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>

      <span>beobachtet, reguliert und</span>
      <drop
        class="drop"
        :class="completed && isControlled ? 'correct' : completed && !isControlled ? 'wrong' : ''"
        @drop="controlled"
      >
        <span
          v-for="(item, index) in controlledDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>
    </p>
    <drag
      v-for="choice in dragAndDrop.choices"
      :key="choice"
      class="drag"
      :data="choice"
      go-back
      @cut="remove(choice)"
    >
      {{ choice }}
    </drag>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-easy-dnd'

export default {
  name: 'SelfRegulatedLearning',
  components: {
    Drag,
    Drop,
  },
  props: {
    dragAndDrop: {
      type: Object,
      default: () => ({}),
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      aktiverDropped: '',
      motivationDropped: '',
      externalCircumstancesDropped: '',
      controlledDropped: '',
      isAktiver: false,
      isMotivation: false,
      isExternalCircumstances: false,
      isControlled: false,
    }
  },
  // computed: {
  // },
  watch: {
    aktiverDropped() {
      this.checkAktiver()
    },
    motivationDropped() {
      this.checkMotivation()
    },
    externalCircumstancesDropped() {
      this.checkExternalCircumstances()
    },
    controlledDropped() {
      this.checkControlled()
    },
  },
  methods: {
    aktiver(e) {
      this.aktiverDropped = e.data
      this.$emit('aktiver', this.aktiverDropped)
    },
    motivation(e) {
      this.motivationDropped = e.data
      this.$emit('motivation', this.motivationDropped)
    },
    externalCircumstances(e) {
      this.externalCircumstancesDropped = e.data
      this.$emit('external-circumstances', this.externalCircumstancesDropped)
    },
    controlled(e) {
      this.controlledDropped = e.data
      this.$emit('controlled', this.controlledDropped)
    },
    checkAktiver() {
      if (this.aktiverDropped.includes('aktiver')) {
        this.isAktiver = true
      } else {
        this.isAktiver = false
      }
    },
    checkMotivation() {
      if (this.motivationDropped.includes('Motivation')) {
        this.isMotivation = true
      } else {
        this.isMotivation = false
      }
    },
    checkExternalCircumstances() {
      if (this.externalCircumstancesDropped.includes('äußeren Umstände')) {
        this.isExternalCircumstances = true
      } else {
        this.isExternalCircumstances = false
      }
    },
    checkControlled() {
      if (this.controlledDropped.includes('kontrolliert')) {
        this.isControlled = true
      } else {
        this.isControlled = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container,
.container:after,
.container:before {
    box-sizing: border-box;
}

.container {
    display: inline-flex;
    // flex-wrap: wrap;
    flex-direction: column;
    text-align: left;
}

.question {
    font-weight: 450;
    padding: 2rem;
    background-color: #51b9d6;
    color: white;
    border-radius: 2rem;
    max-width: max-content;
    font-size: 1.2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    display: inline;
    line-height: 2.5rem;
}

.question span {
  padding: 0.25rem;
}

.drag {
  min-width: min-content;
  max-width: max-content;
  display: inline-flex;
  align-items: center;
  margin-left: 44vw;
   margin-top: 42vh;
   border-color: black;
   outline-width: 3px;
   outline-color: black;
   border-radius: 100px;
  margin: 10px 10px 0 10px;
  font-size: 20px;
  background-color:#a7cad4;
  transition: all 0.5s;
  text-align: left;
  padding: 0 1rem;
}

.drag:visited,.drag:link{
  text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    position: absolute;
}
.drag:hover{
  transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.drag:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.drag-white {
    background-color: #fff;
    color: #777;
}

.drag::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.drag-white::after {
    background-color: #fff;
}

.drag:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

.drag-animated {
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.drop {
  margin-bottom: -0.5rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: .5rem;
  background-color: #a7cad4;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.correct {
  background-color: #67C23A;
}

.wrong {
  background-color: #F56C6C;
}

</style>
