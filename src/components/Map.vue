<template>
  <div ref="map" class="map">
    <slot></slot>
  </div>
</template>

<script>
  import L from 'leaflet'

  export default {
    name: 'leaflet-map',
    props: {
      center: {
        type: Array,
        default: function () {
          return [-2.5, 118]
        }
      },
      zoom: {
        type: Number,
        default: 5
      },
      markers: Array
    },

    data () {
      return {
        map: null
      }
    },

    methods: {
      initMap () {
        this.map = L.map(this.$refs.map, {
          center: [this.center[0], this.center[1]],
          zoom: this.zoom
        })

        this.map.zoomControl.setPosition('bottomright')

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map)
      }
    },

    mounted () {
      this.initMap()
    }
  }
</script>

<style lang="scss">

</style>
