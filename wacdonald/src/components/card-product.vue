<template lang="pug">
    li.list__card-item__popular
      figure.list__card-item__image
        img(:src="food.icon", alt="")
      h3.list__card-item__title {{ food.name }}
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
    width: calc(100%/3);
  }
</style>