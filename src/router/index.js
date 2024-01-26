/** src/router/index.js **/
import { createRouter, createWebHistory } from 'vue-router'
import SearchFilm from '../views/SearchFilm.vue';
import LoginForm from '../views/LoginForm.vue';
import Movie from '../components/Movie.vue';
import Actor from '../components/Actor.vue';
import ActorCard from '../components/ActorCard.vue';
import Category from '../components/Category.vue';
import FilmService from '../services/FilmService.js';
import UserService from '../services/UserService.js';
import ActorService from '../services/ActorService.js';
import MovieCard from '../components/MovieCard.vue';
import Homepage from '../components/Homepage.vue';
import HomepageActor from '../components/HomepageActor.vue';
import ActorRecherche from '../components/ActorRecherche.vue';
import MoviePoster from '../components/MoviePoster.vue';
import SearchActor from '../views/SearchActor.vue';
import { useSession } from '../stores/session';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginForm
    },
    {
        path: "/search",
        name: "search",
        component: SearchFilm
      },
      {
        path: "/searchactor",
        name: "searchactor",
        component: SearchActor
      },
      {
        path:"/homepage",
        name:"homepage",
        component: Homepage
        
      },
      {
        path: "/movieposter",
        name: "movieposter",
        component: MoviePoster
      },
    
      {
        path: "/homepageActor",
        name: "homepageActor",
        component: HomepageActor
      },
      {
      path: "/actorrecherche",
      name: "actorrecherche",
      component: ActorRecherche
      },
      {
        path: "/movie",
        name: "movie",
        component: Movie
      },
      {
        path: "/movie/:id",
        name: "moviecard",
        component: MovieCard
      },
      {
        path:"/actor",
        name:"actor",
        component: Actor
      },
      {
        path:"/category",
        name:"category",
        component: Category

      },
      {
          path:"/",
          redirect:"/homepageActor",
      },
      {
          path:'/:pathMatch(.*)*',
          redirect:"/search"
      },
      {
        path:'/:pathMatch(.*)*',
        redirect:"/searchactor"
      }
      
  ]
});
router.beforeEach(async (to, from) => {
  const session = useSession()
  if (
    // make sure the user is authenticated
    !session.loggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  } else if (to.name === 'login' && session.loggedIn) {
      return { name: 'search'}
  }
})
  
export default router;