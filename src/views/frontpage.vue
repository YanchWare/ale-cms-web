<template>
    <div id="frontpage">
      <h3>Quasi-live dall'Etna</h3>
      <div class="carousel">
        <a class="carousel-item" href="#one!"><img src="http://strangesounds.org/wp-content/uploads/2015/12/mount-etna-eruption-picture-1.jpg"></a>
        <a class="carousel-item" href="#two!"><img src="http://www.parks.it/parco.etna/foto/etna2-800.jpeg"></a>
        <a class="carousel-item" href="#three!"><img src="http://static.euronews.com/images_news/img_pod_mount-etna-volcano-eruption-pod-1002.jpg"></a>
        <a class="carousel-item" href="#four!"><img src="http://galenf.com/Sicily/etna015.jpg"></a>
        <a class="carousel-item" href="#five!"><img src="http://www.earthlyissues.com/images/etna.jpg"></a>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed semper nisl, eu tempor massa. Curabitur cursus arcu sem, nec maximus justo varius ut. Integer posuere sapien eu euismod mollis. Donec mi nisi, finibus non feugiat nec, tristique sit amet dui. Vivamus dignissim sit amet neque eget eleifend. Donec semper ultricies odio, consectetur pellentesque elit laoreet sit amet. Phasellus venenatis ornare augue, quis commodo ligula rhoncus rutrum. Vivamus ultrices quam felis, nec facilisis libero facilisis ac.
    </div>
</template>

<script>
export default {
  name: 'frontpage',
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

    window.$(document).ready(function () {
      window.$('.carousel').carousel()
    })
  }
}
</script>

<style scoped>
#frontpage h3{
  margin-top: 50px;
  margin-bottom: -50px;
}

#frontpage{
  margin: 10px;
}

</style>