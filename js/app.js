
$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
var articleObjectList = serverRes.results
var bigHtmlStr = ''

var demographicInfoEl = document.querySelector('#app-container')

forEach(articleObjectList, function(articleObject){

  var firstName = articleObject.first_name
  var lastName = articleObject.last_name
  var email = articleObject.oc_email
  if ( email === null ) {
    email = 'undefined'
  }
  var title = articleObject.title
  var party = articleObject.party
  var state = articleObject.state
  var webAddress = articleObject.website
  if ( webAddress === null ) {
    webAddress = 'undefined'
  }
  var socialFace = articleObject.facebook_id
  if (  socialFace === null ) {
    socialFace = 'undefined'
  }
  var socialTwit = articleObject.twitter_id
  var termEnd = articleObject.term_end
  if ( socialTwit === null ) {
    socialTwit = 'undefined'
  }

  var detailsDiv = '<div class="container">'

          detailsDiv += '<h3>' + firstName + ' ' + lastName +'</h3>'
          detailsDiv += '<h4>' + title + '--' + party + '-' + state + '</h4>'
          detailsDiv += '<ul>'
              detailsDiv += '<li>' + 'email: ' + email + '</li>'
              detailsDiv += '<li>' + 'website: ' + webAddress + '</li>'
              detailsDiv += '<li>' + 'facebook: ' + socialFace + '</li>'
              detailsDiv += '<li>' + 'twitter: ' + socialTwit + '</li>'
          detailsDiv += '</ul>'
          detailsDiv += '<h5>' + 'Term End ' + termEnd + '</h5>'
        detailsDiv += '</div>'



  bigHtmlStr += detailsDiv
})
demographicInfoEl.innerHTML = bigHtmlStr
console.log(bigHtmlStr);
})
