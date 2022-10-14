<script setup>
import States from "@/components/States.vue"

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
    type: String,
    required: true,
  },
  defense:{
    type: String,
    required: true,
  },
  types:{
    type: String,
    required: true,
  }
}
)

</script>

<template>
  <div class="card">
    <div class="img-container">
      {{img}}
      <a href="#"><img class="icon" src="assets/logos/info-icon.svg" href="#" alt="Veure detall Pokemon"></a>
    </div>
    <h2>{{name}}</h2>
    <div>
      <div class="img-container">
        <img class="icon" src="assets/logos/atac.svg" href="#" alt="Icon Atac">
        <p>{{attack}}</p>
      </div>
      <div class="img-container">
        <img class="icon" src="assets/logos/defensa.svg" href="#" alt="Icon Defensa">
        <p>{{defense}}</p>
      </div>
      <div>
        <States 
        v-for="tipo in types"
        :key= "tipo.slot"
        :typename= "tipo.type.name"
        />
      </div>
    </div>
  </div>

</template>

<style scoped>
  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
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
    font-family: 'Pokemon Solid', sans-serif;
    text-shadow: var(--vora-text);
    white-space: nowrap;
  }

  .img-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 40%;
  }

</style>
