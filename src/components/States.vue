<script setup>

defineProps({
  typename:{
    type: String,
    required: true,
  },
}
)

const tipus = `${typename}`
const iconref = `assets/tipus/${typename}.png`

</script>

<template>
    <img class="icon" src=iconref alt=tipus>
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
