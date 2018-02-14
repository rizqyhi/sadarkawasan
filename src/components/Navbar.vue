<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <slot name="navbar-title"></slot>

      <span class="navbar-burger burger" data-target="main-nav" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="navbar-menu" ref="navbarMenu">
      <div class="navbar-start">
        <slot name="navbar-left"></slot>
      </div>
      <div class="navbar-end">
        <slot name="navbar-right"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      title: String
    },

    methods: {
      toggleNav (e) {
        this.$refs.navbarMenu.classList.toggle('is-active')
        e.target.classList.toggle('is-active')
      }
    }
  }
</script>
