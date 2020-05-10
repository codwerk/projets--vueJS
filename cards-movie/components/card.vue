<template lang="pug">
    article.card
          .card__thumb
            img(:src="movie.poster_path" , alt="")
          .card__date
            span.card__date__vote {{ movie.vote_average }}
            span.card__date__popularite {{ movie.popularity }}
          .card__body
            .card__category
            .card__title {{ movie.title }}
            .card__subtitle {{ movie.overview }}
            p.card__description {{ movie.overview }}
          footer.card__footer
            span {{ movie.release_date }}
            span
</template>

<script>
export default {
  name: 'Card',
  props: ['movie']
}
</script>

<style lang="scss">

</style>