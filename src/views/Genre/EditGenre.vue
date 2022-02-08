<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Edit Genre</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Genre Name</label>
            <input type="text" class="form-control" v-model="genreName" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageUrl" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editGenre">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
var axios =  require('axios')
import swal from 'sweetalert';
export default {
  data(){
    return {
      id : null,
      genreName : null,
      description : null,
      imageUrl : null,
      genreIndex : null
    }
  },
  props : ["baseURL", "genre"],
  methods : {
    async editGenre() {
      const updatedGenre = {
        id : this.id,
        genreName : this.genreName,
        description : this.description,
        imageUrl : this.imageUrl,
      }
      await axios({
        method: 'post',
        url: this.baseURL+"genre/update/"+this.id,
        data : JSON.stringify(updatedGenre),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        swal({
          text: "Genre Updated Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.genreName = this.genre.genreName;
    this.description = this.genre.description;
    this.imageUrl = this.genre.imageUrl;
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>