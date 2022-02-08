<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Genres</h3>
        <router-link id="add-genre" :to="{name : 'AddGenre'}" v-show="$route.name=='AdminGenre'">
          <button class="btn">Add a new Genre</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="genre of genres" :key="genre.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <GenreBox :genre="genre">
        </GenreBox>
      </div>
    </div>
  </div>
</template>

<script>
import GenreBox from '../../components/Genre/GenreBox';
var axios =  require('axios');
export default {
  name: 'Genre',
  components : {GenreBox},
  data() {
    return {
      baseURL : "https://baobabookstore.herokuapp.com/",
      genres : null,
    }
  },
  methods: {
    async getGenres() {
      //fetch genres
      await axios.get(this.baseURL + "genre/")
      .then(res => this.genres = res.data)
      .catch(err => console.log(err))
    }
  },
  mounted(){
    this.getGenres();
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
#add-genre {
  float: right;
  font-weight: 500;
}
</style>