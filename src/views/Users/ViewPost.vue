<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Posts
                </h4>
            </div>
            <div class="card-body">

                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>UserId</th>
                    </tr>
                </thead>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td>{{ post.userId }}</td>
                    </tr>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'posts', 
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.getPosts();
        
    },
    methods: {
        getPosts() {
           axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => this.posts = response.data) 
        
    }
  }
}
</script>
