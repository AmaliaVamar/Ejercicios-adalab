
function findPairs(numbers){
  var pairsNumbers=[];
  var c=0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0){
          pairsNumbers[c]= numbers[i];
          c = c + 1
          }
    }
  return pairsNumbers;
}

var numbers=[2,4,5,7,2,4,8,9,5,4];
console.log (findPairs(numbers));
