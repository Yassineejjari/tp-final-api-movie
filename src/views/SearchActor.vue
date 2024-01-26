<template>
  <div id="search-film">
    <form @submit.prevent="searchActors">
      <label for="search">Rechercher :</label>
      <input id="search" type="text" ref="boutonrecherche" v-model="query">
    </form>
    <h2>Nombres d'acteurs trouvés <strong>{{ query }}</strong> :
        {{ numberResults }}
    </h2>
        <ul class="films" >
            <ActorRecherche v-for="actor in actors" :key="actor.id" :actor="actor" />
  
        </ul>
    
  </div>
</template>

<script>
import Actor from '../components/Actor.vue';
import FilmService from '@/services/FilmService.js';
import ActorService from '@/services/ActorService.js';
import ActorRecherche from "../components/ActorRecherche.vue";
import UserService from '@/services/UserService.js';

export default {
    components: 
        {ActorRecherche},
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
            actors: []

        }
    },
    computed:{
        filterActors () {
            return this.actors.filter(actor => {
                return actors.lastname.toLowerCase().includes(this.query.toLowerCase())
            })
        },
        numberResults () {
            return this.actors.length
        }
    },
    methods: {
        async searchActors() { 
            this.actors = await UserService.search(this.query)
            this.actors = this.actors['hydra:member'];
            console.log(this.actors.media_objects)
            
        },
}}
    


</script>