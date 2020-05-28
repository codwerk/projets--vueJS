<template lang="pug">
  <div id="app">
     .app_container

      .wrapper__list
        .wrapper__list-titles
          h2.wrapper__list-title hey, 
          span.wrapper__list-title__intro what's up ?
        ul.list__items
          cardMenu(v-for="food in foods" :key="food.id" :food="food" v-if="food.cat == 'menu'")
        .wrapper__list-titles
          h2.wrapper__list-title popular
        ul.list__items
          cardProduct(v-for="food in foods" :key="food.id" :food="food" v-if="food.cat == 'product'")

  </div>
</template>

<script>

  import cardMenu from './components/card-menu';
  import cardProduct from './components/card-product';

export default {

  name: 'app',
  components: { cardMenu, cardProduct },
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
          ]
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
  #app {
    
    display: flex;
    justify-content: center;
    padding: 10px;
    
    .app_container {
      border: 2px solid #000;
      border-radius: 50px;
      width: 375px;
      height: 812px;
      position: relative;
      padding: 10px 30px;

      .wrapper__list {
        .wrapper__list-titles {

          margin:30px 0;
          .wrapper__list-title {
            font-size: 1.5em;
            color: #232425;
            margin: 5px 0;
            font-weight: bold;
            text-transform: capitalize;
          }
        
          .wrapper__list-title__intro{
            font-size: 1.5em;
            color: #232425;
          }
        }


        .list__items {
          width: 70%;
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }

</style>
