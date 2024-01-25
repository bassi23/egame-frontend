<template>
  <div>
    <article>
      <b-button
        v-if="editable"
        class="add-button"
        variant="success"
        @click="addRowwHandler"
      >
        Add Row
      </b-button>

      <b-table
        class="b-table"
        :items="tableItems"
        :fields="fields"
        striped
        hover
        responsive
        fixed
      >
        <!-- index -->
        <!-- <template #cell(index)="data">
          {{ data.index + 1 }}
        </template> -->

        <template
          v-for="(field, index) in fields"
          #[`cell(${field.key})`]="data"
        >
          <!-- index -->
          <span
            v-if="field.type === 'index'"
            :key="'index_' + index"
          >
            {{ data.index + 1 }}
          </span>

          <!-- Edit / Delete buttons -->
          <div
            v-if="field.type === 'edit'"
            :key="'edit_' + index"
          >
            <b-button @click="editRowHandler(data)">
              <span v-show="!tableItems[data.index].isEdit">Edit</span>
              <span v-show="tableItems[data.index].isEdit">Done</span>
            </b-button>
            <b-button
              class="delete-button"
              variant="danger"
              @click="removeRowHandler(data.index)"
            >
              Remove
            </b-button>
          </div>

          <!-- Checkbox -->
          <b-form-checkbox
            v-else-if="field.type === 'checkbox' && tableItems[data.index].isEdit"
            :key="'checkbox_' + index"
            v-model="tableItems[data.index][field.key]"
            @change="(value) => inputHandler(value, data.index, field.key)"
          />

          <!-- Input -->
          <b-form-input
            v-else-if="editable ? field.type === 'text' && tableItems[data.index].isEdit : field.type === 'text'"
            :key="'input_' + index"
            :type="field.type"
            :value="tableItems[data.index][field.key]"
            @blur="(e) => inputHandler(e.target.value, data.index, field.key)"
          />

          <!-- Show table items -->
          <span
            v-else
            :key="index"
          >
            <span v-if="field.type === 'checkbox'">
              <b-form-checkbox
                :key="index"
                :checked="tableItems[data.index][field.key]"
                :disabled="true"
              />
            </span>
            <span v-else-if="field.type === 'title'">
              <b>{{ data.value }}</b>
            </span>
            <span v-else>
              {{ data.value }}
            </span>
          </span>
        </template>
      </b-table>
    </article>
  </div>
</template>

<script>
export default {
  name: 'EditableTable',
  components: {},
  props: {
    value: {
      type: Array,
      default: () => ([]),
    },
    fields: {
      type: Array,
      default: () => ([]),
    },
    editable: {
      type: Boolean,
      requred: true,
    },
  },
  data() {
    return {
      tableItems: this.value.map(item => ({ ...item, isEdit: false })),
    }
  },
  methods: {
    editRowHandler(data) {
      this.tableItems[data.index].isEdit = !this.tableItems[data.index].isEdit
    },
    inputHandler(value, index, key) {
      this.tableItems[index][key] = value
      this.$set(this.tableItems, index, this.tableItems[index])
      this.$emit('input', this.tableItems)
    },
    addRowwHandler() {
      const newRow = this.fields.reduce((a, c) => ({ ...a, [c.key]: null }), {})
      newRow.isEdit = true
      this.tableItems.unshift(newRow)
      this.$emit('input', this.tableItems)
    },
    removeRowHandler(index) {
      this.tableItems = this.tableItems.filter((item, i) => i !== index)
      this.$emit('input', this.tableItems)
    },
  },
}
</script>

<style lang="scss" scoped>
.add-button {
    margin-bottom: 10px;
}

.delete-button {
    margin-left: 5px;
}
</style>
