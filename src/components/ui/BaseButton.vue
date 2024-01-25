<template>
  <div>
    <b-button
      class="base-button"
      :class="variant"
      :type="type"
      :disabled="disabled"
      :variant="variant"
      :size="size"
      @click.prevent="$emit('click')"
    >
      <slot>{{ text }}</slot>
    </b-button>
  </div>
</template>

<script>

export default {
  name: 'BaseButton',
  components: {
    // BSV
  },

  props: {
    type: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'Button',
    },
  },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.base-button {
    /* margin-top: 0.5rem; */
    padding: 0.5rem 1rem;
    height: 2.5rem;
    min-width: 9rem;
    color: $dark;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 14px;
    justify-items: center;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    border: 2px solid $dark;
}

.base-button:hover,
.base-button:focus,
.base-button:active {
  background-position: right center; /* change the direction of the change here */
  color: $dark !important;
  border: 2px solid $dark;
}

.primary {
  background-image: linear-gradient(to right, #f09819 0%, #ebdc5c 51%, #f09819 100%);
}
.btn-primary.disabled, .btn-primary:disabled {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}

.secondary {
  background-image: linear-gradient(to right, #546e7a 0%, #90a4ae 51%, #607d8b 100%);
}
.btn-secondary.disabled, .btn-secondary:disabled {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}

.success {
  background-image: linear-gradient(to right, #14b614 0%, #68eb5c 51%, #39da08 100%);
}
.btn-success.disabled, .btn-success:disabled {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}

.warning {
  background-image: linear-gradient(to right, #f57c00 0%, #ffb74d 51%, #fb8c00 100%);
}
.btn-warning.disabled, .btn-warning:disabled {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}

.danger {
  background-image: linear-gradient(to right, #eb3349 0%, #f45c43 51%, #eb3349 100%);
}
.btn-danger.disabled, .btn-danger:disabled {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
</style>
