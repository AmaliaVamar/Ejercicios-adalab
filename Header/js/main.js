'use strict';

var btnMenu= document.getElementById("btn-menu");
var menuSmall= document.getElementById("menu-small");
var btnMenuClose= document.getElementById("btn-menu-close");
var btnSubnav = document.getElementById("btn-subnav");
var subNav = document.getElementById("sub-nav");

//mostrar menú móvil
function showMenu(){
  menuSmall.style.width= "80%";
}
btnMenu.addEventListener("click", showMenu);

//ocultar menú móvil
function closeMenu(){
  menuSmall.style.width= "0";
}
btnMenuClose.addEventListener("click", closeMenu);

//Mostrar y ocultar submenú de datos en versión móvil
function openCloseSubNav(){
  subNav.classList.toggle("sub-nav-show");
}
btnSubnav.addEventListener("click",openCloseSubNav);


//Fijar la barra de navegación
positionMenu();

$(window).scroll(function() {
  positionMenu();
});

function positionMenu() {
  var headerHeight = $('.title').outerHeight(true);
  var menuHeight = $('.menu').outerHeight(true);

  if ($(window).scrollTop() >= headerHeight){
    $('.menu').addClass('fixed');
    $('.content').css('margin-top', (menuHeight) + 'px');
  } else {
    $('.menu').removeClass('fixed');
    $('.content').css('margin-top', '0');
  }
}
