var burger = document.querySelector('.burger');
var popup = document.querySelector('.burger-popup-wrapper'); 
var body = document.querySelector('body');

burger.addEventListener("click", PopupActive);

function PopupActive (e){

  e.preventDefault();
  // переключение стилей при клике 
  
  burger.classList.toggle("active");
  popup.classList.toggle("open");
  body.classList.toggle("noclick");

}