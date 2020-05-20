<template lang="pug">
  section.images
    img(src="../images/work_1.jpg", alt="", v-scrollanimation)
    img(src="../images/work_2.jpg", alt="", v-scrollanimation)
    img(src="../images/work_3.jpg", alt="", v-scrollanimation)
    img(src="../images/work_4.jpg", alt="", v-scrollanimation)
</template>

<script>
export default {
  name:'Images'
}
</script>

<style lang="scss" scoped>
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    padding: 10px;

    img {
      width: 40%;
      padding: 10px;
    }
  }

  
  .before-enter {
    opacity: 0;
    transform: scale(0);
    transition: all 1.5s ease-out;
  }

  .enter {
    opacity: 1;
    transform: scale(1);
  }

</style>