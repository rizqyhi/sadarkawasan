<template>
  <div ref="map" class="map-editor"></div>
</template>

<script>
  import L from 'leaflet'
  import 'leaflet.pm'
  import 'leaflet.pm/dist/leaflet.pm.css'

  // BUG https://github.com/Leaflet/Leaflet/issues/4968
  import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
  import iconUrl from 'leaflet/dist/images/marker-icon.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
  L.Marker.prototype.options.icon = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  })

  export default {
    props: {
      markerCoord: Array,
      polygonArea: Array
    },

    data () {
      return {
        polygon: []
      }
    },

    watch: {
      polygon (coords) {
        this.$emit('polygon-updated', coords.map(item => [item.lat, item.lng]))
      }
    },

    methods: {
      initMap () {
        this.$refs.map.style.height = window.innerHeight + 'px'

        window.addEventListener('resize', () => {
          this.$refs.map.style.height = window.innerHeight + 'px'
        })

        var map = L.map(this.$refs.map, {
          center: [this.markerCoord[0], this.markerCoord[1]],
          zoom: 5
        })

        map.zoomControl.setPosition('bottomright')

        map.pm.addControls({
          position: 'bottomright',
          drawMarker: false,
          drawPolyline: false,
          drawRectangle: false,
          drawCircle: false,
          drawPolygon: true,
          cutPolygon: false
        })

        map.on('pm:create', e => {
          let polygon = e.layer
          this.polygon = polygon.getLatLngs()[0]

          polygon.on('pm:edit', e => {
            this.polygon = e.target.getLatLngs()[0]
          })
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)

        let marker = L.marker(this.markerCoord, {
          draggable: true,
          autoPan: true,
          pmIgnore: true
        }).addTo(map)

        marker.on('dragend', e => {
          map.flyTo(e.target.getLatLng())

          this.$emit('marker-updated', e.target.getLatLng())
        })
      }
    },

    mounted () {
      this.initMap()
    }
  }
</script>

<style lang="scss">
  .map-editor {
    position: fixed;
    width: calc(50% - 0.75rem);
    top: 0;
    right: 0;

    &::after {
      content: '';
      display: block;
      height: 100%;
      width: 1px;
      position: absolute;
      z-index: 999;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, .3);
    }
  }
</style>
