// ==UserScript==
// @name           V2.fi kommentit pois
// @version        1.0
// @namespace      http://bugi.blanko.fi/~hilloh/
// @author         
// @description    
// @include        http://www.v2.fi/*
// @include        http://v2.fi/*
// @run-at         document-end
// @license 	   WTFPL version 2; http://sam.zoy.org/wtfpl/COPYING
// ==/UserScript==

//lisätään jQuery, en ole itse kirjoittanut
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

//poistetaan divit id:llä comments (PASKAA KOODIA, JOKAINEN KOMMENTTI ON OMA DIVINSÄ *ID:LLÄ* "comments")
function main() {
  while($('#comments').length !== 0){
  	$('#comments').remove();
  }
  $('.narrower').remove();
}

// load jQuery and execute the main function
addJQuery(main);