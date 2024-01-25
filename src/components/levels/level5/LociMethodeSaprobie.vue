<template>
  <div class="container">
    <b-table-simple
      striped
      hover
      responsive
    >
      <b-thead head-variant="">
        <b-tr>
          <b-th>Güteklasse</b-th>
          <b-th>Saprobie</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td variant="">
            {{ grade[0] }}
          </b-td>
          <b-td
            variant=""
            rowspan="7"
          >
            <drop-list
              :items="choices"
              mode="cut"
              class="drop-list"
              @reorder="$event.apply(choices)"
              @insert="insert"
            >
              <template #item="{item, index}">
                <drag
                  :key="item"
                  :data="item"
                  class="drag"
                  :class="classStyes(index)"
                  :disabled="disabled || completed"
                  @cut="remove(choices, item)"
                >
                  {{ item }}
                </drag>
              </template>
            </drop-list>
          </b-td>
        </b-tr>
        <b-tr>
          <b-td variant="">
            {{ grade[1] }}
          </b-td>
        </b-tr>
        <b-tr>
          <b-td variant="">
            {{ grade[2] }}
          </b-td>
        </b-tr>
        <b-tr>
          <b-td variant="">
            {{ grade[3] }}
          </b-td>
        </b-tr>
        <b-tr>
          <b-td variant="">
            {{ grade[4] }}
          </b-td>
        </b-tr>
        <b-tr>
          <b-td variant="">
            {{ grade[5] }}
          </b-td>
        </b-tr>
        <b-tr>
          <b-td variant="">
            {{ grade[6] }}
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import {
  Drag,
  DropList,
} from 'vue-easy-dnd'

export default {
  name: 'LociMethodeSaprobie',
  components: {
    Drag,
    DropList,
  },
  props: {
    grade: {
      type: Array,
      default: () => ([]),
    },
    saprobia: {
      type: Array,
      default: () => ([]),
    },
    shuffleSaprobia: {
      type: Array,
      default: () => ([]),
    },
    completed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // choices: [],
    }
  },
  computed: {
    choices() {
      return this.disabled ? [...this.saprobia] : [...this.shuffleSaprobia]
    },
  },
  watch: {
    choices(obj) {
      this.$emit('update-saprobia', obj)
    },
  },
  // mounted() {
  //   this.choices = JSON.parse(JSON.stringify(this.saprobia))
  // },
  methods: {
    classStyes(index) {
      if (this.disabled && !this.completed) {
        return 'disable'
      }

      if (this.completed && this.choices[index] === this.saprobia[index]) {
        return 'correct'
      }

      if (this.completed) {
        return 'wrong'
      }

      return ''
    },
    insert(event) {
      this.choices.splice(event.index, 0, event.data)
    },
    remove(array, value) {
      const index = array.indexOf(value)
      array.splice(index, 1)
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

.table th, .table td {
  // padding: 0.75rem;
  padding: 0;
  // vertical-align: top;
  vertical-align: inherit;
}

.drop-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.drag {
  min-width: min-content;
  max-width: 300px;
  background-color: rgb(220, 220, 255);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  padding: 0.75rem;
  font-size: 20px;
  transition: all 0.5s;
}

.disable {
  background-color: #6c757d;
}

.correct {
  background-color: #67C23A;
}

.wrong {
  background-color: #F56C6C;
}

</style>
