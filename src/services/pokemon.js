import axios from 'axios';

const api = axios.create(
  {
    baseURL: `https://pokeapi.co/api/v2/`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })

export default {
  async getByName(pokemonName) {
    return await api.get(`???`)
  }
}