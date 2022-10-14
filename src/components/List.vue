<script setup>
import { ref, onMounted } from 'vue'
import CardView from '@/components/CardView.vue'
import { services } from "@/hooks/usePokeService.js"

defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
})

  // const totalPokemons = ref(0)
  const pokemon = ref({})
  // const pokemons = ref([])

  // const fetchData = async function fetchData(){
  //   totalPokemons.value = await services.getCountPokemons()
  //   pokemon.value = await services.getPokemon(1)
  //   pokemons.value.push(pokemon.value)
  //   console.log(totalPokemons.value)
  //   console.log(pokemon.value)
  // }
// onMounted(() => fetchData())

</script>

<template>
  <section>
    <div class="cards-grid">
      <CardView 
        v-for="pokemon in pokemons" 
        :key= "pokemon.id"
        :id= "pokemon.id"
        :name= "pokemon.name"
        :img= "pokemon.img"
        :imgBack = "pokemon.img_back"
        :attack = "pokemon.attack"
        :defense = "pokemon.defense"
        :types = "pokemon.types"
      />
    </div>
  </section>
</template>

<style lang="css" scope>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  padding: 2vh 2vw;
  gap: 2vh 2vw;
  perspective: 600px;
}
</style>
