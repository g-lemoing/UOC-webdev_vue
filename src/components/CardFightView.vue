<script setup>
import { onMounted } from "vue";  // no se está utilizando
import { ref } from "vue"; 

defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  // esta variable no se está utilizando
  imgBack: {
    type: String,
    required: true,
  },
  ////
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  // esta variable no se está utilizando
  types: {
    type: Array,
    required: true,
  },
  ////
});

// Es mala práctica  acceder directamente al DOM, para añadir una clase condicional se utiiliza los class condition.
// function addIsFlipped(pokeId) {
//   let card = document.getElementById(pokeId);
//   card.classList.add("is-flipped");
// }
// 1.- creamos un estado para las cartas flipped en false.
  const flipped = ref(false);
// 2.- en la linea 60 cuando se haga click cambiamos el estado a true.
// 3.- en la linea 55 creamo la class condition, Si flipped es true agrega la clase is-flipped a la Card.



// feedback.- Deberías controlar que solo se den vuelta (flipped) los pokemones que entran en lucha.
</script>

<template>
  <div class="scene scene--card">
    <div 
      class="card" 
      :class="{ 'is-flipped' : flipped}"
      :id="id" 
    >
      <div
        class="card__face card__face--front"
        @click="flipped = true"
      ></div>
      <div class="card__face card__face--back">
        <div class="img-container">
          <img :src="img" :alt="name" />
        </div>
        <div class="pokename">
          <h2>{{ name }}</h2>
        </div>
        <div class="img-container">
          <div class="types-container">
            <img
              class="icon"
              src="@/assets/logos/atac.svg"
              href="#"
              alt="Icon Atac"
            />
            <p>{{ attack }}</p>
          </div>
          <div class="types-container">
            <img
              class="icon"
              src="@/assets/logos/defensa.svg"
              href="#"
              alt="Icon Defensa"
            />
            <p>{{ defense }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  height: auto;
  border: 1px solid #ccc;
  /* margin: 40px 0; */
  perspective: 600px;
}

.card {
  width: 100%;
  height: 265px;
  transition: 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  /* line-height: 260px; */
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: repeating-linear-gradient(
    -45deg,
    #ececec,
    #ececec 10px,
    #dedede 10px,
    #dedede 20px
  );
}

.card__face--back {
  color: var(--text-color);
  background: var(--card-bg-color);
  transform: rotateY(180deg);
  height: 100%;
}

.pokename {
  display: flex;
  justify-content: center;
  height: auto;
}

.pokename h2 {
  font-size: 2rem;
  font-weight: 600;
  /* height: 2rem; */
  /* margin-top: -40%; */
  font-family: "Pokemon Solid", sans-serif;
  text-shadow: var(--vora-text);
  white-space: nowrap;
}

.img-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 10%;
}

.img-container > img {
  height: 96px;
  width: 96px;
}

.types-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  /* gap: 10%; */
}

.icon {
  width: 48px;
  height: 48px;
  filter: invert(var(--invert-percent));
}

/* .icon.light {
  filter: invert(0%);
}

.icon.dark {
  filter: invert(100%);
} */
</style>
