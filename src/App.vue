<script>
import LoginForm from './views/LoginForm.vue'
import Homepage from './components/Homepage.vue';
import SearchFilm from './views/SearchFilm.vue';
import MovieCard from './components/MovieCard.vue';
import Movie from './components/Movie.vue';
import Actor from './components/Actor.vue';
import ActorDetail from './components/ActorDetail.vue';
import ActorCard from './components/ActorCard.vue';
import SearchActor from './views/SearchActor.vue';
import MovieDetail from './components/MovieDetail.vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import {api} from "@/services/api.js";
import Navbar from './components/Navbar.vue';



export default {

data() {
  return {
  }
},
computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useSession, ["loggedIn"])
    },
components: {
  LoginForm, 
  Homepage,
  Actor,
  Navbar,
  ActorDetail,
  ActorCard,
  MovieCard,
  MovieDetail,
  SearchActor,
  SearchFilm,
  Movie,
  
}
}
</script>

<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style scoped>



header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
