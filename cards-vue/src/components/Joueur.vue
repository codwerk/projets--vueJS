<template lang="pug">
    .joueur(:id="joueur.libelle")
      img(:src="joueur.src")
      
      .joueur-inner
        .joueur-image-wrap
          img(:src="joueur.club")
        .joueur-name-wrap
          h2.joueur-nC {{ joueur.nomComplet }}
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

        
        &:hover .joueur-inner {
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
        }
        
        .joueur-image-wrap {
          left: 20px;
          top: 20px;
          img {
            width: 25%;
          }
        }

          img {
            width: 100%;
            z-index: -1;
            object-fit: cover;
          }

          .joueur-inner {
            
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 30%);
            width: 100%;
            height: 100%;
            transition: all .3s ease;

            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              //transform: translate(-50%, 20%);
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
                  margin-bottom: 0px;
                  margin-top: 5px;
                  padding: 0;
                  color: #000;
                  font-size: 20px;
                  text-transform: capitalize;
                  letter-spacing: 1px;
                  padding: 0 20px;
                  text-align: center;

              }
            }

            .joueur-details {
                font-size: 10px;
                color: #fff;
                text-align: center;
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
