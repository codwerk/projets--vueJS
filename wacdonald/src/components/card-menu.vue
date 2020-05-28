<template lang="pug">
  li.list__card-item 
    figure.list__card-item__image
        img(:src="food.icon", alt="")
    h3.list__card-item__title {{ food.name }}
    
  
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
    width: 45%;
    background-color: #eff0f1;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    margin: 5px 10px 5px 0px;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
      background-color: #D90014;
      color: #fff;
    }


    .list__card-item__image{
      margin: 10px 0px;
      img {
        width: 40%;
      }
    }

    .list__card-item__title {
      font-size: .75em;
      text-align: center;
      font-weight: 600;
    }
    
  }
</style>