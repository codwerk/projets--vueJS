<template lang="pug">
    li.list__card-item__popular
      figure.list__card-item__image
        img(:src="food.icon", alt="")
      h3.list__card-item__title {{ food.name }}
      span.list__card-item__price {{ food.price }} €
</template>

<script>
export default {
  name: 'cardProduct',
  props: {
    food: [String, Number]
  }
}
</script>

<style lang="scss" scoped>
  .list__card-item__popular {
    width: 29%;
    text-align: center;
    margin: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all .5s ease;

    &:hover {
      background-color: #ffd548;
      color: #fff;
      border-radius: 20px;

      .list__card-item__price {
        color: inherit;
      }
    }

    .list__card-item__image{
      margin: 10px 0px;
      img {
        width: 40%;
      }
    }

    .list__card-item__title {
      font-size: .55em;
      text-align: center;
      font-weight: 600;
    }

    .list__card-item__price {
      font-size: .55em;
      margin: 5px 0;
      color: #ffd548;
    }
  }
</style>