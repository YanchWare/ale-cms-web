<template>
  <div id="app">
      <div class="hide-on-small-only">
        <!-- Desktop and Tablet -->
        <BgMap></BgMap>
        <div id="toggle">
          <div id="close-toggle" @click="closeToggle"><i class="fa fa-window-close" aria-hidden="true"></i></div>
          <router-view></router-view>  
        </div>
        <SideNav></SideNav>
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
  },

  methods: {
    closeToggle () {
      window.$('#toggle').hide('slide', {direction: 'right'}, 1000)
    }
  }

}
</script>
<style>
#toggle{
  height: 100vh;
  width: 40vw;
  background-color: rgba(255, 255, 255, 0.9);
  display: none;
  position: absolute;
  right: 70px;
}
#close-toggle{
  position: absolute;
  font-size: 2em;
  line-height: 1em;
  cursor: pointer;
  margin-left: 10px;
  color: #FF6347;
  background-color: #fff; 
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Tipper', sans-serif;
}
body{
  font-family: 'Quicksand', sans-serif;
}
</style>
