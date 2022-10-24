<script setup>

defineProps({
  typename:{
    type: String,
    required: true,
  },
}
)

</script>

<template>
    <p>{{typename}}</p>
</template>

<style scoped>
  .icon{
    width: 96px;
    height: 96px;
  }
</style>
