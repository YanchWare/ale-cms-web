<template>
  <div id="app">
      <div class="hide-on-small-only">
        <!-- Desktop and Tablet -->
        <BgMap></BgMap>
        <div class="col m3 offset-s8">
          <ul id="slide-out" class="side-nav">
            <router-view></router-view>  
          </ul>
          <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
        <div class="col m1">
          <SideNav></SideNav>
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
import SideNav from 'components/SideNav'

export default {
  name: 'app',
  components: {
    BgMap,
    SideNav
  },

  mounted () {
    window.$('.button-collapse').sideNav()
  }

}
</script>

<style>

</style>
