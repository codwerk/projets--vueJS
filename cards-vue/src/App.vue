<template lang="pug">
  main#app
    section.cards
      .container
        .joueur-list
          Joueur(v-for="joueur in joueurs" :key="joueur.id" :joueur="joueur")

</template>

<script>

import Joueur from './components/Joueur.vue';

export default {
  name: 'App',
  components: { Joueur },
  data () {
    return {
      joueurs: [
        { 
          libelle: 'lm',
          nomComplet: 'L.Messi',
          surnom: 'La pulga',
          age: '32 ans',
          salaire: '26 milions',
          poste: 'Attaquant polyvalent',
          buts : 627,
          src: require('./assets/img/lm.png'),
          club: require('./assets/img/barcelone.png')
        },
        { 
          libelle: 'cr',
          nomComplet: 'C.Ronaldo',
          surnom: 'aucun',
          age: '35 ans',
          salaire: '31 millions',
          poste: 'Attaquant',
          buts: 626,
          src: require('./assets/img/cr.png'),
          club: require('./assets/img/juventus.png')
        },
        {
          libelle: 'rl',
          nomComplet: 'R.Lewandowski',
          surnom: 'aucun',
          age: '31 ans',
          salaire: '15 millions',
          poste: 'Avant-centre',
          buts: 411,
          src: require('./assets/img/rl.png'),
          club: require('./assets/img/bayern.png')
        },
        { 
          libelle: 'km',
          nomComplet: 'K.Mbappé',
          surnom: 'aucun',
          age: '21 ans',
          salaire: '17,5 millions',
          poste: 'Attaquant',
          buts: 117,
          src: require('./assets/img/km.png'),
          club: require('./assets/img/psg.png')
        }
      ]

    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .cards {
        height: 100vh;

      @media screen and (min-width: 640px) {
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0px 20px;

          .joueur-list {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            align-content: center;
            height: 100vh;
          }
        }
      }

      @media screen and (max-width: 640px) {
        .container {
          .joueur-list  {
            flex-direction: column;
          }
        }
      }
    }
  }
</style>
