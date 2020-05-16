<template lang="pug">
    article.card
            header.card__thumb
              img(:src=`link+movie.poster_path` , alt="")
            .card__vote
              span.card__vote__number {{ movie.vote_average }}
              span.card__vote__libelle vote
              //span.card__date__popularite {{ movie.popularity }}
            .card__body
              //.card__category {{ movie.genre_ids}} - {{ movie.id }}
              h2.card__title {{ movie.title }}
              span.card__subtitle {{ movie.popularity }}
              p.card__description {{ movie.overview }}
            footer.card__footer
              span {{ movie.release_date }}
              span
</template>

<script>
export default {
  name: 'Card',
  props: ['movie'],
  data() {
    return {
      link: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
    }
  },
}
</script>

<style lang="scss">

  

  //@media screen and (min-width: 641px) 
    .card {
      width: calc(100%/4);
      max-width: 210px;
      cursor: pointer;
      background: #000;
      //box-shadow: 0px 0px 20px rgba(0,0,0,.1);
      //padding: 10px;
      overflow: hidden;
      height: fit-content;
      transition: all 380ms ease;
      position: relative;

      &:hover{

        .card__thumb {
          height: 100px;

          img {
            opacity: .6;
            transform: scale(1.2);
          }
        }

        .card__body {

          height: 100%;

          .card__description {
            opacity: 1;
          }
        }
      }


      .card__thumb {
        height: 235px;
        overflow: hidden;
        transition: height .3s;


        img {
          width: 100%;
          opacity: 1;

          transition: opacity, transform .3s;
          transform: scale(1);
        }
      }
      .card__vote {
        position: absolute;
        top:10px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 12px;
        padding: 5px 0;
        border-radius: 50%;
        text-align: center;
        font-weight: bold;
        box-shadow: 0px 0px 20px rgba(0,0,0,.1);
        background: #fff;

        span {
          display: block;
        }

      }

      .card__body {
        position: relative;
        padding: 10px;
        background: #fff;
        height: 185px;
        transition: height 0.3s;

        .card__category {
          position: absolute;
          left: 0;
          top: -25px;
          background: #fff;
        }

        .card__title {
          margin: 0;
          padding: 0 0 10px 0;
          font-size: 15px;
          color: #000;
          font-weight: bold;
          line-height: 1;
        }

        .card__description {
          font-size: 0.9em;
          line-height: 1.5;
          opacity: 0;
          transition: all 380ms ease;
        }
      }

      .card__footer {

      }
    }

   @media screen and (max-width: 640px) {
     .card {
       width: 50%;
     }
   }

</style>