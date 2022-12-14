import { apiService } from '@/services/pokeService.js'

const services = {
	async getCountPokemons() {
		return await apiService.getTotalPokemons()
	},

	async getPokemon(id) {
		return await apiService.getPokeInfo(id)
	},

	async getPokemons(arrayUrlPokemons) {
		return await apiService.getPokeInfoArray(arrayUrlPokemons)
	}
}

export { services }
