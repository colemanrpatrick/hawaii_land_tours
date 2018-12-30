console.log("gallery.js ready");

var slideIndex;

var slides = document.getElementsByClassName("slide");

var btn = document.getElementsByClassName("detail-btn");

function toggleGallery(){
  slideIndex = 1;
  idToggle('gallery','active');
  gallerySlider(slideIndex);
}
/*========*/
function sliderCurrent(num){

  gallerySlider(slideIndex = num);

}
function sliderPlus(num){

  gallerySlider(slideIndex += num);

}
/*========*/
function gallerySlider(num){

  if(num > slides.length){
    slideIndex = 1;
  }

  if(num < 1){
    slideIndex = slides.length;
  }

  for (var i = 0; i < btn.length; i++) {
    btn[i].classList = "detail-btn";
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList = "slide";
  }

  slides[slideIndex-1].classList = "slide active";
  btn[slideIndex-1].classList = "detail-btn active";
}
/*========*/
