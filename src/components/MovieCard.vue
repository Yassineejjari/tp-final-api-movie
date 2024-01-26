 
<!-- MovieCard.vue -->
<template>
  <div id="movie-card">
    <Movie :movie="selectedFilm" />
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
import axios from "axios";

export default {
  components: {
    Movie,
  },
  data() {
    return {
      selectedFilm: null,
    };
  },
  mounted() {
    // Récupérez l'ID du film depuis la route
    const movieId = this.$route.params.id;

    // Chargez les détails du film spécifique à partir de votre API
    this.loadMovieDetails(movieId);
  },
  methods: {
    async loadMovieDetails(movieId) {
      try {
        const response = await axios.get(`http://localhost:8000/api/movies/${movieId}`);
        this.selectedFilm = response.data;
      } catch (error) {
        console.error('Erreur lors du chargement des détails du film', error);
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles spécifiques pour la page MovieCard ici */
#movie-card {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
