<template>
  <div id="search-film">
    <form @submit.prevent="searchFilms">
      <label for="search">Rechercher :</label>
      <input id="search" type="text" ref="boutonrecherche" v-model="query">
    </form>
    <h2>Nombres de films trouvés <strong>{{ query }}</strong> :
        {{ numberResults }}
    </h2>
        <ul class="films" >
            <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  
        </ul>
    
  </div>
</template>

<script>
import Movie from '../components/Movie.vue';
import FilmService from '@/services/FilmService.js';
import UserService from '@/services/UserService.js';

export default {
    components: 
        {Movie},
        mounted() {
            this.$refs.boutonrecherche.focus()
        },
data () {
        return {
            title:"authentification",
            email: '',
            password: '',
            query: '',
            loggedIn: false, 
            movies: []

        }
    },
    computed:{
        filterFilms () {
            return this.movies.filter(movie => {
                return movies.title.toLowerCase().includes(this.query.toLowerCase())
            })
        },
        numberResults () {
            return this.movies.length
        }
    },
    methods: {
        async searchFilms() { 
            this.movies = await UserService.search(this.query)
            this.movies = this.movies['hydra:member'];
            console.log(this.movies.media_objects)
            
        },
}}
    


</script>