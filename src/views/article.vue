<template>
    <div id="article">
        Article
    </div>
</template>

<script>
export default {
  name: 'article',
  components: {
  },

  mounted () {
    let el = window.$('#toggle')
    if (!window.sliding) {
      window.sliding = true
      el.hide('slide', {direction: 'right'}, 100, function () {
        el.show('slide', {direction: 'right'}, 1000, function () {
          window.sliding = false
        })
      })
    }
  }
}
</script>

<style scoped>
</style>