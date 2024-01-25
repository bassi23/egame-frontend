<template>
  <div class="fixed main-bg">
    <base-modal
      id="intro-1"
      confirm-button-text="Next"
      @hide="hideModal"
      @confirm="toggleModal"
    >
      Modal Body
    </base-modal>
  </div>
</template>

<script>
import BaseModal from '@/components/ui/BaseModal.vue'

export default {
  name: 'ModalView',
  components: {
    BaseModal,
  },
  data() {
    return {
      gameMenu: true,
    }
  },
  methods: {
    showModal(id) {
      this.$root.$emit('bv::show::modal', id)
    },
    hideModal(id) {
      this.$root.$emit('bv::hide::modal', id)
    },
    toggleModal(id) {
      this.$root.$emit('bv::toggle::modal', id)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

</style>
