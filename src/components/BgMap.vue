<template>
  <div>
    <div class="badge-holder">
      <div class="badge">
        <h1>Alessandro&nbsp;&nbsp;&nbsp;&nbsp;Guzzetta</h1>
        <img src="/static/assets/vulcano.png" />
      </div>
    </div>
    <div id="mapid"></div>
  </div>
</template>

<script>
import Leaflet from 'leaflet'

export default {
  name: 'bgmap',

  components: {},

  data () {
    return {}
  },

  head: function () {},

  created () {
    this.fetchData()
  },

  updated () {
    this.initMap()
  },

  mounted () {
    this.initMap()
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  methods: {

    fetchData () {
    },

    initMap () {
      window.$('h1').lettering()
      let myMap = Leaflet.map('mapid', { zoomControl: false }).setView([37.7544, 14.995895], 12)
      Leaflet.tileLayer('https://api.mapbox.com/styles/v1/amenuor/ciyafmipg007w2rod0g4wb734/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1lbnVvciIsImEiOiJjaXlhZmxzeGkwMDR0MndvZXp3OWgybDI5In0.FVcU8LAD7RwwawnYR4Av8w', {
        maxZoom: 18,
        attribution: '',
        id: 'mapbox.streets'
      }).addTo(myMap)
    }

  }

}

</script>

<style>
#mapid{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.badge-holder{
  position: absolute;
  background-color: rgba(51, 51, 51, 0.7);
  height: 85px;
  border-radius: 20%;
  margin: 10px;
}

.badge {
  position: relative;
  top: -85px;
  width: 200px;
  border-radius: 50%;
  transform: rotate(-56deg);
  color: #FF6347;
}

.badge img{
  width: 70px;
  transform: rotate(56deg);
  margin: 40px 0 0 40px;
  text-shadow: 1px 1px 2px #FF6347; 
}

h1 span {
  font: 16px Monaco, MonoSpace;
  height: 100px;
  position: absolute;
  width: 20px;
  left: 0;
  top: 0;
  transform-origin: bottom center;
}

.char1 {
  transform: rotate(6deg);
}

.char2 {
  transform: rotate(12deg);
}

.char3 {
  transform: rotate(18deg);
}

.char4 {
  transform: rotate(24deg);
}

.char5 {
  transform: rotate(30deg);
}

.char6 {
  transform: rotate(36deg);
}

.char7 {
  transform: rotate(42deg);
}

.char8 {
  transform: rotate(48deg);
}

.char9 {
  transform: rotate(54deg);
}

.char10 {
  transform: rotate(60deg);
}

.char11 {
  transform: rotate(66deg);
}

.char12 {
  transform: rotate(72deg);
}

.char13 {
  transform: rotate(78deg);
}

.char14 {
  transform: rotate(84deg);
}

.char15 {
  transform: rotate(90deg);
}

.char16 {
  transform: rotate(96deg);
}

.char17 {
  transform: rotate(102deg);
}

.char18 {
  transform: rotate(108deg);
}

.char19 {
  transform: rotate(114deg);
}

.char20 {
  transform: rotate(120deg);
}

.char21 {
  transform: rotate(126deg);
}

.char22 {
  transform: rotate(132deg);
}

.char23 {
  transform: rotate(138deg);
}

.char24 {
  transform: rotate(144deg);
}
    

</style>