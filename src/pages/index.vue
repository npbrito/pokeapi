<template>
  <v-col class="center">
    <v-form>
      <v-container>
        <v-col center>
          <v-text-field
            append-icon="mdi-magnify"
            v-model="pokemonName"
            label="Pokemon name"
          ></v-text-field>
          <v-btn @click="searchPokemon">Search</v-btn>
        </v-col>
      </v-container>
    </v-form>

    <div v-if="status == 'showPokemon'">
      <v-card class="mx-auto" max-width="344">
        <v-img :src="sprite" height="200px"></v-img>
        <v-col>
          <v-card-title> {{ pokemonInfo.name }} </v-card-title>

          <v-card-subtitle>
            <b>Type(s): </b>
            <span v-for="type in pokemonInfo.types" :key="type.slot">
              {{ type.type.name }},
            </span>
            <v-spacer></v-spacer>

            <b>Abilities:</b>
            <span v-for="ability in pokemonInfo.abilities" :key="ability.slot">
              {{ ability.ability.name }},
            </span>
          </v-card-subtitle>
        </v-col>
      </v-card>
    </div>
    <div v-if="status == 'error'">
      <h3>Pokemon not found</h3>
    </div>
  </v-col>
</template>

<script>
import pokemonApi from "../services/pokemon";

export default {
  data() {
    return {
      pokemonName: "",
      pokemonInfo: {},
      status: "",
    };
  },
  computed: {
    sprite() {
      if (this.pokemonInfo.sprites) {
        return this.pokemonInfo.sprites.front_default;
      } else {
        return "";
      }
    },
  },
  methods: {
    async searchPokemon() {
      let response = await pokemonApi
        .getByName(this.pokemonName)
        .catch((error) => {
          this.status = "error";
          console.log(error);
        });
      if (response) {
        this.pokemonInfo = response.data;
        this.status = "showPokemon";
      }
    },
  },
};
</script>

<style scoped>
span {
  color: #333;
}
</style>
