/*hambuerguer menu*/

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
   
}


/* carousel mobile*/

let slideIndexmobile = 1;
mobileSlides(slideIndexmobile);

// Next/previous controls
function plusSlidesmobile(n) {
  mobileSlides(slideIndexmobile += n);
}

// Thumbnail image controls
function currentSlide(n) {
  mobileSlides(slideIndexmobile = n);
}

function mobileSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mymobileSlides");
 
  if (n > slides.length) {slideIndexmobile = 1}
  if (n < 1) {slideIndexmobile = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndexmobile-1].style.display = "block";
  dots[slideIndexmobile-1].className += " active";
}



 /*desktop lightbox*/

// Open the Modal
function openModal() {
document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
