<script setup>
defineProps({
  id:{
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
  attack:{
    type: Number,
    required: true,
  },
  defense:{
    type: Number,
    required: true,
  },
  types:{
    type: Array,
    required: true,
  }
}
)

</script>

<template>
  <div class="card">
    <div class="img-container">
      <img :src="img" :alt="name">
      <!-- {{props.img}} -->
      <a href="#"><img class="icon" src="@/assets/logos/info-icon.svg" href="#" alt="Veure detall Pokemon" height="48" width="48"></a>
    </div>
    <h2>{{name}}</h2>
    <div class = "img-container">
      <div class="types-container">
        <img class="icon" src="@/assets/logos/atac.svg" href="#" alt="Icon Atac" height="48" width="48">
        <p>{{attack}}</p>
      </div>
      <div class="types-container">
        <img class="icon" src="@/assets/logos/defensa.svg" href="#" alt="Icon Defensa" height="48" width="48">
        <p>{{defense}}</p>
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

    /*Estil per a l'efecte de gir */
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card>img:first-of-type {
    height: 96px;
    width: 96px;
    align-self: center;
    margin-top: 1rem;
  }

  .card>p {
    text-align: center;
  }

  .card h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: -10%;
    font-family: 'Pokemon Solid', sans-serif;
    text-shadow: var(--vora-text);
    white-space: nowrap;
  }

  .types-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10%;
  }

  .img-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    gap: 10%;
  }

  .types-container > p{
    font-size: 2rem;
  }
</style>
