<template>
  <div id="home">
    <div id="map"></div>
  </div>
</template>

<script>
  import L from 'leaflet'

  export default {
    mounted () {
      document.getElementById('map').style.height = window.innerHeight + 'px'

      var map = L.map('map', {
        center: [-2.5, 118],
        zoom: 5
      })

      map.zoomControl.setPosition('bottomright')

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map)
    }
  }
</script>

<style lang="scss">
  #map {
    height: 300px;
  }
  .test {
    background: #333;
    color: #ccc
  }
</style>
