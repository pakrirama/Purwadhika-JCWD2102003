// // *Nomor 1
// console.log("===========   No.1  ===========");

// var temp = ""
// for(let l=1; l <=5; l++){
//     temp+= "* "
// }
// console.log(temp);

// //* Nomor 2
// console.log("===========   No.2  ===========");

// for (let i = 1; i <= 5; i++){
//     console.log("*");
// }

// //* Nomor 3
// console.log("===========   No.3  ===========");

// for(let j=1; j<=5; j++){
//     var temp3=""
//     for(let k=1; k<=5; k++){
//         temp3 += '* '
//     }
//     console.log(temp3);
// }

// console.log("===========   No.3  =========== cara Jordan");
// var temp32=""
// for(let j2=1; j2<=5; j2++){
//     for(let k2=1; k2<=5; k2++){
//         temp32 += '* '
//     }
//     temp32 += '\n'
// }
// console.log(temp32);

// // // *Nomor 4
// console.log("===========   No.4  ===========");

// var tem4=""
// for(let n=1; n<=5; n++){
//     tem4+="* "
//     console.log(tem4);
// }

// // //*Nomor 5
// console.log("===========   No.5  ===========");

// for(let o = 1; o<=5; o++){
//     var tem5=""
//     for(let p=5; p>=o; p--){
//         tem5+='* '
//     }
//     console.log(tem5);
// }

//  //* Nomor 6

for (let q = 5; q > 0; q--) {
  let temp6 = "";
  for (let r = 0; r <= 5; r++) {
    if (r >= q) {
      temp6 += "* ";
    } else {
      temp6 += " ";
    }
  }
  // temp6+= '\n'
  console.log(temp6);
}

for (let q = 0; q < 5; q++) {
  let temp7 = "";
  for (let r = 0; r < 5; r++) {
    if (r >= q) {
      temp7 += " *";
    } else {
      temp7 += " ";
    }
  }

  console.log(temp7);
}
