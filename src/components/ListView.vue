<script setup>
import { ref, onMounted } from "vue";
import CardView from "@/components/CardView.vue";
import CardFightView from "@/components/CardFightView.vue";
import { services } from "@/hooks/usePokeService.js";
import { card1Wins } from "@/helpers/pokefunctions.js";

defineProps({
  pokemons: {
    type: Array,
    required: true,
  },

  // Fight is true if called from FightView.vue, else false
  fight: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["response"]);

const pokeFight = []; // Array of fighting pokemons

function addToFight(pokemon) {
  if (pokeFight.length == 0) {
    pokeFight.push(pokemon);
  } else {
    if (pokeFight.length == 1) {
      if (pokeFight[0].id != pokemon.id) {
        pokeFight.push(pokemon);
        let msg = card1Wins(pokeFight[0], pokeFight[1]);
        emit("response", msg);
      }
    }
  }
}
</script>

<template>
  <section>
    <div class="cards-grid">
      <!-- Solo se necesita el key en el padre que hace el bucle -->
      <template v-for="pokemon in pokemons" :key="pokemon.id">
        <CardView
          v-if="!fight"
          :id="pokemon.id"
          :name="pokemon.name"
          :img="pokemon.img"
          :imgBack="pokemon.img_back"
          :attack="pokemon.attack"
          :defense="pokemon.defense"
          :types="pokemon.types"
        />
        <CardFightView
          v-else
          :id="pokemon.id"
          :name="pokemon.name"
          :img="pokemon.img"
          :imgBack="pokemon.img_back"
          :attack="pokemon.attack"
          :defense="pokemon.defense"
          :types="pokemon.types"
          @click="addToFight(pokemon)"
        />
      </template>
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
  background-color: var(--bg-color);
}

/* Responsive ----------------- Media queries --------------------*/

@media only screen and (max-width: 1100px) {
  .cards-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 900px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 680px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
