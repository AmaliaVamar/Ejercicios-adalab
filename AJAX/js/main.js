'use strict';
var textToSearch = document.getElementById("text-to-search");
var buttonElement = document.getElementById("button");
var nameElement = document.getElementById("Name");
var imgElement = document.getElementById("Img");
var repoElement = document.getElementById("Repo");
var noExist = document.getElementById("noexist");

function sendRequest(){
  var request = new XMLHttpRequest();
  var input = textToSearch.value;

  request.open("GET", "https://api.github.com/users/" + input , true);

  request.onload = function(){
    if (request.status >= 200 && request.status < 400){
      var user = JSON.parse(request.response)
      nameElement.innerText = user.login;
      imgElement.src = user.avatar_url;
      repoElement.innerText = user.public_repos;
      noExist.innerHTML = "";
    }else{
      noExist.innerHTML = "El usuario no existe";
      nameElement.innerText = "";
      imgElement.src = "";
      repoElement.innerText = "";
    }
  };

  request.onerror = function(){
      noExist.innerHTML = "Error al tratar de conectarse con el servidor";

  };

  request.send();
}

buttonElement.addEventListener("click",sendRequest);
