<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Website: {{ user.website }}</p>
    <p>Company: {{ user.company.name }}</p>
    <p>Address: {{ user.address.street }}, {{ user.address.city }}</p>
    <router-link to="/posts">Back to Posts</router-link>
  </div>
  <div v-else>
    <p>Loading user details...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`);
      this.user = response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>