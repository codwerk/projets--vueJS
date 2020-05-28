<template lang="pug">
  li.list__card-item 
    figure.list__card-item__image
        img(:src="food.icon", alt="")
    h3.list__card-item__title {{ food.name }}
    span.list__card-item__promo {{ food.promo }}
    
  
</template>

<script>
export default {
  name: 'cardMenu',
  props: {
    food: [String, Number]
  },
  data() {
    return {
     
    }
  }
}
</script>

<style lang="scss">
  .list__card-item  {
    background-color: #f8f8f6;
    width: 29%;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    margin: 5px;
    
    transition: all .5s ease;

    &:hover {
      background-color: #c7161e;
      color: #fff;

      .list__card-item__promo {
        background-color: rgba(255, 255, 255, 0.247);
      }
    }


    .list__card-item__image{
      margin: 10px 0px;
      img {
        width: 40%;
      }
    }

    .list__card-item__title {
      font-size: .65em;
      text-align: center;
      font-weight: 600;
    }

    .list__card-item__promo {
      font-size: .5em;
      text-align: center;
      font-weight: 600;
      padding: 5px;
      border-radius: 5px;
    }
    
  }
</style>