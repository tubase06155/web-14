'use strict'

function search(input, target) {
  for (var i = 0; i < input.length; i++){
    if (input[i] == target) return i;
  }
  return -1;
 // return  input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
