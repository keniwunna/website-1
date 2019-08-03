var question = "What is your name?";
var response = prompt(question);						
alert("Good Day " + response + "!");	
alert ("Welcome to George's Website")
var slideIndex = 0;
showSlides();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 12000); // Change image every 12 seconds
}
