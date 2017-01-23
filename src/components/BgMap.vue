<template>
  <div id="mapid"></div>
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

<style scoped>
#mapid{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>