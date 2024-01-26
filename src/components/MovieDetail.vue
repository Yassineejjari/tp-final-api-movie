<template>
    <div>
      <h1>Movie Details</h1>
  
      <div v-if="movie && typeof movie === 'object'">
        <div v-if="!editMode">
          <!-- Display mode -->
          <p><strong>Released Date:</strong> {{ movie.release_date }}</p>
          <p><strong>Description:</strong> {{ movie.description }}</p>
          <p><strong>Budget:</strong> {{ movie.budget }}</p>
          <p><strong>Entries</strong> {{ movie.entries }}</p>
          <button @click="toggleEditMode">Modify</button>
        </div>
  
        <form v-else @submit.prevent="submitMovieDetails">
          <!-- Edit mode -->
          <label for="releasedate">Released Date:</label>
          <input v-model="movie.release_date" type="text" id="releasedate" />
  
          <label for="description">Description:</label>
          <input v-model="movie.description" type="text" id="description" />
  
          <label for="budget">Budget:</label>
          <input v-model="movie.budget" type="text" id="budget" />
  
          <label for="entries">Entries:</label>
          <input v-model="movie.entries" type="text" id="entries" />
  
          <!-- Add more fields as needed -->
  
          <button type="submit">Sauvegarder les changements</button>
        <button @click="toggleEditMode">Annulez</button>
        </form>
      </div>
  
      <div v-else>
        <p>Chargement details actor...</p>
      </div>
    </div>
  </template>
  
  <script>
  import UserService from '@/services/UserService.js';
  import FilmService from '@/services/FilmService.js';
  
  export default {
    data() {
      return {
        movie: null,
        editMode: false,
      };
    },
    methods: {
      async fetchMovieDetails(movieId) {
        try {
          const response = await UserService.getMovieDetails(movieId);
          this.movie = response; // Assuming the response contains actor details
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      },
      async submitMovieDetails() {
        try {
          // Send updated actor details to the server
          await UserService.PatchMovieDetails(this.movie.id, this.movie);
          console.log('movie details updated successfully!');
          this.toggleEditMode(); // Switch back to display mode after saving changes
        } catch (error) {
          console.error('Error updating movie details:', error);
        }
      },
      toggleEditMode() {
        this.editMode = !this.editMode;
      },
    },
    mounted() {
      // Fetch actor details when the component is mounted
      const movieId = this.$route.params.movieId;
      this.fetchMovieDetails(movieId);
    },
  };
  </script>