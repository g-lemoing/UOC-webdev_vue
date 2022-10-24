<script setup>
  import { ref, onMounted, computed } from "vue"
  import { services } from "@/hooks/usePokeService.js"
  import { setLocalStorage, getLocalStorage, totalPokemons, pokeIdArray, pokemonsArray } from "@/helpers/pokefunctions.js"
  import ListView from "@/components/ListView.vue"

  const searchedText = ref("")            // text to be searched to filter cards
  const arrayPokemons = ref([])           // Array with result of pokemon Objects
  // const foundPokemons = ref([])
  const CARDS = 10                        // Number of card to be displayed on the grid
  const preservePokemons = false          // Boolean to keep previous set of Pokemons 

  const fetchData = async function fetchData(){
    const nrPokemons = await services.getCountPokemons()
    const arrayIdPokemons = pokeIdArray(CARDS, nrPokemons)
    arrayPokemons.value = await services.getPokemons(arrayIdPokemons)
    setLocalStorage("arrayIdPokemons", arrayIdPokemons)
    setLocalStorage("arrayPokemons", arrayPokemons.value)
    console.log(arrayPokemons.value)
  }

const foundPokemons = computed(
  () => arrayPokemons.value.filter((pokemon) => pokemon.name.toLowerCase().includes(searchedText.value.toLowerCase()))
)

onMounted(async() => {
  const preservePokemons = localStorage.getItem("lockPokemons")
  if (preservePokemons){
    // Coming back from detailed card view --> keep previous set of pokemons
    arrayPokemons.value = getLocalStorage("arrayPokemons")
  } else{
    // Request new 10 pokemons set
    console.log ("Carregant noves dades")
    fetchData()
    console.log (foundPokemons.value)
  }
    localStorage.setItem("lockPokemons", false)
  })
</script>

<template>
  <main>
    <form class="box-center" @submit.prevent="handleSubmit">
      <label for="searchText">Cerqueu un pokemon pel seu nom </label>
      <input type="text" v-model="searchedText">
      {{searchedText}}
    </form>
    <ListView :pokemons = "foundPokemons" :fight = false />
  </main>
</template>

<style scoped>
  .box-center{
    display: flex;
    justify-content: center;
    vertical-align: middle;
    padding: 1rem;
    gap: 5vw;
    width: 100vw;
    background-color: var(--background-nav);
    color: var(--text-color);
  }

</style>