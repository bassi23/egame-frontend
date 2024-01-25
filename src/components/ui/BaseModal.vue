<template>
  <div>
    <b-modal :id="id">
      <div class="d-block">
        <slot />
        <b-button @click.prevent="$emit('hide', id)">
          Close
        </b-button>
        <b-button @click.prevent="$emit('confirm', id)">
          {{ confirmButtonText }}
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'BaseModal',
  components: {
    // BSV
  },

  props: {
    id: {
      type: String,
      default: '',
    },
    confirmButtonText: {
      type: String,
      default: 'OK',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

</style>
