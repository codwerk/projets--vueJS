<template lang="pug">
    .joueur(:id="joueur.libelle")
      img(:src="joueur.src")
      .joueur-inner
        
        .joueur-name-wrap
          h2.joueur-nC {{ joueur.nomComplet }}
        .joueur-image-wrap
          img(:src="joueur.club")
        .joueur-details
          h2 {{ joueur.buts }} {{ buts === 1 ? 'but' : 'buts'}}
          p {{ joueur.age }}
          p {{ joueur.salaire }}
          p {{ joueur.poste }}
</template>

<script>
export default {
  name: 'Joueur',
  props: {
    joueur: [String, Number]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .joueur {
        
        position: relative;
        overflow: hidden;
        cursor: pointer;
        background-size: contain;
        background-repeat: no-repeat;
        transition: all 350ms ease-in-out;

        &:hover {

        }

        /*&:nth-child(1) {
          background-image: url('../assets/img/lm.png');
        }

        &:nth-child(2) {
          background-image: url('../assets/img/cr.png');
        }

        &:nth-child(3) {
          background-image: url('../assets/img/rl.png');
        }

        &:nth-child(4) {
          background-image: url('../assets/img/km.png');
        }*/
          img {
            width: 100%;
            z-index: -1;
            object-fit: cover;
          }
                  
          .joueur-inner {
            
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-40%, -10%);
            width: 100%;
            height: 100%;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 94%;
                height: 95%;
                background-image: linear-gradient(360deg, rgba(255, 255, 255, 0), rgb(205, 205, 205) 500%);
                opacity: 0;
                transition: all 300ms ease-in-out;
                border-radius: 15px;
            }

            &:hover::before {
              opacity: 1;
            }

            .joueur-name-wrap {
              .joueur-nC  {
                  margin: 0;
                  padding: 0;
                  color: #33d9b2;
                  font-size: 20px;
                  text-transform: capitalize;
                  letter-spacing: 1px;

              }
            }

            .joueur-image-wrap {
              img {
                width: 25%;
              }
            }

            .joueur-details {

            }
          }

          @media screen and (min-width: 640px) {

            width: 25%;
            //height: 300px;
           }


          @media screen and (max-width: 640px) {
            width: 100%;
          }
    }
</style>
