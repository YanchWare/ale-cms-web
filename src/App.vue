<template>
  <div id="app">
      <div class="hide-on-small-only">
        <!-- Desktop and Tablet -->
        <BgMap></BgMap>
        <div class="col m3 offset-s8">
          <router-view></router-view>  
        </div>
        <div class="col m1">
          <!-- Side navigation -->
          N A V
        </div>
      </div>
      <div class="hide-on-med-and-up">
        <!-- Mobile FP -->
        <router-view></router-view>  
    </div>
  </div>
</template>

<script>
import BgMap from 'components/BgMap'

export default {
  name: 'app',
  components: {
    BgMap
  }
}
</script>

<style>

</style>
