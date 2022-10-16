<script setup>
import checkTheme from "@/helpers/pokefunctions.js"
import Vuetify from 'vuetify/lib'

function switchTheme(newTheme) {
		switch (newTheme) {
			case 'dark':
				body.setAttribute('data-theme', 'dark')

				nodes.forEach((node) => {
					node.classList.remove('icon')
					node.classList.add('icon-dark-theme')
				})
				localStorage.setItem('customTheme', 'dark')
				break

			case 'light':
        // theme light is default theme
			default:
				body.setAttribute('data-theme', 'light')
				nodes.forEach((node) => {
					node.classList.remove('icon-dark-theme')
					node.classList.add('icon')
				})
				localStorage.setItem('customTheme', 'light')
		}
	}

</script>

<template>
  <v-container fluid>
    Escolliu un tema:
    <v-radio-group
      v-model="theme"
      row
    >
      <v-radio
        label="clar"
        value="light"
      ></v-radio>
      <v-radio
        label="fosc"
        value="dark"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>


<style scoped>

</style>
