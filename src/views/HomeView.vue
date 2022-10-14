<script setup>
  import { ref, onMounted, computed } from "vue"
  import { services } from "@/hooks/usePokeService.js"
  import { setLocalStorage, getLocalStorage, totalPokemons, pokeIdArray, pokemonsArray } from "@/helpers/pokefunctions.js"
  import ListView from "@/components/List.vue"

  const searchedText = ref("")
  const arrayPokemons = ref([])
  const CARDS = 10

  const fetchData = async function fetchData(){
    const nrPokemons = await services.getCountPokemons()
    console.log(nrPokemons)
    const arrayIdPokemons = pokeIdArray(CARDS, nrPokemons)
    console.log(arrayIdPokemons)
    arrayPokemons.value = await services.getPokemons(arrayIdPokemons)
    console.log(arrayPokemons.value)
  }

const foundPokemons = computed(() => {
  return arrayPokemons.value.filter( ({name}) => name.toLowerCase().includes(searchedText.value.toLowerCase()))
})

onMounted(() => fetchData())
</script>

<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <label for="searchText">Cerqueu un pokemon pel seu nom </label>
      <input type="text" id = "searchText" name = "searchText" v-model="searchedText">
    </form>
    <ListView :pokemons = "arrayPokemons" />
  </main>
</template>

<style scoped></style>