<script setup>
import StatesView from "@/components/StatesView.vue";
import { onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getLocalStorage, setLocalStorage } from "@/helpers/pokefunctions.js";

const route = useRoute();
const pokeId = route.params.pokeId;
const pokemons = getLocalStorage("arrayPokemons");
const [pokemon] = pokemons.filter((poke) => poke.id == pokeId);
setLocalStorage("currentPokemon", pokemon);
// Set lockPokemons to true to avoid loading new Pokemons when turning back to home page

localStorage.setItem("lockPokemons", true);

onMounted(() => {
  console.log(pokeId);
  console.log(pokemon);
});
</script>

<template>
  <div class="card">
    <div class="img-container">
      <img :src="pokemon.img" alt="pokemon front view" />
      <img :src="pokemon.img_back" alt="pokemon back view" />
    </div>
    <h2>{{ pokemon.name }}</h2>
    <div class="img-container">
      <div class="types-container">
        <img
          class="icon"
          src="@/assets/logos/atac.svg"
          href="#"
          alt="Icon Atac"
        />
        <p>{{ pokemon.attack }}</p>
      </div>
      <div class="types-container">
        <img
          class="icon"
          src="@/assets/logos/defensa.svg"
          href="#"
          alt="Icon Defensa"
        />
        <p>{{ pokemon.defense }}</p>
      </div>
    </div>
    <div class="types-container">
      <p>Tipus:</p>
      <div v-for="type in pokemon.types" :key="type.slot">
        <StatesView
          :key="type.slot"
          :typename="type.type.name"
          :src="'assets/tipus/' + type.type.name + '.png'"
        />
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink to="/">Tornar</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  height: auto;
  width: 270px;
  border: 2px solid grey;
  border-radius: 5px;
  background-color: var(--card-bg-color);
  color: var(--text-color);
}

.card > img:first-of-type {
  height: 96px;
  width: 96px;
  align-self: center;
  margin-top: 1rem;
}

.card > p {
  text-align: center;
}

.card h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-top: -10%;
  font-family: "Pokemon Solid", sans-serif;
  text-shadow: var(--vora-text);
  white-space: nowrap;
}

.types-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0rem 0.5rem 0rem;
  gap: 10%;
}

.card-footer {
  justify-content: center;
  width: 100%;
  background-color: var(--background-nav);
  padding: 0.5rem 1rem;
}

.card-footer > a {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  width: 100%;
}

.card-footer > a:hover{
  background-color: var(--bg-color);
}

.img-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 10%;
}

.icon {
  width: 48px;
  height: 48px;
  filter: invert(var(--filter-percent))
}

/* .icon.light {
  filter: invert(0%);
}

.icon.dark {
  filter: invert(100%);
} */
.types-container > p {
  font-size: 1.5rem;
}
</style>
