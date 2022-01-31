<template>
  <v-app>
    <v-main>
      <PokemonInfo/>
    </v-main>
  </v-app>
</template>

<script>
import PokemonInfo from './pages';

export default {
  name: 'App',

  components: {
    PokemonInfo,
  },

  data: () => ({
    //
  }),
};
</script>
