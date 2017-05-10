
function countNumbers(number,numberList){
  var count= 0;
  for (var i = 0; i <numberList.length; i++) {
      if(numberList[i]==number){
          count++;
      }
  }
  return count;
}

var number= 2;
var numberList= [2,3,4,2,2,3,4,5];

console.log(countNumbers(number,numberList));
