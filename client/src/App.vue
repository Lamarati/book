<template>
  <div>
    <h1>Lamarati/Books</h1>
    <div v-if="isFetching">
      fetching data...
    </div>
    <div v-else>
      <pre>
        {{ data }}
      </pre>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'

const url = '/api/books'
const { isFetching, error, data } = useFetch(url).get().json()

</script>



<style scoped>
</style>
