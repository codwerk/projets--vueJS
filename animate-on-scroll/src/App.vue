<template lang="pug">
  #app
    section.header
      .header-box
        h1(v-scrollanimation) Lorem ipsum dolor sit amet
        span(v-scrollanimation) Lorem, ipsum
        p(v-scrollanimation) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aliquid repellat, excepturi ullam quo officiis necessitatibus fugit consectetur delectus adipisci ipsam, facere nesciunt quibusdam, velit doloremque! Numquam placeat inventore eveniet explicabo distinctio odio nulla, rem laudantium voluptatem iusto, perspiciatis ratione repudiandae, impedit iste culpa facere delectus quisquam. Omnis, tenetur odio!

    Description
    Images
</template>

<script>

import Description from './assets/components/Description'
import Images from './assets/components/Images'

export default {
  name: 'app',
  components: {Description, Images},
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" >
body {
  margin: 0;
}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .header {
    background: url('./assets/images/bg-img.jpg');
    background-size: cover;
    background-position: right 35% bottom 0%;
    background-repeat: no-repeat;
    color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    .header-box {
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: 50%;
      overflow: hidden;
      h1 {
        margin-bottom: 1em;
        transition-delay: .1s;
      }

      span {
        margin-bottom: 1em;
        transition-delay: .2s;
      }
      p {
        margin: 0;
        transition-delay: .3s;
      }
    }
  }

}


  @media screen and (max-width: 640px) {
    #app {
      .header {
        .header-box  {
          width: 100%;
        }
      }
    }
  }


.before-enter {
    transform: translateX(100px);
    transition: all 1s cubic-bezier(.41, .01, .57, 1.61);
  }

  .enter {
    transform: translateX(0px);
  }

h1, h2 {
  font-weight: normal;
  margin: 0;
}


</style>
