// // * ================ Variabel =================

// var name = 'fakhri'
// var Name ='ramadhan'

// console.log(name);
// console.log(Name);

// // * ================ Case Style =================

// // camel case => myNumber,ourLastNight (JS)
// //  snake case => semua huruf kecil my_number,our_last-night(Pyhton)

// console.log('Ini adalah console log');

// var thank = 'Thankyou for comming'

// console.log(thank);

// var tes1 ="Topson"
// var tes2 =123.1
// console.log(typeof(tes1));

// console.log("10"-"10"); //akan melakukan pengecekan number terlebih dahulu, jika string angka diubah menjadi numberuntuk pengurangan pada string otomatis dijadikan number.
// console.log("10"*"10"); //akan melakukan pengecekan number terlebih dahulu, jika string angka diubah menjadi numberuntuk pengalian pada string otomatis dijadikan number.

// console.log(100 % 13);
// var inc=10
// inc++
// // inc--
// console.log(inc);

// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }

// //* MATH PI
//   console.log(Math.PI);
//   // expected output: 3.141592653589793

//   console.log(calculateCircumference(10));
//   // expected output: 62.83185307179586

//   function difference(a, b) {
//     return Math.abs(a - b);
//   }

// //* MATH ABS (menjadikan bilangan positif)
//   console.log(difference(3, 5));
//   // expected output: 2

//   console.log(difference(5, 3));
//   // expected output: 2

//   console.log(difference(1.23456, 7.89012));
//   // expected output: 6.6555599999999995

// //   * MATH POW (pangkat)

// console.log(Math.pow(7, 3));
// // expected output: 343

// console.log(Math.pow(4, 0.5));
// // expected output: 2

// console.log(Math.pow(7, -2));
// // expected output: 0.02040816326530612
// //                  (1/49)

// console.log(Math.pow(-7, 0.5));
// // expected output: NaN

// // *Math sqrt (akar 2)
// function calcHypotenuse(a, b) {
//     return (Math.sqrt((a * a) + (b * b)));
//   }

//   console.log(calcHypotenuse(3, 4));
//   // expected output: 5

//   console.log(calcHypotenuse(5, 12));
//   // expected output: 13

//   console.log(calcHypotenuse(0, 0));
//   // expected output: 0

//   TODO Lihat documentasi function Math https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

var num = 123;
var numString = "123";

// console.log(num.toString());
// console.log(parseInt(numString));

// spesial character

// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

var x = "Hello World";

// count characters
console.log(x.length);

//looking up position of characters
console.log(x.indexOf("World"));

// extract parts of string
// start index,how many characters
console.log(x.substr(5, 3));

console.log(substr);
