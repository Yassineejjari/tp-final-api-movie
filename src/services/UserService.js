import { api } from '@/services/api.js'

export default {
  register (credentials) {
    return api('/users', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  },
  login (credentials) {
    return api('/login_check', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  },
  user () {
    return api('/me')
  },
  getActors() {
    return api('/actors', {
      method: 'GET',
    });
  },
  search(lastname) {
    return api(`/actors/?lastname=` + lastname, {
        method: 'GET',
    });
  },
  getActorById(actorId) {
    return api(`/actors/${actorId}`, {
      method: 'GET',
    });
  },
  getMovies() {
    return api('/movies/', {
      method: 'GET',
    });
  },
  search(title) {
    return api(`/movies/?title=` + title, {
        method: 'GET',
    })
},






}

