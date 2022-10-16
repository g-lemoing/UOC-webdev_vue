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
  .icon{
    width: 96px;
    height: 96px;
  }
</style>
