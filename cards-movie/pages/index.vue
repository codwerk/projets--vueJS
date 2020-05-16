<template lang="pug">
  #app
    section
      .container__cards
        .card__list 
          
          Card(v-for="movie in movies" :key="movie.id" :movie="movie")

</template>

<script>

import Card from '../components/card.vue';
import axios from 'axios'

export default {
  components: {
    Card
  },
  data() {
    return {
      movies: []
    }
  },
  mounted (){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cc4c125990f5777406886df6fdb3e266&language=en-FR&page=1')
           .then(response => this.movies = response.data.results 
            //console.log(response)
           )
           .catch(erreur => this.movies = [{movie: "Erreur de chargement !"}])
  }
}
</script>

<style lang="scss">

 #app {
   section {

     height: 100vh;

     .container__cards {
        padding: 0px 20px;
     }

      @media screen and (min-width: 641px) {

        .container__cards {

          max-width: 1000px;
          margin: 0 auto;
          //background: rgb(3,37,65);

          .card__list {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;

          }
        }
      }
     @media screen and (max-width: 640px) { 
     .container__cards {
       .card__list {
        display: flex;
          flex-wrap: wrap;

       }
     }
     }

   }
 }



</style>
