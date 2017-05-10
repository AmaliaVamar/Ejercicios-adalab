function centralCharacter(text){
    if(text.length % 2 == 0)
      return "Sólo funciono con cadenas de longitud impar";
    else
      return text [(text.length-1)/2];
  
}
var text= ("abcde")
console.log(centralCharacter(text));
