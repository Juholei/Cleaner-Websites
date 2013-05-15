// ==UserScript==
// @name           Afterdawnin kommentit pois
// @version        1.0.
// @namespace      http://bugi.blanko.fi/~hilloh/
// @author         
// @description    
// @include        http://fin.afterdawn.com/*
// @include        http://www.puhelinvertailu.com/*
// @include        http://www.hardware.fi/*
// @run-at         document-end
// @license 	   WTFPL version 2; http://sam.zoy.org/wtfpl/COPYING
// ==/UserScript==

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

function main() {
    $('.uc').remove();
    $('#commentlist').remove();
}

// load jQuery and execute the main function
addJQuery(main);