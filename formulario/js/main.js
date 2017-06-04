'use strict';

var selectDayElement = document.querySelector("#selectday");
var selectMonthElement = document.querySelector("#selectMonth");
var selectYearElement = document.querySelector("#selectYear");
var enterEmailElement = document.querySelector("#email");
var reenterEmailElement = document.querySelector("#re-email");
var buttonElement = document.querySelector("#button");
var formElement = document.querySelector("#formIndex");
var errorElement = document.querySelector("#error");

var days= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var month= ['January','February','March','April','May','June','July','August','September','October','November','December'];


function showDays(){
  for (var i = 0; i < days.length; i++) {
    selectDayElement.options[selectDayElement.options.length] = new Option(days[i], days[i]);
  }
  for (var j = 0; j < month.length; j++) {
    selectMonthElement.options[selectMonthElement.options.length] = new Option(month[j],j);
  }

  var today = new Date();
  var year = today.getFullYear();
  for (var k = 1900; k <= year; k++) {

    selectYearElement.options[selectYearElement.options.length] = new Option(k,k);
  }

}

showDays();

function checkEmail(){
debugger;
  if((enterEmailElement.value === reenterEmailElement.value) && (enterEmailElement.value != "" && reenterEmailElement.value != "")){
    window.location.href = 'createaccount.html';
  }
  else{
    errorElement.innerText =("No se ha podido crear la cuenta");
    reenterEmailElement.classList.add("alarm");

  }
}


buttonElement.addEventListener("click", checkEmail);
