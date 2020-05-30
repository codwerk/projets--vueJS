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
  props: ['food']
}
</script>

<style lang="scss" scoped>
  .list__card-item__popular {
    width: calc(100%/4);
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all .5s ease;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #ffd548;
      transform: translateX(-100px);
      transition: all .5s ease;
    }

    &:hover {
      color: #fff;


      &:before {
        transform: translateX(0);
      }

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
      font-size: .65em;
      margin: 5px 0;
      color: #ffd548;
    }
  }
</style>