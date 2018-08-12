'use strict'

function sort(input) {
  var len = input.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(input[j-1]>input[j]){
          var temp = input[j-1];
          input[j-1] = input[j];
          input[j] = temp;
       }
    }
  }
  return input;
  //return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
}

module.exports = sort
