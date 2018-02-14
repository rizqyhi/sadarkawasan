<template>
  <div class="full-map" ref="fullMap">
    <leaflet-map v-bind="{center, zoom, markers}">
      <slot></slot>
    </leaflet-map>
  </div>
</template>

<script>
  import LeafletMap from './Map'

  export default {
    components: { LeafletMap },

    props: {
      center: Array,
      zoom: Number,
      markers: Array
    },

    methods: {
      initMap () {
        this.$refs.fullMap.style.height = window.innerHeight + 'px'

        window.addEventListener('resize', () => {
          this.$refs.fullMap.style.height = window.innerHeight + 'px'
        })
      }
    },

    mounted () {
      this.initMap()
    }
  }
</script>

<style lang="scss">
  .full-map {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .map {
      height: 100%
    }
  }
</style>
