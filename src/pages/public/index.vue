<template>
  <div class="page__public">
    <navbar title="#SadarKawasan">
      <router-link to="/" class="navbar-item" slot="navbar-title">
        #SadarKawasan
      </router-link>

      <template slot="navbar-right">
        <a href="" class="navbar-item">Peta Kawasan</a>
        <a href="" class="navbar-item">Daftar Kawasan</a>
        <a href="" class="navbar-item">Kawasan Konservasi</a>
        <a href="" class="navbar-item">Media</a>
        <a href="" class="navbar-item">Tentang</a>
      </template>
    </navbar>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'public-page',
    components: { Navbar }
  }
</script>

<style lang="scss">
  .page__public {
    .navbar {
      margin: 5px 10px 0;
      z-index: 999;
    }

    .leaflet-top {
      top: 50px;
    }
  }
</style>
