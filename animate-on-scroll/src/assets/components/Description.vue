<template lang="pug">

  section.description
    p(v-scrollanimation) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eius, dolorum quo quod quam esse nemo velit debitis vitae error.
    p(v-scrollanimation) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident iste aspernatur fuga commodi deleniti facere nihil tempora assumenda eaque aperiam!
    p(v-scrollanimation) Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus laborum cupiditate in porro asperiores repellendus ipsum atque repudiandae sequi.
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .description {
    position: relative;
    display: flex;

    p {
      width: calc(100%/3);
      font-size: 1.2rem;
      padding: 10px 20px;
      margin: 0;
      transition: all .5s ease;
    }

    @media screen and (max-width: 760px) {
      flex-direction: column;
      padding: 10px;
      p {
        margin: 10px 0;
        padding: 0;
        width: 100%;
        font-size: 1.5em;
      }
    }
  }

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 380ms ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>