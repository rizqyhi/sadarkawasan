<template>
  <form-section title="Sumber Data">
    <b-field grouped v-for="(data, index) in kawasan.dataSources" :key="index">
      <b-input placeholder="Buku atau URL situs" expanded v-model="data.source" />
      <button class="button is-danger is-outlined" @click="removeDataSource">&times;</button>
    </b-field>

    <button class="button is-primary is-outlined is-small" @click="addDataSource">Tambah Sumber Data</button>
  </form-section>
</template>

<script>
  import FormSection from '@/components/FormSection'

  export default {
    components: { FormSection },
    props: {
      kawasan: Object
    },
    methods: {
      addDataSource () {
        this.kawasan.dataSources.push({source: ''})
      },

      removeDataSource (index) {
        this.kawasan.dataSources.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">

</style>
