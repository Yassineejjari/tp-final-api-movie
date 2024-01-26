<!-- Home.vue -->
<template>
  <div id="home">
    <SearchFilm @search="searchMovies" />
    <h2 v-if="numberResults > 0">
      Nombre de films trouvés pour "{{ query }}" : {{ numberResults }}
    </h2>
    <ul class="films">
      <Movie v-for="movie in filterMovies" :key="movie.id" :movie="movie" />
    </ul>
  </div>
</template>

<script>
import SearchFilm from "@/views/SearchFilm.vue";
import Movie from "@/components/Movie.vue"; // Changer le nom du composant Film à Movie
import FilmService from "@/services/FilmService.js";
import { api } from "@/services/api.js";
import UserService from "@/services/UserService.js";
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    SearchFilm,
    Movie,
     // Changer le nom du composant Film à Movie
  },
  data() {
    return {
      query: "",
      movies: [], // Changer le nom de films à movies
    };
  },
  computed: {
    filterMovies() {
      return this.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    numberResults() {
      return this.filterMovies.length;
    },
  },
  methods: {
    async searchMovies(query) {
      this.query = query;
      this.movies = await FilmService.search(this.query);
      this.movies = this.movies['hydra:member']; // Changer le nom de films à movies
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles spécifiques pour la page d'accueil ici */
#home {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

h2 {
  margin-top: 20px;
}

.films {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
