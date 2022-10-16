<script setup>
import { ref, onMounted } from 'vue'
import CardView from '@/components/CardView.vue'
import { services } from "@/hooks/usePokeService.js"

defineProps({
  pokemons: {
    type: Object,
    required: true,
  },
})

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
