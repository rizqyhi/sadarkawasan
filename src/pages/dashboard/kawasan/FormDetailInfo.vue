<template>
  <form-section title="Detail Kawasan">
    <b-field label="Luas Kawasan">
      <b-input v-model="kawasan.detail.area" />
    </b-field>

    <b-field label="Flora" message="Pisahkan dengan tanda koma">
      <b-input v-model="kawasan.detail.flora" />
    </b-field>

    <b-field label="Fauna" message="Pisahkan dengan tanda koma">
      <b-input v-model="kawasan.detail.fauna" />
    </b-field>
  </form-section>
</template>

<script>
  import FormSection from '@/components/FormSection'

  export default {
    components: { FormSection },
    props: {
      kawasan: Object
    }
  }
</script>

<style lang="scss">

</style>
