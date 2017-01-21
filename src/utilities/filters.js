import Vue from 'vue'

class Filters {

  static initializeFilters () {
    // Date visualization filter
    Vue.filter('ISODate', function (value) {
      return value.toISOString().substr(0, 10)
    })
  }

}

module.exports = Filters
