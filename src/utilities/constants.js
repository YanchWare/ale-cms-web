class Constants {
  // Frontpage Cards
  static get FrontpageSecurityCard () { return 'FP_SECURITY_CARD' }
  static get FrontpageIoTCard () { return 'FP_IOT_CARD' }
  static get FrontpageCloudCard () { return 'FP_CLOUD_CARD' }
  static get FrontpageChangeCard () { return 'FP_CHANGE_CARD' }

  // Slider content types
  static get SliderLastTweets () { return 'SL_LAST_TWEETS' }
  static get SliderLastPosts () { return 'SL_LAST_POSTS' }

  // Portfolio Cards
  static get PortfolioContentsIds () {
    return [
      'PF_NAWART_CONTENT',
      'PF_SOCIALGAP_CONTENT',
      'PF_MMARAZZU_CONTENT',
      'PF_RSA_CONTENT',
      'PF_FF8_CONTENT',
      'PF_VOERVADSBRO_CONTENT',
      'PF_RSABOOK_CONTENT',
      'PF_GITHUBSTATS_CONTENT',
      'PF_TLVVS_CONTENT'
    ]
  }
}

module.exports = Constants
