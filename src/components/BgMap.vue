<template>
  <div>
    <div class="badge-holder">
      <div class="badge">
        <h1>Alessandro Guzzetta</h1>
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
    return {
      markers: null
    }
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
      this.markers = [
        {
          location: [37.732801, 14.950996],
          locationId: 'galvarina',
          icon: {
            iconUrl: '/static/assets/galvarina.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.806111, 14.983333],
          locationId: 'grottadelgelo',
          icon: {
            iconUrl: '/static/assets/grottadelgelo.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.8549304, 15.2696615],
          locationId: 'taormina',
          icon: {
            iconUrl: '/static/assets/taormina.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.727778, 15.055556],
          locationId: 'valleDelBove',
          icon: {
            iconUrl: '/static/assets/valleDelBove.png',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.7880575, 14.8157655],
          locationId: 'bronte',
          icon: {
            iconUrl: '/static/assets/bronte.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        }
      ]
    },

    initMap () {
      window.$('.badge h1').lettering()
      let myMap = Leaflet.map('mapid', { zoomControl: false }).setView([37.7220031, 15.1464744], 11)
      Leaflet.tileLayer('https://api.mapbox.com/styles/v1/amenuor/ciyafmipg007w2rod0g4wb734/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1lbnVvciIsImEiOiJjaXlhZmxzeGkwMDR0MndvZXp3OWgybDI5In0.FVcU8LAD7RwwawnYR4Av8w', {
        maxZoom: 18,
        attribution: '',
        id: 'mapbox.streets'
      }).addTo(myMap)
      this.markers.map((marker) => {
        let markerIcon = Leaflet.icon(marker.icon)
        let markerOnMap = Leaflet.marker(marker.location, {icon: markerIcon}).addTo(myMap)

        // Add circle around marker
        let icon = window.$(markerOnMap._icon)
        icon.parent().append(this.getSpinnerCode(marker.locationId))
        icon.parent().find('#' + marker.locationId).css({
          'transform': icon.css('transform'),
          'margin-left': icon.css('margin-left') + icon.position().left,
          'margin-top': icon.css('margin-top') + icon.position().top
        })
        myMap.on('zoomend', function () {
          icon.parent().find('#' + marker.locationId).css('transform', icon.css('transform'))
        })

        markerOnMap.on('click', () => {
          this.$router.push({ name: 'locations', params: { locationId: marker.locationId } })
        })
      })
    },

    getSpinnerCode (markerId) {
      return '<div id="' + markerId + '" class="showbox"><div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div></div>'
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
  height: 145px;
  border-radius: 20%;
  margin-top: 10px;
  left: -70px;
  transform: rotate(90deg);
}

/* Markers */
.leaflet-marker-icon{
  border-radius: 50%;
}

.showbox{
  position: absolute;
  top: inherit;
}

.loader {
  width: 70px;
  width: 70px;
  position: relative;
  top: -106px;
  left: -35px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.circular {
  -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
          transform-origin: center center;
  width: 100%;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@-webkit-keyframes color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
@keyframes color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}


/* Logo */

.badge {
  position: relative;
  top: -75px;
  width: 170px;
  border-radius: 50%;
  transform: rotate(-56deg);
  color: #FF6347;
}

.badge img{
  width: 60px;
  transform: rotate(-34deg);
  margin: 36px 0 0 10px;
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