const input = [1, 3, 4, 5];
const input2 = [22, 17, 19, 20, 14];
const input3 = [1, 3, 5];
const input4 = [2, 4, 6];

function evenOdd(arr) {
  var temp = [];
  arr.map(function (val) {
    if (val % 2 == 0) {
      temp.push("even");
    } else {
      temp.push("odd");
    }
  });
  return temp;
}

console.log(evenOdd(input));
console.log(evenOdd(input2));
console.log(evenOdd(input3));
console.log(evenOdd(input4));
