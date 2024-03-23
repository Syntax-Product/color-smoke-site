
$('.txt').slick({
  dots:false,
    arrows: false,
 
  
  autoplay: true,
  autoplaySpeed: 2000
});



$('.slider-img').slick({
  dots:false,
    arrows: false,
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
		
$('.card-slider').slick({
  dots:false,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 2200,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 2
        }
      }
    ]
});
  
//   
// 



////////////////////////////////
// js for bugrer and popup menu 
///////////////////////////////

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


// // text slider 
// var SliderTxt = document.querySelector('slider-txt');
// var slideTxt1 = document.querySelector('#slider-txt-1');
// var slideTxt2 = document.querySelector('#slider-txt-2');

// function autoplay (){
  
//   setInterval(function AddRemoveClass() {
//         slideTxt1.classList.toggle('visible');
//         slideTxt2.classList.remove('unvisible');
//   }, 3000);

//   setInterval(function AddRemoveClass() {
//     slideTxt2.classList.toggle('unvisible');
//     slideTxt1.classList.remove('visible');
// }, 6000);

// }

// autoplay();

