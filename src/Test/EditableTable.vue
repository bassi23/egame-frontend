<template>
  <div class="fixed main-bg">
    <b-editable-table
      v-model="items"
      bordered
      class="editable-table"
      :fields="fields"
      @input-change="handleInput"
    >
      <template #cell(isActive)="data">
        <b-form-input
          type="text"
          :value="data.value"
        />
        <!-- <span v-if="data.value">Yes</span>
        <span v-else>No</span> -->
      </template>
    </b-editable-table>
  </div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table'

export default {
  name: 'EditableTable',
  components: {
    BEditableTable,
  },
  data() {
    return {
      fields: [
        {
          key: 'task',
          label: 'Aufgabe',
          type: 'text',
          editable: true,
          placeholder: '',
          class: 'name-col',
        },
        {
          key: 'priority',
          label: 'Priorität (A,B,C)',
          type: 'text',
          editable: true,
          placeholder: '',
          class: 'name-col',
        },
        {
          key: 'timeRequirement',
          label: 'Zeitbedarf',
          type: 'text',
          editable: true,
          placeholder: '',
          class: 'name-col',
        },
        {
          key: 'begin',
          label: 'Beginn',
          type: 'text',
          editable: true,
          placeholder: '',
          class: 'name-col',
        },
        {
          key: 'finishedUntil',
          label: 'Fertig bis',
          type: 'text',
          editable: true,
          placeholder: '',
          class: 'name-col',
        },
        {
          key: 'isDone',
          label: 'Erledigt?',
          type: 'checkbox',
          editable: true,
          class: 'is-active-col',
        },
      ],
      items: [
        {
          id: 1, task: 'Enter...', priority: 'Enter...', timeRequirement: 'Enter...', begin: 'Enter...', finishedUntil: 'Enter...', isDone: false,
        },
        {
          id: 2, task: 'Enter...', priority: 'Enter...', timeRequirement: 'Enter...', begin: 'Enter...', finishedUntil: 'Enter...', isDone: true,
        },
        {
          id: 3, task: '', priority: '', timeRequirement: '', begin: '', finishedUntil: '', isDone: true,
        },
      ],
    }
  },
  methods: {
    handleInput(value) {
      // eslint-disable-next-line no-console
      console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

</style>
