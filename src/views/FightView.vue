<script setup>
import { ref, onMounted, computed } from "vue";
import { services } from "@/hooks/usePokeService.js";
import {
  setLocalStorage,
  getLocalStorage,
  totalPokemons,
  pokeIdArray,
  pokemonsArray,
} from "@/helpers/pokefunctions.js";
import ListView from "@/components/ListView.vue";
import { RouterLink } from "vue-router";

const arrayPokemons = ref([]); // Array with result of pokemon Objects
const CARDS = 10; // Number of card to be displayed on the grid
const messageWins = ref("")  // Message displayed to show winner

function reloadPage() {
  window.location.reload();
}

const fetchData = async function fetchData() {
  const nrPokemons = await services.getCountPokemons();
  const arrayIdPokemons = pokeIdArray(CARDS, nrPokemons);
  arrayPokemons.value = await services.getPokemons(arrayIdPokemons);
};

// Reception of message emitted by ListView
const showMessageWins = (msg) =>{
    messageWins.value = msg
    document.getElementById("reload-btn").disabled = false
}

onMounted(async () => {
  fetchData();
});
</script>

<template>
  <main>
    <div class="center-block">
      <button id="reload-btn" class="reload-btn" disabled=true @click="reloadPage">Nova partida</button>
    </div>
    <div class="center-block">
      <h2>{{ messageWins }}</h2>
    </div>
    <ListView :pokemons="arrayPokemons" :fight="true" @response="showMessageWins" />
  </main>
</template>

<style scoped>

h2{
    color: var(--text-color)
}

.center-block {
  font-size: 2rem;
  height: auto;
  padding: 0.5rem;
  background-color: var(--card-bg-color);
  text-align: center;
  justify-items: center;
}

.reload-btn {
  font-family: inherit;
  font-size: 2rem;
  height: auto;
  padding: 0.5rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 4px;
}

/* --------- Responsive styles ----------------- */

@media only screen and (max-width: 1000px) {
  .reload-btn, h2 {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 680px) {
  .reload-btn, h2 {
    font-size: 1rem;
  }
}
</style>