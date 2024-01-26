<template>
    <div>
      <h1>Actor Details</h1>
  
      <div v-if="actor && typeof actor === 'object'">
        <div v-if="!editMode">
          <!-- Display mode -->
          <p><strong>First Name:</strong> {{ actor.firstname }}</p>
          <p><strong>Last Name:</strong> {{ actor.lastname }}</p>
          <p><strong>Date of Birth:</strong> {{ actor.dob }}</p>
          <p><strong>Created At:</strong> {{ actor.createdAt }}</p>
          <button @click="toggleEditMode">Modify</button>
        </div>
  
        <form v-else @submit.prevent="submitActorDetails">
          <!-- Edit mode -->
          <label for="firstname">First Name:</label>
          <input v-model="actor.firstname" type="text" id="firstname" />
  
          <label for="lastname">Last Name:</label>
          <input v-model="actor.lastname" type="text" id="lastname" />
  
          <label for="dob">Date of Birth:</label>
          <input v-model="actor.dob" type="text" id="dob" />
  
          <label for="createdAt">Created At:</label>
          <input v-model="actor.createdAt" type="text" id="createdAt" />
  
          <!-- Add more fields as needed -->
  
          <button type="submit">Save Changes</button>
          <button @click="toggleEditMode">Cancel</button>
        </form>
      </div>
  
      <div v-else>
        <p>Loading actor details...</p>
      </div>
    </div>
  </template>
  
  <script>
  import UserService from '@/services/UserService.js';
  import ActorService from '@/services/ActorService.js';
  
  export default {
    data() {
      return {
        actor: null,
        editMode: false,
      };
    },
    methods: {
      async fetchActorDetails(actorId) {
        try {
          const response = await UserService.getActorDetails(actorId);
          this.actor = response; // Assuming the response contains actor details
        } catch (error) {
          console.error('Error fetching actor details:', error);
        }
      },
      async submitActorDetails() {
        try {
          // Send updated actor details to the server
          await UserService.PatchActorDetails(this.actor.id, this.actor);
          console.log('Actor details updated successfully!');
          this.toggleEditMode(); // Switch back to display mode after saving changes
        } catch (error) {
          console.error('Error updating actor details:', error);
        }
      },
      toggleEditMode() {
        this.editMode = !this.editMode;
      },
    },
    mounted() {
      // Fetch actor details when the component is mounted
      const actorId = this.$route.params.actorId;
      this.fetchActorDetails(actorId);
    },
  };
  </script>