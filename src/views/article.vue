<template>
    <div id="article" v-html="article"></div>
</template>

<script>
import Showdown from 'showdown'

let converter = new Showdown.Converter()
let articles = {
  'bronte': '###Bronte\n\nBronte (Bronti in siciliano) \u00E8 un comune italiano di 19.172 abitanti della citt\u00E0 metropolitana di Catania in Sicilia.\r\nSi estende alle pendici occidentali dell\'Etna. \u00C8 un comune del Parco dell\'Etna e del Parco dei Nebrodi.\r\n![enter image description here](http://blog.tastando.it/wp-content/uploads/2015/09/Bronte-monte-etna.jpg)\r\nDurante il medioevo sul territorio dell\'odierno comune si trovarono 24 piccoli agglomerati appartenenti al monastero di Maniace.\r\n\r\nA partire dal 1468 al 1491 Bronte accolse una nutrita rappresentanza di cittadini albanesi profughi dall\'Albania[2], a causa dalle guerre contro le armate turco-musulmane. La fondazione di Bronte pu\u00F2 essere di poco successiva o dello stesso periodo di Biancavilla, in quanto smarriti i "Capitoli di Fondazione" non ne conosciamo l\u2019esatta data. In questi "Capitoli" o leggi da osservare si riscontra una certa benevolenza, da parte dei feudatari e/o ecclesiastici. Gli albanesi, infatti, godevano di una certa libert\u00E0: potevano spostarsi da un sito all\u2019altro; vendere i propri averi; avere propri ufficiali e sacerdoti; mantenere la propria religione, costumi e lingua, non essere oggetto di angherie. Degli usi e costumi o della religione albanese ben poco \u00E8 rimasto; solo qualche cognome \u00E8 indicativo della provenienza albanese (Scafiti, Schiros, Schilir\u00F2, Triscari, Zappia)[3] e molte tipiche parole di sicura origine albanese[4][5].',
  'taormina': '###Taormina\n\n\u00C8 uno dei centri turistici internazionali di maggiore rilievo della regione siciliana, conosciuta per il suo paesaggio naturale, le bellezze marine e i suoi monumenti storici ed \u00E8 stata un importante meta del Grand Tour. Taormina \u00E8 stata una delle principali destinazioni turistiche dal XIX secolo in Europa.\r\n![enter image description here](https://www.mondoguide.it/uploads/home/152fb4ccbae648.jpg)\r\nDurante il ventesimo secolo la citt\u00E0 divenne una colonia di espatriati artisti, scrittori, e intellettuali; ad esempio Albert Stopford, con il suo famoso giardino edoardiano, e D.H. Lawrence. Trent\'anni pi\u00F9 tardi, da aprile 1950 a settembre 1951, la stessa villa era l\'abitazione di Truman Capote, che scrisse del suo soggiorno nel saggio Fontana Vecchia. Inoltre Tennessee Williams, Jean Cocteau e Jean Marais hanno visitato il luogo. Charles Webster Leadbeater; Jiddu Krishnamurti venne ad abitare qui, definendo Taormina come un luogo ideale per sviluppare i suoi talenti. Halld\u00F3r Laxness, l\'autore islandese e vincitore del premio Nobel, ha lavorato qui sul primo romanzo islandese moderno, Vefarinn Mikli FRA Ka\u0161mir. Taormina ha ispirato la denominazione di \'Toormina\', un sobborgo della citt\u00E0 australiana di Coffs Harbour.',
  'valledelbove': '###Valle del Bove\n\nLa formazione di tale depressione viene fatta risalire a 64.000 anni fa a causa del collasso dei centri eruttivi del Trifoglietto I e del Trifoglietto II, predecessori dell\'Etna. Lo sprofondamento dei due crateri form\u00F2 una caldera profonda 1 chilometro e larga 5 chilometri. Il cono vulcanico del monte Etna attuale si sarebbe formato a nord-ovest dell\'unit\u00E0 del Trifoglietto II circa 34.000 anni fa.\r\n\r\n\r\nLa casa Inglese sotto il cratere e la Valle del Bove, sir Charles Lyell, 1878\r\nLa Valle del Bove si presenta desertica, ricoperta da colate laviche recenti (1991-\'93 e seguenti) ed occupa una superficie di circa 37 km\u00B2. Il recinto craterico all\'interno del quale si trova la valle si sviluppa per un perimetro di circa 18 chilometri e presenta a nord e a sud pareti dall\'altezza variabile tra i 400 e i 1.000 metri. A est, invece, si apre in una spianata interrotta dal Monte Calanna che emerge isolato dalle recenti lave. Uno scosceso pendio, il Salto della Giumenta, affievolito dalla colata lavica del 1991-\'93, la separa dalla sottostante Val Calanna.\r\n![enter image description here](http://www.aitnemed.com/wp-content/uploads/2014/09/valledelbove21.jpg)\r\nNella valle sono presenti diverse dagale (porzioni di vegetazione isolata circondate da lave) e sono visibili alcuni crateri avventizi recenti come Monte Simone (eruzione del 1811-1812) e i Monti Centenari (eruzione del 1852-1853) nonch\u00E9 alcune formazioni rocciose risalenti a collassi del Trifoglietto.[1] La genesi della valle \u00E8 oggetto di studi ma questa sembra non essere riferibile a un unico evento quanto piuttosto a una serie di collassi, il cui ultimo, secondo studi recenti, dovrebbe essere avvenuto circa 9.000 anni fa. Un grande ammasso di materiale di riporto presente nella zona costiera di Riposto, chiamato "Chiancone di Riposto"[2] sembrerebbe confermare questa ipotesi. Lo Tsunami generato da tale evento distrusse le civilta allora presenti sulle coste Africane e diede probabilmente luogo al mito di Atlantide e della sua scomparsa.',
  'galvarina': '###Rifugio della Galvarina\n\nUno dei posti pi\u00F9 affascinanti dell\u2019Etna facilmente raggiungibile e adatto a tutti senza alcuna difficolt\u00E0 anche per i pi\u00F9 piccoli. L\u2019itinerario che vi proponiamo parte dal cancello della Forestale a Monte Gallo per arrivare sino al Rifugio della Galvarina a 1818 metri sul mare. Le peculiarit\u00E0 naturali di questo itinerario sono rappresentate dal territorio nel suo insieme che offre una visione del nostro vulcano molto particolare e un alternarsi di paesaggi molto variegati. \r\n\r\n![enter image description here](http://www.etnanatura.it/foto/all/Rifugio_della_Galvarina/20100509%20054.jpg)\r\n\r\nIl sentiero \u00E8 ben tracciato e passa attraverso un fitto bosco di Pino Laricio per affacciarsi sulle colate del 1892, ma nel percorso sono presenti betulle, campi di festuca, spinosanto e ginepro con la costante presenza del fianco sud ovest del vulcano spesso innevato anche a primavera inoltrata. \r\nIl percorso pu\u00F2 essere fatto a piedi oppure in mountain bike, inoltre presso il rifugio Galvarina, sempre aperto, dotato di camino e di acqua (non potabile) \u00E8 possibile approntare un pic nic o un pernottamento con sacco a pelo.\r\nPer raggiungere l\u2019ingresso di Serra la Nave vi suggeriamo un tragitto attraverso una strada di montagna poco conosciuto, da percorre in auto, che attraversa giardini coltivati a frutta, pere, mele, ciliegi e alberi di ginestra.',
  'grottadelgelo': '###Grotta del Gelo\n\nUbicata a 2030 metri d\'altitudine si trova nel territorio del comune di Randazzo. La sua apertura e forma conica rappresenta dai primi anni settanta una meta per escursionionisti e turisti nonch\u00E9 esperti e scienziati. Precedentemente veniva usata dai pastori per abbeverare le loro greggi.\r\n\r\n![enter image description here](http://static.panoramio.com/photos/large/2157591.jpg)\r\n\r\nLa grotta del Gelo \u00E8 una galleria di scorrimento, originata dal raffreddamento di una colata lavica dopo un\'eruzione iniziata nel luglio 1614 e protrattasi per oltre dieci anni. Il fenomeno che porta alla creazione di questo tipo di strutture \u00E8 molto comune: le pareti e la superficie della colata, a contatto con l\'atmosfera, raffreddano pi\u00F9 velocemente della parte interna della colata lavica. Viene a crearsi quindi una sorta di canale coperto fatto di lava solidificata, all\'interno del quale scorre il flusso lavico ancora incandescente. Quando l\'alimentazione della colata diminuisce, il livello del flusso lavico all\'interno si abbassa sempre pi\u00F9, lasciando una struttura cava definita appunto "galleria di scorrimento". Non sempre queste strutture sono di facile individuazione, in quanto solo crolli della volta possono rivelarne la presenza. In estate la grotta \u00E8 facilmente accessibile, nonostante siano necessarie 5 ore di cammino per raggiungerla. In inverno il suo ingresso \u00E8 spesso nascosto dalla neve, che lo copre totalmente. Anche nei periodi pi\u00F9 caldi al suo interno la temperatura non sale mai sopra i -6 \u00B0C nella, mentre quella pi\u00F9 prossima all\'imboccatura viene influenzata dagli agenti atmosferici esterni.\r\n\r\nSi \u00E8 notato negli ultimi anni che la grotta ha subito una perdita del volume del ghiaccio al suo interno. La cosa \u00E8 da attribuire in parte al passaggio nei pressi dell\'eruzione del 1981, ma qualcuno l\'attribuisce ad altri fenomeni[quali?]. Dagli anni novanta si monitorano costantemente le temperature all\'interno della grotta tramite sensori computerizzati e numerosi controlli metodici "in loco" da parte degli esperti del centro vulcanologico di Catania.',
  'about': '###Alessandro Guzzetta\n\n![enter image description here](https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/13327645_10209803568189835_8085989628775356618_n.jpg?oh=4d8240428532e2445dbfaef3186a3df1&oe=591A1975)'
}

export default {
  name: 'article',
  components: {
  },

  data () {
    return {
      article: null
    }
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      let articleId = this.$route.params.locationId ? this.$route.params.locationId : this.$route.name
      if (!articleId) {
        return
      }

      this.article = converter.makeHtml(articles[articleId.toLowerCase()])

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

}
</script>

<style scoped>
#article{
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  padding: 10px;
}
</style>