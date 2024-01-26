// CategoryService.js
import { api } from '@/services/api.js';

export default {
  getCategories() {
    return api('/categories', {
      method: 'GET',
    });
  },

  getCategoryById(categoryId) {
    return api(`/categories/${categoryId}`, {
      method: 'GET',
    });
  },

  // Ajoutez d'autres méthodes en fonction des besoins de votre application
};
