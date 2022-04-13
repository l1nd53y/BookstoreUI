<template>
  <Navbar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div> -->
  <router-view v-if="genres && books"
  :baseURL="baseURL"
  :genres="genres"
  :books="books"
  @fetchData="fetchData"
  >
  </router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import axios from 'axios';
export default {
  components: { Navbar },
  data() {
    return {
      baseURL : "https://baobabookstore.herokuapp.com/",
      books: [],
      genres: []
    }
  },
  methods: {
    async fetchData() {

      // api call to get all the genres
      await axios.get(this.baseURL + "bookstore/genre/")
      .then(res => {
        this.genres = res.data
      }).catch((err) => console.log('err', err));

      // api call to get books
      await axios.get(this.baseURL + "book/")
      .then(res => {
        this.books = res.data
      }).catch((err) => console.log('err', err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

Navbar