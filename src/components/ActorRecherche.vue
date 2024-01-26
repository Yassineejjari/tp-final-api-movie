<template>
    <div>
        
        <div class="component">
          <div class="actorcard" v-for="actor in actors" :key="actor.id" @click="showActorDetails(actor.id)">
            <img src="../assets/broly.jpg" alt="">
                    <p class="title">{{ actor.lastname }}</p>
          </div>
        </div>
      </div>
      
      <li class="film card">
        <p class="title">
          {{ actor.lastname }}
          <span class="rating">{{ numberOfStars(actor) }}</span>
        </p>
        <div class="component">
          <img src="../assets/broly.jpg" alt="">
        </div>
      
        <dl>
          
          <dt>Firstname</dt><dd>{{ actor.firstname }}</dd>
          <dt>Lastname</dt><dd>{{ actor.lastname }}</dd>
          <dt>Created at</dt><dd>{{ actor.created_at }}</dd>
          <dt>Birthday:</dt><dd>{{ actor.dob }}</dd>
          
          <div class="moviecard" v-for="actor in actors" :key="actor.id" @click="showActorDetails(actor.id)">
           
          </div>
        </dl>
        
      </li>
    </template>
    
    <script>
    import UserService from '@/services/UserService.js';
    import FilmService from '@/services/FilmService.js';
    import ActorService from '@/services/ActorService.js';
    
    export default {
    
      data() {
        return {
          
          actors: [],
        };
      },
      props: ['actor'],
      methods: {
        numberOfStars(actor) {
          return '⭐'.repeat(Math.floor(actor.metascore / 100 * 5));
        },
      },
      async fetchActors() {
          try {
            const response = await UserService.getActors(this.currentPage);
            console.log(response, "premier log");
            const myActors = response['hydra:member'];
            this.actors = myActors; // Assign the fetched movies to the 'movies' array
            console.log(myActors, "hydra:member");
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        },
        showActorDetails(actorId) {
          this.$router.push({ name: 'ActorDetails', params: { actorId } });
        },
      mounted() {
        this.fetchActors();
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
    