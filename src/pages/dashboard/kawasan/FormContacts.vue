<template>
  <form-section title="Narahubung">
    <b-field grouped v-for="(contact, index) in kawasan.contacts" :key="index">
      <b-input placeholder="Nama/instansi" v-model="contact.name" />
      <b-input placeholder="Alamat" expanded v-model="contact.address" />
      <b-input placeholder="No. Telpon/HP" v-model="contact.phone" />

      <button class="button is-danger is-outlined" @click="removeContact">&times;</button>
    </b-field>

    <button class="button is-primary is-outlined is-small" @click="addContact">Tambah Narahubung</button>
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
      addContact () {
        this.kawasan.contacts.push({name: '', address: '', phone: ''})
      },

      removeContact (index) {
        this.kawasan.contacts.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">

</style>
