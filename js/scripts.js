/*javaScript*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 
/* //////////////////////////////////////////////////////////// */
/*  Multiple Slideshows : 

https://www.w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = [1,1,2];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
} 

/* ---  Icon Menu    ---   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js*/
function myFunction(x) {
    x.classList.toggle("change");
}
