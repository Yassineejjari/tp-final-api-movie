<!-- CategoryCard.vue -->

<template>
    <div class="category-card">
      <h2>{{ category.name }}</h2>
      <p>{{ category.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['category'],
  };
  </script>
  
  <style scoped>
  /* Styles CSS pour le composant CategoryCard.vue */
  .category-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 10px;
  }
  </style>
  