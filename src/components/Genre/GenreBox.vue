<template>
  <div class="card h-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img class="card-img-top embed-responsive-item" :src="genre.imageUrl" alt="Genre Image">
    </div>

    <div class="card-body">
      <router-link :to="{ name: 'ListProducts', params: { id : genre.id } }"><h5 class="card-title">{{genre.genreName}}</h5></router-link>
      <p class="card-text font-italic">{{genre.description.substring(0,65)}}...</p>
      <router-link id="edit-genre" :to="{ name: 'EditGenre', params: { id : genre.id, genre: genre } }" >
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name : "GenreBox",
    props : ["genre"],
    methods : {
        
    }
}
</script> 

<style scoped>
.card{
  width : 20rem;
  height : 24rem;
}
.embed-responsive .card-img-top {
  object-fit: cover;
}
a {
  text-decoration: none;
}
.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}
.card-title:hover {
  font-weight: bold;
}
.card-text {
  font-size: 0.9rem;
}
#edit-genre {
  float: right;
}
</style>