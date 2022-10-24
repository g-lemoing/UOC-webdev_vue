<script setup>
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
  imgBack: {
    type: String,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  types: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="img-container">
      <img :src="img" :alt="name" />
      <img
        class="icon cursor-pointer"
        src="@/assets/logos/info-icon.svg"
        alt="Veure detall Pokemon"
        @click="$router.push({ name: 'detail', params: { pokeId: this.id } })"
      />
    </div>
    <h2>{{ name }}</h2>
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
</template>

<style scoped>
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5%;
  text-align: center;
  align-items: center;
  height: 265px;
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
  gap: 10%;
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
}

.icon.light {
  filter: invert(100%);
}

.icon.dark {
  filter: invert(0%);
}

.types-container > p {
  font-size: 2rem;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
