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
      let myMap = Leaflet.map('mapid').setView([37.39793, 14.658872], 8)
      Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
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