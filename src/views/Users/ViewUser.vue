<template>
  <div>
    <h1>User Information</h1>
    
    <!-- User Info Section -->
    <div v-if="user">
      <h2>User Details</h2>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p><strong>Website:</strong> {{ user.website }}</p>
      <p><strong>Address:</strong> {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }} - {{ user.address.zipcode }}</p>
    </div>
    
    <!-- Input to specify user ID -->
    <div>
      <label for="userIdInput">Enter User ID:</label>
      <input id="userIdInput" type="number" v-model="userId" @change="fetchUser" placeholder="User ID" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'UserDetail',
  setup() {
    const user = ref(null);
    const userId = ref('');

    const userEndpoint = id => `https://jsonplaceholder.typicode.com/users/${id}`;

    const fetchUser = async () => {
      if (userId.value) {
        try {
          const response = await axios.get(userEndpoint(userId.value));
          user.value = response.data;
        } catch (error) {
          console.error('Error fetching user data:', error);
          user.value = null; // Clear user data if the request fails
        }
      }
    };

    return {
      user,
      userId,
      fetchUser
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>