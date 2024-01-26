<!-- Home.vue -->
<template>
  <div id="home">
    <SearchActor @search="searchActors" />
    <h2 v-if="numberResults > 0">
      Nombre d'acteurs trouvés pour "{{ query }}" : {{ numberResults }}
    </h2>
    <ul class="films">
      <ActorRecherche v-for="actor in filterActors" :key="actor.id" :actor="actor" />
    </ul>
  </div>
</template>

<script>
import SearchActor from "@/views/SearchActor.vue";
import Actor from "@/components/Actor.vue"; // Changer le nom du composant Film à Movie
import ActorService from "@/services/ActorService.js";
import ActorRecherche from "./ActorRecherche.vue";
import { api } from "@/services/api.js";
import UserService from "@/services/UserService.js";
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    SearchActor,
    ActorRecherche,
    Actor,
     // Changer le nom du composant Film à Movie
  },
  data() {
    return {
      query: "",
      actors: [], // Changer le nom de films à movies
    };
  },
  computed: {
    filterActors() {
      return this.actors.filter((actor) => {
        return actor.lastname.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    numberResults() {
      return this.filterActors.length;
    },
  },
  methods: {
    async searchActors(query) {
      this.query = query;
      this.actors = await UserService.search(this.query);
      this.actors = this.actors['hydra:member']; // Changer le nom de films à movies
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
