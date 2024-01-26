<!-- Navbar.vue -->

<template>
    <nav id="navbar">
      <ul>
        <router-link to="/homepage">Recherche Films</router-link>
        <router-link to="/homepageActor">Recherche Acteur</router-link>
        <router-link to="/actor">Actors</router-link>
        <router-link to="/movieposter">Movies</router-link>
        <router-link to="/categories">Categories</router-link>
    <div>
        <RouterLink :to="{name: 'search'}"></RouterLink>
        <RouterLink :to="{name: 'login'}"></RouterLink>
    </div>
    <div v-if="!loggedIn"></div>
    <div id="header" v-else>
        <div class="flex">
            <div>Bonjour, {{ user.email }}</div>
        <div>
            <a @click ="deconnection">Se déconnecter</a>
        </div>
    </div>
    </div>
      </ul>
    </nav>
  </template>
  
  <script>
import { mapState, mapActions } from "pinia";
import { useSession } from "@/stores/session";
export default {
    data() {
        return {
        }
    },
    methods: {
        deconnection () {
            this.logout()
            this.$router.push('login');
        },
        ...mapActions(useSession, ["logout"])
    },
    computed: {
        ...mapState(useSession, ["loggedIn", "user"])
    }
}

  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques pour la barre de navigation ici */
  #navbar {
    background-color: #a28b8b;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  router-link {
    margin-right: 15px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  