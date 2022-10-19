'use strict';

window.onload = rotate;
var theAd = 0;
var adImages = new Array("Lab 8 Image 1.jpeg","Lab 8 Image 2.jpeg","Lab 8 Image 3.jpeg","Lab 8 Image 4.jpeg","Lab 8 Image 5.jpeg","Lab 8 Image 6.jpeg");
function rotate() {
theAd++;
if (theAd == adImages.length) {
theAd = 0;
}
document.getElementById("adBanner").src = adImages[theAd];
setTimeout(rotate, 1 * 1000);
}