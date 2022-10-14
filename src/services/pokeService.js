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
            // let pokemon = {
            //     "id": response.data.id,
            //     "name": response.data.name,
            //     "img": response.data.sprites.front_default,
            //     "img_back": response.data.sprites.back_default,
            //     "attack": response.data.stats[1].base_stat,
            //     "defense": response.data.stats[2].base_stat,
            //     "types": response.data.types
            // }
            // return pokemon
            return destructurePokemon(response)
        })
        .catch(console => console.log(error))
    },

    // Get Pokemon detailed info array
    getPokeInfoArray(pokeIdArray){
        const resultArray = []
        console.log(pokeIdArray)
        Promise.all(pokeIdArray.map((endpoint) => axios.get(endpoint)))
        .then(response => {
            let tempResults = response
            console.log(tempResults)
            tempResults.forEach(e => resultArray.push(destructurePokemon(e)));
            console.log(resultArray)
            return resultArray
    })
        .catch(error => console.log(error))
    },
}

export {apiService}