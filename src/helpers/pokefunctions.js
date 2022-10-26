import axios from "axios"
import { services } from "@/hooks/usePokeService"
const BASE_URL = "https://pokeapi.co/api/v2"

// Get total number of available pokemons
const totalPokemons = async () =>{
    if (getLocalStorage("maxPokemons") === []){
      const res = await services.getCountPokemons()
      setLocalStorage("maxPokemons", res)
      return res
    }
    else{
      return getLocalStorage("maxPokemons")
    }
  }

// Get array of 10 Ids of pokemons
const pokeIdArray = (cards, maxPokeNumber) =>{
    let pokenumbers = []
    while (pokenumbers.length < cards){
        let pokenumber = (Math.floor(Math.random() * maxPokeNumber)).toString()
        if (!pokenumbers.includes(pokenumber) && pokenumber > 0) {
            let url = BASE_URL + "/pokemon/" + pokenumber
            pokenumbers.push(url);
        }
    }
    return pokenumbers
}

// Get array of 10 pokemon objects
const pokemonsArray = async function (pokeIdArray) {
    const a = []
    pokeIdArray.forEach(async pokeID => {
        const pokemon = await services.getPokemon(pokeID)
        a.push(pokemon)
    })
    return a
}

// Local Storage -- Set Item
const setLocalStorage = (varname, value) => {
    localStorage.setItem(varname, JSON.stringify(value))
}

// Local Storage -- Get Item
const getLocalStorage = (varname) => {
    let result = JSON.parse(localStorage.getItem(varname))
    return result ? result : []
}

// Destructure pokemon object
const destructurePokemon = (e) => {
    let pokemonObj = {
        id: e.data.id,
        name: e.data.name.indexOf('-') == -1 ? e.data.name : e.data.name.substring(0, e.data.name.indexOf('-')),
        img: e.data.sprites.front_default	? e.data.sprites.front_default : 'assets/logos/no-image.png',
        img_back: e.data.sprites.back_default ? e.data.sprites.back_default : 'assets/logos/no-image.png',
        attack: e.data.stats[1].base_stat,
        defense: e.data.stats[2].base_stat,
        types: e.data.types
    }
    return pokemonObj
}

// Set first letter of string to uppercase
function setToUpperCase (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// Winner of the fight between two pokemons
const card1Wins = (card1, card2) => {
    let win = parseInt(card1.attack) > parseInt(card2.defense) ? ' guanya a ' : ' perd contra '
    return setToUpperCase(card1.name) + ' ataca i' + win + setToUpperCase(card2.name)
}

export {setLocalStorage, getLocalStorage, totalPokemons, pokeIdArray, pokemonsArray, destructurePokemon, card1Wins}

