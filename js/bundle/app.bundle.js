"use strict";

var toggleElement = document.querySelector('.container__toggle');
var priceTitle1 = document.querySelector('#price1');
var priceTitle2 = document.querySelector('#price2');
var priceTitle3 = document.querySelector('#price3');
eventListener();

function eventListener() {
  toggleElement.addEventListener('click', toggleSwitch);
}

function toggleSwitch() {
  toggleElement.classList.toggle('active');

  if (toggleElement.classList.contains('active')) {
    priceTitle1.textContent = '199.99';
    priceTitle2.textContent = '249.99';
    priceTitle3.textContent = '399.99';
  } else {
    priceTitle1.textContent = '19.99';
    priceTitle2.textContent = '24.99';
    priceTitle3.textContent = '39.99';
  }
}