// ==UserScript==
// @name           Pelit.fi fixejä
// @version        1.0.1
// @namespace      http://bugi.blanko.fi/~hilloh/
// @author         
// @description    
// @include        http://www.pelit.fi/*
// @include        http://pelit.fi/*
// @run-at         document-end
// @license 	   WTFPL version 2; http://sam.zoy.org/wtfpl/COPYING
// ==/UserScript==

//Piilotetaan roskapalkki alhaalta
document.getElementById("smf-footer").style.display = 'none';