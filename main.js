console.log("main.js ready")
/*===events===*/
var menuBtn = document.getElementById("menu-btn");

function menuEvent(){
  toggleThis(this,'active');
  nextSiblingToggle(menuBtn,'active');
}

menuBtn.addEventListener("click",menuEvent,false);

/*============*/

function scrollToElement(element,num){
  $('html,body').animate({
    scrollTop: $('#' + element).offset().top - num
  },'slow');
}
