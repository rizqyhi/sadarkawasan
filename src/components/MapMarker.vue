<template></template>

<script>
  import L from 'leaflet'

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
      latLng: Array,
      title: String,
      properties: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },

    methods: {
      generateMarker (color = '#333') {
        let baseMarker = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><path style="fill:' + color + '" d="M40,0C26.191,0,15,11.194,15,25c0,23.87,25,55,25,55s25-31.13,25-55C65,11.194,53.807,0,40,0z M40,38.8c-7.457,0-13.5-6.044-13.5-13.5S32.543,11.8,40,11.8c7.455,0,13.5,6.044,13.5,13.5S47.455,38.8,40,38.8z"></path></svg>'
        let svgUri = encodeURI('data:image/svg+xml,' + baseMarker).replace('#', '%23')

        return L.icon({
          iconUrl: svgUri,
          iconSize: 40,
          iconAnchor: [20, 40],
          tooltipAnchor: [0, -40]
        })
      }
    },

    mounted () {
      L.marker(this.latLng, {icon: this.generateMarker(this.properties.color)})
        .on('click', e => this.$emit('onClick', e, this.properties))
        .bindTooltip(this.title, {direction: 'top'})
        .addTo(this.$parent.map)
    }
  }
</script>
