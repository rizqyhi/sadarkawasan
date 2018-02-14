<template>
  <form-section title="Informasi Dasar">
    <b-field grouped>
      <b-field label="Jenis Kawasan">
        <b-select placeholder="Pilih jenis kawasan" v-model="kawasan.type">
          <option value="ca">Cagar Alam</option>
          <option value="sm">Suaka Margasatwa</option>
          <option value="tn">Taman Nasional</option>
          <option value="thr">Taman Hutan Raya</option>
          <option value="twa">Taman Wisata Alam</option>
        </b-select>
      </b-field>

      <b-field label="Nama Kawasan" expanded>
        <b-input v-model="kawasan.name" />
      </b-field>
    </b-field>

    <b-field label="Lokasi" message="Pisahkan tiap wilayah dengan baris baru">
      <b-input type="textarea" v-model="kawasan.location" />
    </b-field>

    <b-field grouped>
      <b-field expanded>
        <b-input placeholder="Lat" expanded readonly v-model="kawasan.lat" />
        <p class="control"><span class="button is-static">&deg; {{ kawasan.lat > 0 ? 'LU' : 'LS' }}</span></p>
      </b-field>

      <b-field expanded>
        <b-input placeholder="Lng" expanded readonly v-model="kawasan.lng" />
        <p class="control"><span class="button is-static">&deg; BT</span></p>
      </b-field>
    </b-field>

    <b-field label="Deskripsi">
      <b-input type="textarea" v-model="kawasan.description" />
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
