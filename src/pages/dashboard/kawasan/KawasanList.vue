<template>
  <ul class="kawasan-list">
    <li v-for="item in kawasan">
      <router-link :to="'kawasan/' + item.id" class="kawasan-list__link">
        <h5 class="kawasan-list__name">{{ item.name }}</h5>
        <span class="kawasan-list__type">{{ getKawasanType(item.type) }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import kawasanType from '@/utils/kawasanType'

  export default {
    props: {
      kawasan: Array
    },

    methods: {
      getKawasanType (type) {
        return kawasanType[type].name || type
      }
    },

    mounted () {
    }
  }
</script>

<style lang="scss">
  .kawasan-list__link {
    display: block;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid $white-ter;

    &:hover {
      background: $white-ter
    }
  }

  .kawasan-list__type {
    font-size: 0.9em;
    font-style: italic;
    color: $grey
  }
</style>
