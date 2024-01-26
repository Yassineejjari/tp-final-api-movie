<script>
import UserService from '@/services/UserService.js';
import FilmService from '@/services/FilmService.js';


export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await UserService.getMovies(this.currentPage);
        console.log(response, "premier log");
        const myMovies = response['hydra:member'];
        this.movies = myMovies; // Assign the fetched actors to the 'actors' array
        console.log(myMovies, "hydra:member");
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    showMovieDetails(movieId) {
      this.$router.push({ name: 'MovieDetails', params: { movieId } });
    },
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>

<template>
  <div>
    <h2>Movies</h2>
    <div class="component">
      <div class="actorcard" v-for="movie in movies" :key="movie.id" @click="showMovieDetails(movie.id)">
        <img src="../assets/miles.jpg" alt="">
                <p class="title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 10rem;
  border-radius: 5px;
}
.actorcard {
  display: flex;
  flex-direction: column;
  width: 10rem;
  padding: 1rem;
}
.component {
  display: flex;
  flex-wrap: wrap;
}

.title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>