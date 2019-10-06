"use strict";



var nav = document.querySelector(".nav"),
    navToggle = nav.querySelector(".nav__toggle"),
    logo = document.querySelector(".page-header__logo");

nav.classList.remove("nav--nojs");

navToggle.addEventListener("click", function() {
  if(nav.classList.contains("nav--closed")) {
    nav.classList.remove("nav--closed");
    logo.classList.add("page-header__logo--closed");
    nav.classList.add("nav--opened");
  } else {
    nav.classList.remove("nav--opened");
    nav.classList.add("nav--closed");
    logo.classList.remove("page-header__logo--closed");
  }
});


var tot = document.querySelectorAll(".counter-divider"); // Кол-во слайдов
  var total = tot[0].textContent;
  var total1 = tot[1].textContent;
  var total2 = tot[2].textContent;
  var a = 1; // Счетчик
  var b = 2; // Счетчик
  var c = 1; // Счетчик

  $(".prev, .next").on("click", function() {
    a = $(this).hasClass("next") ? ++a : --a;
    a = a > total ? 1 : (a < 1 ? total : a);
    $(".fillings__counter-dividend").text(a);
  });

  $(".decor__prev, .decor__next").on("click", function() {
    b = $(this).hasClass("decor__next") ? b+=2 : b-=2;
    b = b > total1 ? 2 : (b < 2 ? total1 : b);
    $(".decor__counter-dividend").text(b);
  });

  $(".reviews__prev, .reviews__next").on("click", function() {
    c = $(this).hasClass("reviews__next") ? ++c : --c;
    c = c > total2 ? 1 : (c < 1 ? total2 : c);
    $(".reviews__counter-dividend").text(c);
  });