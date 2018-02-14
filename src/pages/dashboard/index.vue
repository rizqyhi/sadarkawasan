<template>
  <div>
    <navbar title="Dashboard #SadarKawasan" class="dashboard-nav is-white">
      <router-link to="/dashboard" class="navbar-item" slot="navbar-title">
        Dashboard #SadarKawasan
      </router-link>

      <template slot="navbar-left">
        <router-link to="/dashboard/kawasan" class="navbar-item">Data Kawasan</router-link>
        <a href="" class="navbar-item">Kontribusi</a>
        <a href="" class="navbar-item">User</a>
      </template>

      <template slot="navbar-right">
        <b-dropdown position="is-bottom-left">
          <a class="navbar-item" slot="trigger">Rizqy Hidayat</a>

          <b-dropdown-item>Edit Profil</b-dropdown-item>
          <b-dropdown-item>Logout</b-dropdown-item>
        </b-dropdown>
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
    name: 'dashboard-page',
    components: { Navbar }
  }
</script>

<style lang="scss">
  .page__dashboard {
    padding-top: 60px;
  }

  .navbar.dashboard-nav {
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 0px 15px 1px rgba(0,0,0,0.07)
  }
</style>
