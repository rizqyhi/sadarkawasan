<template>
  <div class="form-section">
    <h4 class="is-size-5 form-section__title">{{ title }}</h4>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  .form-section {
    margin-bottom: 2rem;
  }

  .form-section__title {
    margin: 0 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
  }
</style>
