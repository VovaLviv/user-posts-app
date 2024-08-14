<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h4>Posts with User Names
                </h4>
            </div>
            <div class="card-body">

                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                    <tr  v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <router-link :to="'/user/' + post.user.id">
                            {{ post.user.name }}
                          </router-link>
                    </tr>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      users: [],
      loading: true,
    };
  },
  async created() {
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/users'),
      ]);

      this.posts = postsResponse.data;
      this.users = usersResponse.data;

      this.posts = this.posts.map(post => ({
        ...post,
        user: this.users.find(user => user.id === post.userId),
      }));

      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>