<template lang="pug">
  <div id="app">
     .app_container
      header.hdr-logo
        figure
          img(src="./assets/logo.png" alt="")
      .wrapper__list
        .wrapper__list-titles
          h2.wrapper__list-title hey, 
          span.wrapper__list-title__intro what's up ?
        ul.list__items
          cardMenu(v-for="food in foods" :key="food.id" :food="food" v-if="food.cat == 'menu'")
        .wrapper__list-titles
          h2.wrapper__list-title popular
        ul.list__items
          cardProduct(v-for="(food, i) in foods" :key="food.id" :food="food" v-if="food.cat == 'product'")
      
      aside.wrapper__sidebar
        header.hdr__wrapper-btn
          div
        .wrapper__sidebar-titles
          h2.wrapper__sidebar-title My
            br
            | order
          span.wrapper__sidebar-title__intro take out
        ul.list__items
          cardCommande(v-for="(commande, i) in commandes" :key="commande.id" :commande="commande")
        cardResultat


  </div>
</template>

<script>

  import cardMenu from './components/card-menu';
  import cardProduct from './components/card-product';
  import cardCommande from './components/card-commande';
  import cardResultat from './components/card-resultat';

export default {

  name: 'app',
  components: { cardMenu, cardProduct, cardCommande, cardResultat },
  data () {
    return {
      foods: [
        {
            "id": 1,
            "name": "Combo Meal",
            "promo": "20% off",
            "price": 4.5,
            "icon": require('./assets/img/sandwich.svg'),
            "cat": "menu"
        },
        {
            "id": 2,
            "name": "Burgers & Sandiches",
            "promo": null,
            "price": 5,
            "icon": require('./assets/img/birthday-cake.svg'),
            "cat": "menu"
        },
        {
            "id": 3,
            "name": "Happy Meal",
            "promo": null,
            "price": 4.2,
            "icon": require('./assets/img/burger.svg'),
            "cat": "menu"
        },
        {
            "id": 4,
            "name": "Beverages",
            "promo": null,
            "price": 2,
            "icon": require('./assets/img/burger.svg'),
            "cat": "menu"
        },
        {
            "id": 5,
            "name": "Chicken",
            "promo": null,
            "price": 4,
            "icon": require('./assets/img/chicken-leg.svg'),
            "cat": "menu"
        },
        {
            "id": 6,
            "name": "Snack & Sides",
            "promo": null,
            "price": 4,
            "icon": require('./assets/img/chicken-leg.svg'),
            "cat": "menu"
        },
        {
            "id": 7,
            "name": "Big Meal",
            "promo": "20% off",
            "price": 4.5,
            "icon": require('./assets/img/burger.svg'),
            "cat": "product"
        },
        {
            "id": 8,
            "name": "Quarter Pounder",
            "promo": null,
            "price": 5,
            "icon": require('./assets/img/hot-dog.svg'),
            "cat": "product"
        },
        {
            "id": 9,
            "name": "Cheeseburger",
            "promo": null,
            "price": 4.2,
            "icon": require('./assets/img/pizza.svg'),
            "cat": "product"
        },
        {
            "id": 10,
            "name": "Crispy Chicken",
            "promo": null,
            "price": 2,
            "icon": require('./assets/img/chicken-leg.svg'),
            "cat": "menu"
        },
        {
            "id": 11,
            "name": "Sausage sausage",
            "promo": null,
            "price": 4,
            "icon": require('./assets/img/birthday-cake.svg'),
            "cat": "product"
        },
        {
            "id": 12,
            "name": "Filet-o-Fish",
            "promo": null,
            "price": 4,
            "icon": require('./assets/img/roast-chicken.svg'),
            "cat": "product"
        },
        {
            "id": 13,
            "name": "Pizza",
            "promo": null,
            "price": 4,
            "icon": require('./assets/img/pizza.svg'),
            "cat": "menu"
        }
          ],
          commandes: [
            {
            "id": 1,
            "name": "Combo Meal",
            "promo": "20% off",
            "price": 4.5,
            "icon": require('./assets/img/sandwich.svg'),
            "cat": "menu"
        },
        {
            "id": 2,
            "name": "Burgers & Sandiches",
            "promo": null,
            "price": 5,
            "icon": require('./assets/img/birthday-cake.svg'),
            "cat": "menu"
        },
        {
            "id": 3,
            "name": "Happy Meal",
            "promo": null,
            "price": 4.2,
            "icon": require('./assets/img/burger.svg'),
            "cat": "menu"
        }
          ]
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index.scss";

/* Colors */ 
$red: #c7161e;
$gris: #f8f8f6;

@mixin flex($flex, $justifyC) {
  display: $flex;
  justify-content: $justifyC;
}

%params-titles {
  font-size: 1.5em;
  color: #232425;
  font-weight: bold;
  text-transform: capitalize;
}

  #app {

    @include flex(flex, center);
    padding: 10px;
    
    .app_container {
      border: 4px solid #000;
      border-radius: 50px;
      width: 375px;
      height: 812px;
      position: relative;
      padding: 0 30px;
      overflow-y: scroll;

      .hdr-logo {
        margin: 60px 0;
        figure{
          img {
            transform: rotate(180deg);
            width: 15%;
          }
        }
      }

      .wrapper__list {
        .wrapper__list-titles {
          margin:20px 0;

          .wrapper__list-title {
            @extend %params-titles;
          }
        
          .wrapper__list-title__intro{
            font-size: 1.5em;
            color: #232425;
          }
        }

        .list__items {
          @include flex(flex, null);
          flex-wrap: wrap;
        }
      }

      .wrapper__sidebar {
        width: 30%;
        min-height: 116vh;
        background-color: #f8f8f6;
        position: absolute;
        top: 0;
        right: 0;
        padding: 12px 15px;
        border-left-color: #f7f7f5;

        .hdr__wrapper-btn {
            display: flex;
            flex-direction: row-reverse;
            margin: 60px 0;

          div {
            width: 30px;
            height: 30px;
            background-color: #fff;
            border-radius: 50px;
          }
        }

        .wrapper__sidebar-titles {
          text-transform: capitalize;
          margin: 15px 0;
          padding: 0px 10px;

          .wrapper__sidebar-title {
            font-size: 1em;
            color: #232425;
            font-weight: bold;
          }

          .wrapper__sidebar-title__intro {
            font-size: .75em;
            color: #7b7b79;
          }
        }

        .list__items {
          margin-bottom: 50px;
          
        }
      }
    }
  }

</style>
