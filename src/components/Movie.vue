
<template>
<div>
    
    <div class="component">
      <div class="actorcard" v-for="movie in movies" :key="movie.id" @click="showActorDetails(movie.id)">
        <img src="../assets/trunks.jpg" alt="">
                <p class="title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
  
  <li class="film card">
    <p class="title">
      {{ movie.title }}
      <span class="rating">{{ numberOfStars(movie) }}</span>
    </p>
    <div class="component">
      <img src="../assets/trunks.jpg" alt="">
    </div>
  
    <dl>
      
      <dt>Release date</dt><dd>{{ movie.release_date }}</dd>
      <dt>Director</dt><dd>{{ movie.director }}</dd>
      <dt>Actors</dt><dd>{{ movie.actors }}</dd>
      <dt>Description:</dt><dd>{{ movie.description }}</dd>
      
      <div class="moviecard" v-for="movie in movies" :key="movie.id" @click="showMovieDetails(movie.id)">
       
      </div>
    </dl>
    
  </li>
</template>

<script>
import UserService from '@/services/UserService.js';
import FilmService from '@/services/FilmService.js';

export default {

  data() {
    return {
      movies: [],
      actors: [],
    };
  },
  props: ['movie'],
  methods: {
    numberOfStars(movie) {
      return '⭐'.repeat(Math.floor(movie.metascore / 100 * 5));
    },
  },
  async fetchMovies() {
      try {
        const response = await UserService.getMovies(this.currentPage);
        console.log(response, "premier log");
        const myMovies = response['hydra:member'];
        this.movies = myMovies; // Assign the fetched movies to the 'movies' array
        console.log(myMovies, "hydra:member");
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    showMovieDetails(movieId) {
      this.$router.push({ name: 'MovieDetails', params: { movieId } });
    },
  mounted() {
    this.fetchMovies();
  },
  
};
</script>

<style scoped>
 img {
  width: 14rem;
  border-radius: 5px;
}
.moviecard {
  display: flex;
  flex-direction: column;
  width: 10rem;
  padding: 1rem;
}
.component {
  display: flex;
  flex-wrap: wrap;
  margin: 3rem;
  
}

.title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
} 


.film {
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1rem;
  background-color: rgb(253, 255, 254);
  margin: 1rem;
  border-radius: 5px;
}

</style>
