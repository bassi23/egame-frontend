<template>
  <div class="container">
    <p class="question">
      {{ dragAndDrop.question }}
    </p>

    <drag
      v-for="choice in dragAndDrop.strategies"
      :key="choice"
      class="drag"
      :data="choice"
      go-back
      @cut="remove(choice)"
    >
      {{ choice }}
    </drag>

    <div class="drop-container">
      <drop
        class="drop"
        :class="completed && isPlanungsPhase ? 'correct' : completed && !isPlanungsPhase ? 'wrong' : ''"
        @drop="planungsPhase"
      >
        Planungsphase:
        <span
          v-for="(item, index) in planungsPhaseDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>

      <drop
        class="drop"
        :class="completed && isHandlungsPhase ? 'correct' : completed && !isHandlungsPhase ? 'wrong' : ''"
        @drop="handlungsPhase"
      >
        Handlungsphase:
        <span
          v-for="(item, index) in handlungsPhaseDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>

      <drop
        class="drop"
        :class="completed && isReflexionsPhase ? 'correct' : completed && !isReflexionsPhase ? 'wrong' : ''"
        @drop="reflexionsPhase"
      >
        Reflexionsphase:
        <span
          v-for="(item, index) in reflexionsPhaseDropped"
          :key="index"
        >
          {{ item }}
        </span>
      </drop>
    </div>
    <button
      class="reset-button"
      @click="reset"
    >
      Reset
    </button>

    <p
      v-if="completed"
      class="question"
    >
      {{ dragAndDrop.text }}
    </p>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-easy-dnd'

export default {
  name: 'ZimmermanModel',
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
      planungsPhaseDropped: [],
      handlungsPhaseDropped: [],
      reflexionsPhaseDropped: [],
      isPlanungsPhase: false,
      isHandlungsPhase: false,
      isReflexionsPhase: false,
    }
  },
  // computed: {
  // },
  watch: {
    planungsPhaseDropped() {
      this.checkPlanungsPhase()
    },
    handlungsPhaseDropped() {
      this.checkHandlungsPhase()
    },
    reflexionsPhaseDropped() {
      this.checkReflexionsPhase()
    },
  },
  methods: {
    planungsPhase(e) {
      this.planungsPhaseDropped.push(e.data)
      this.$emit('planungs-phase', this.planungsPhaseDropped)
    },
    handlungsPhase(e) {
      this.handlungsPhaseDropped.push(e.data)
      this.$emit('handlungs-phase', this.handlungsPhaseDropped)
    },
    reflexionsPhase(e) {
      this.reflexionsPhaseDropped.push(e.data)
      this.$emit('reflexions-phase', this.reflexionsPhaseDropped)
    },
    checkPlanungsPhase() {
      if (this.planungsPhaseDropped.length === 2 && this.planungsPhaseDropped.includes('Kommunikation') && this.planungsPhaseDropped.includes('Selbstmotivation')) {
        this.isPlanungsPhase = true
      } else {
        this.isPlanungsPhase = false
      }
    },
    checkHandlungsPhase() {
      if (this.handlungsPhaseDropped.length === 1 && this.handlungsPhaseDropped.includes('Selbstbeobachtung')) {
        this.isHandlungsPhase = true
      } else {
        this.isHandlungsPhase = false
      }
    },
    checkReflexionsPhase() {
      if (this.reflexionsPhaseDropped.length === 1 && this.reflexionsPhaseDropped.includes('Attribution')) {
        this.isReflexionsPhase = true
      } else {
        this.isReflexionsPhase = false
      }
    },
    reset() {
      this.planungsPhaseDropped = []
      this.handlungsPhaseDropped = []
      this.reflexionsPhaseDropped = []
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
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
}

.question {
    padding: 2rem;
    font-weight: 450;
    padding: 1rem;
    margin-bottom: 0.375em;
    background-color: #51b9d6;
    color: white;
    border-radius: 1rem;
    font-size: 1.2rem;
    max-width: max-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
  width: 100%;
  height: 100px;
  margin: 20px 10px;
  padding: 0.5rem;
  border: 2px solid black;
  // border-radius: 7em;
  font-weight: 450;
  font-size: 1.2rem;
  letter-spacing: normal;
  background-color: #a7cad4;
  color: black;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.drop-container {
  display: flex;
  justify-content: center;
}

.correct {
  background-color: #67C23A;
}

.wrong {
  background-color: #F56C6C;
}

.reset-button {
  margin-bottom: 1.5rem;
  max-width: 100px;
  background-color: #b46262;
  color: white;
  font-weight: bold;
  outline: none;
  border-radius: 1rem;
}

// .mask {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   border: 1px solid black;
//   background-color: rgba(255, 0, 0, 0.2);
//   width: 200px;
//   height: 100px;
// }

// .mask::before {
//   content: "MASK";
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   color: rgba(0, 0, 0, 0.4);
//   font-size: 25px;
//   font-weight: bold;
// }

// .drop-allowed {
//   background-color: rgba(0, 255, 0, 0.2);
// }

// .drop-forbidden {
//   background-color: rgba(255, 0, 0, 0.2);
// }

// .drop-in {
//   box-shadow: 0 0 5px rgba(0, 0, 255, 0.4);
// }

// .list-enter,
// .list-leave-to {
//   opacity: 0;
// }

// .list-leave-active {
//   position: absolute;
// }
</style>
