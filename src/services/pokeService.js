import axios from 'axios'
import { destructurePokemon } from '@/helpers/pokefunctions'
const BASE_URL = "https://pokeapi.co/api/v2"
const pokeAPI = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        ContentType: 'application/json',
    }
})

const apiService = {
    // Get total Pokemons
    getTotalPokemons(){
        return pokeAPI.get(`/pokemon-species`)
        .then(response => {
            return parseInt(response.data.count)
        })
        .catch(error => console.log(error))
    },
    
    // Get Pokemon detailed info
    getPokeInfo(id){
        return pokeAPI.get(`/pokemon/${id}`)
        .then(response => {
            return destructurePokemon(response)
        })
        .catch(console => console.log(error))
    },

    // Get Pokemon detailed info array
    getPokeInfoArray(pokeIdArray){
        return Promise.all(pokeIdArray.map((endpoint) => axios.get(endpoint))).then(
            axios.spread((...allData) => {
                return allData.map((pokemon) => destructurePokemon(pokemon))
            })
        )
    },
}

export {apiService}