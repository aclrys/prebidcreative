//Fetch referrer url

var ru = window.location.host;
var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/gh/aclrys/prebidcreative/creative_new.js?ndf="+ru;
document.getElementsByTagName('head')[0].appendChild(script);
 
