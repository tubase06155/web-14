'use strict'
function sort(input) {
  var k = input.length;
  for (var i = 0; i < k; i++) {
    var min = i;
    for (var j = i; j < k; j++) {
      if (input[j] < input[min]) min = j;
    }
    var temp = input[i];
    input[i] = input[min];
    input[min] = temp;
  }
  return input;
}
function generate(testLengthArray) {
  var result = [];
  var k = testLengthArray.length;
  for (var i = 0; i < k; i++) {
    var area = [];
    var target;
    var output;
    for (var j = 0; j < testLengthArray[i]; j++) {
      area[j] = Math.floor(Math.random() * 1000);// Math.floor(Math.random() * -2001) + 1000;
    }
    sort(area);
    var temp = Math.floor(Math.random() * testLengthArray[i]);
    var key = Math.floor(Math.random() * 4);
    if (key === 0) {
      target = area[temp];
    } else if (key === 1) {
      target = 12345;
    } else if (key === 3) {
      target = area[0];
    } else if (key === 2) {
      target = area[testLengthArray[i] - 1];
    }

    result.push({ "input": area, "target": target, "output": area.indexOf(target) });
  }
  return result;
}

module.exports = generate