<template>
    <div id="contacts">
        <h3>Contatti</h3>
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
  }
}
</script>

<style scoped>
#contacts{
  margin: 10px;
}

#contacts h3{
  margin-top: 50px;
}

</style>