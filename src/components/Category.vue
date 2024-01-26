<!-- Category.vue -->

<template>
    <div id="category-page">
      <h1>Categories</h1>
      <div v-if="loading">Loading categories...</div>
      <div v-else>
        <div v-if="categories.length === 0">No categories available.</div>
        <div v-else>
          <div v-for="category in categories" :key="category.id">
            <CategoryCard :category="category" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CategoryCard from "@/components/CategoryCard.vue"; // Assurez-vous que le chemin est correct
  import CategoryService from "@/services/CategoryService.js"; // Assurez-vous que le chemin est correct
  
  export default {
    components: {
      CategoryCard,
    },
    data() {
      return {
        categories: [],
        loading: true,
      };
    },
    mounted() {
      // Chargez la liste des catégories depuis votre API au moment du montage
      this.loadCategories();
    },
    methods: {
      async loadCategories() {
        try {
          const response = await CategoryService.getCategories();
          this.categories = response.data;
          this.loading = false;
        } catch (error) {
          console.error('Erreur lors du chargement des catégories', error);
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques pour la page Category.vue */
  #category-page {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .category-card {
    margin-bottom: 20px;
  }
  </style>
  