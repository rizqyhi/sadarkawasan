<template>
  <div class="page page--kawasan-index">
    <full-map>
      <map-marker v-for="marker in markers" :key="marker.properties.id" v-bind="marker" @onClick="onMarkerClick"></map-marker>
    </full-map>

    <div class="columns">
      <div class="column is-one-third">
        <div class="kawasan-box">
          <div class="kawasan-box__create">
            <router-link :to="{name: 'kawasan.add'}" class="button is-success is-fullwidth">Tambah Data Kawasan</router-link>
          </div>

          <b-field class="kawasan-box__filter">
            <b-input placeholder="Cari kawasan" v-model="searchTerm" />
          </b-field>

          <kawasan-list v-bind="{kawasan}"></kawasan-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullMap from '@/components/FullMap'
  import MapMarker from '@/components/MapMarker'
  import KawasanList from './KawasanList'
  import kawasanType from '@/utils/kawasanType'
  import locationService from '@/services/location'

  export default {
    components: { FullMap, MapMarker, KawasanList },

    data () {
      return {
        kawasan: [],
        searchTerm: ''
      }
    },

    computed: {
      markers () {
        return this.kawasan.map(item => {
          return {
            title: kawasanType[item.type].name + ': ' + item.name,
            latLng: [item.lat, item.lng],
            properties: {
              id: item.id,
              type: item.type,
              color: kawasanType[item.type].color
            }
          }
        })
      }
    },

    methods: {
      getKawasanFromDb () {
        locationService.getAll()
          .then(response => {
            this.kawasan = this.kawasan.concat(response.data.data)
          })
      },

      onMarkerClick (e, properties) {
        this.$router.push('kawasan/' + properties.id)
      }
    },

    mounted () {
      this.getKawasanFromDb()
    }
  }
</script>

<style lang="scss">
  .kawasan-box {
    position: relative;
    z-index: 99;
    background: #fff;
    box-shadow: 1px 1px 5px rgba(#000, .3)
  }

  .kawasan-box__filter {
    padding: 1rem;
    border-bottom: 1px solid $white-ter;

    &.field {
      margin-bottom: 0
    }
  }

  .kawasan-box__create {
    padding: 1rem;
    border-bottom: 1px solid $white-ter;
  }
</style>
