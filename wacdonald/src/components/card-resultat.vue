<template lang="pug">
  .wrapper__resultat
    h3.wrapper__resultat-title total
    h5.wrapper__resultat-price 13.7 €
    button.wrapper__resultat-valider Done

</template>

<script>
export default {
  name: 'cardResultat',
}
</script>

<style lang="scss">

.wrapper__resultat{
  text-align: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top:0px;
    right: -15px;
    width: 90px;
    height: 1px;
    background-color: #eaeae8;
  }

  .wrapper__resultat-title{
    color: #7f7f7d;
    margin: 5px 0;
    text-transform: capitalize;
    font-size: 15px;
    padding-top: 30px;

  }

  .wrapper__resultat-price {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .wrapper__resultat-valider {
    font-weight: bold;
    background-color: #feca39;
    width: 100%;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    height: 10vh;
    font-size: 15px;
  }
}
  

</style>