<script>
import UserService from '@/services/UserService.js';
import ActorService from '@/services/ActorService.js';


export default {
  data() {
    return {
      actors: [],
    };
  },
  methods: {
    async fetchActors() {
      try {
        const response = await UserService.getActors(this.currentPage);
        console.log(response, "premier log");
        const myActors = response['hydra:member'];
        this.actors = myActors; // Assign the fetched actors to the 'actors' array
        console.log(myActors, "hydra:member");
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    },
    showActorDetails(actorId) {
      this.$router.push({ name: 'ActorDetails', params: { actorId } });
    },
  },
  mounted() {
    this.fetchActors();
  },
};
</script>

<template>
  <div>
    <h2>Actors</h2>
    <div class="component">
      <div class="actorcard" v-for="actor in actors" :key="actor.id" @click="showActorDetails(actor.id)">
        <img src="../assets/trunks.jpg" alt="">
                <p class="title">{{ actor.lastname }}</p>
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