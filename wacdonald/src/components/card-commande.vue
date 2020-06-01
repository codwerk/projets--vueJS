<template lang="pug">
  li.list__card-item-commande
    figure.list__card-item__image
        img(:src="commande.icon", alt="")
    h3.list__card-item__title {{ commande.name }}
    h5.list__card-item__price {{ commande.price }} €
    .list__card-item__nb
      button.list__card-item__nb-less(@click="nb--") -
      span.list__card-item__nb {{ nb }}
      button.list__card-item__nb-more(@click="nb++") +
    
</template>

<script>
export default {
  name: 'cardCommande',
  props: ['commande'],
  data() {
    return {
      nb: 0
    }
  }
}
</script>

<style lang="scss">
  $gris: #eaeae8;

  .list__card-item-commande {
    border-top: 1px solid #eaeae8;
    padding: 10px 0;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;

    .list__card-item__image {
      text-align: center;
      background: #fff;
      border-radius: 5px;
      padding: 3px;
      width: 40%;
      margin: 10px auto;

      img {
        width: auto; 
      }
    }

    .list__card-item__title {
      margin-bottom: 5px;
      font-size: .55em;
      text-align: center;
      font-weight: 600;
    }

    .list__card-item__price  {
      font-size: .65em;
      margin-bottom: 5px;
    }

    .list__card-item__nb {
      display: flex;
      justify-content: center;
      align-items: center;

      .list__card-item__nb-less,.list__card-item__nb-more {
        border-radius: 5px;
        border: none;
        height: 15px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        font-size: 10px;
      }

      .list__card-item__nb {
        margin: 0px 10px;
        font-size: 9px;
        font-weight: bold;
      }

      .list__card-item__nb-more{
        border: 2px solid #f3f3f1;
      }

      .list__card-item__nb-more {
        background-color: #feca39;
        border: none;
      }
    }
  }
</style>