<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import basecss from "@/assets/base.css"
import maincss from "@/assets/main.css"

const theme = ref("dark")

function switchTheme (theme){
  localStorage.setItem("customTheme", theme.value)
  let icons = document.querySelectorAll(".icon")
  let iconsArray = Array.from(icons)
  console.log(icons)
  console.log(theme)
  switch (theme.value){
    case "light":
      icons.forEach(icon => {
        icon.classList.remove("dark")
        icon.classList.add("light")
      })
      break;

    case "dark":
      icons.forEach(icon => {
        icon.classList.remove("light")
        icon.classList.add("dark")
      })
        break

    default:
      icons.forEach(icon => {
        icon.classList.remove("light")
        icon.classList.add("dark")
      })
  }
}

onMounted(() => {
  console.log ("switching theme")
  console.log(theme.value)
  switchTheme(theme.value)
})

</script>

<template>
  <main class="themed" :class="theme">
    <header>
        <nav>
          <div class="router">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/fight">Combat</RouterLink>
          </div>
          <div class="theme-selector">
            <p>Escolliu un tema:</p>
            <input @change="switchTheme(theme)" class = "radio" type="radio" name="theme" id="light" value="light" v-model="theme">
            <label for="light">clar</label>
            <input @change="switchTheme(theme)" class = "radio" type="radio" name="theme" id="dark" value="dark" v-model="theme" checked>
            <label for="dark">fosc</label>

          </div>
        </nav>
      <img alt="Vue logo" class="logo" src="@/assets/pokedex.png" />
    </header>

    <RouterView />
  </main>
</template>


<style scoped>

:root {
  --beige: beige;
  --strong-beige: rgb(218, 218, 158);
  --lightyellow: lightyellow;
  --darkgrey: #3d3d3d;
  --lightgrey: #4d4d4d;
  --yellow: yellow;
  --text-default: #4e4e4e;
  --card_border: #17301b;
}

/* Define dark and light themes attributes */

.themed.light {
  --bg-color: var(--beige);
  --text-color: var(--darkgrey);
  --card-bg-color: var(--strong-beige);
  --background-nav: var(--strong-beige);
  --vora-text: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
      1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;

}

.themed.dark {
  --bg-color: var(--darkgrey);
  --text-color: var(--yellow);
  --card-bg-color: var(--lightgrey);
  --background-nav: var(--lightgrey);
  --vora-text: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
      1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: var(--text-color);
  background-color: var(--background-nav);
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--text-color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.radio{
  margin-left: 1rem;
  margin-right: .25rem;
}
.theme-selector{
  display: flex;
  justify-content: space-around;
  padding-right: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
