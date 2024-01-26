<!-- ActorCard.vue -->

<template>
    <div class="actor-card">
      <img :src="actor.photo" alt="Actor Photo" />
      <h2>{{ actor.lastname }}</h2>
      <p>{{ actor.firstname }}</p>
      <p>Birthdate: {{ actor.dob }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['actor'],
  };
  </script>
  
  <style scoped>
  /* Styles CSS pour le composant ActorCard.vue */
  .actor-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .actor-card img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  h2 {
    margin-bottom: 10px;
  }
  
  </style>
  