<template>
  <div class="page page--create-kawasan">
    <div class="columns">
      <div class="column kawasan-form">
        <h1 class="page-title">Tambah Kawasan</h1>

        <form-basic-info :kawasan="kawasan"></form-basic-info>

        <form-detail-info :kawasan="kawasan"></form-detail-info>

        <form-contacts :kawasan="kawasan"></form-contacts>

        <form-data-source :kawasan="kawasan"></form-data-source>

        <div class="kawasan-form__action">
          <button class="button is-primary" :class="{'is-loading': isLoading}" @click="saveData">Simpan Data Kawasan</button>
        </div>
      </div><!-- .kawasan-form -->

      <div class="column">
        <map-editor
          :marker-coord="[kawasan.lat, kawasan.lng]"
          :polygon-area="polygon"
          @marker-updated="onMarkerUpdate"
          @polygon-updated="onPolygonUpdate"
        ></map-editor>
      </div>
    </div>
  </div>
</template>

<script>
  import FormBasicInfo from './FormBasicInfo'
  import FormDetailInfo from './FormDetailInfo'
  import FormContacts from './FormContacts'
  import FormDataSource from './FormDataSource'
  import MapEditor from './MapEditor'

  export default {
    components: { FormBasicInfo, FormDetailInfo, FormContacts, FormDataSource, MapEditor },

    data () {
      return {
        isLoading: false,
        polygon: [],
        kawasan: {
          type: '',
          name: '',
          location: '',
          lat: -2.5,
          lng: 118,
          polygon: '',
          description: '',
          detail: {
            area: '',
            flora: '',
            fauna: ''
          },
          contacts: [],
          dataSources: []
        }
      }
    },

    methods: {
      onMarkerUpdate ({ lat, lng }) {
        this.kawasan.lat = lat
        this.kawasan.lng = lng
      },

      onPolygonUpdate (coords) {
        this.kawasan.polygon = JSON.stringify(coords)
      },

      saveData () {
        this.isLoading = true

        this.$firebase.firestore().collection('kawasan').add(this.kawasan)
          .then(doc => {
            this.isLoading = false
            console.log(doc.id)
          })
          .catch(e => {
            this.isLoading = false
            console.log(e)
          })
      }
    }
  }
</script>

<style lang="scss">
  .page--create-kawasan {

  }
</style>
