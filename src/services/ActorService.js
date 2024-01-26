// ActorService.js
import { api } from '@/services/api.js';

export default {
  getActors() {
    return api('/actors', {
      method: 'GET',
    });
  },
  search(lastname) {
    return api(`/actors/?lastname=` + lastname, {
        method: 'GET',
    })
}

  // Ajoutez d'autres méthodes en fonction des besoins de votre application
};
