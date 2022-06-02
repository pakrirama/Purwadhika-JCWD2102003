// *Nomor 1

function bintangDatar(num) {
  console.log("===========   No.1  ===========");
  var temp = "";
  for (let l = 1; l <= num; l++) {
    temp += "* ";
  }
  console.log(temp);
}

bintangDatar(6);

//* Nomor 2
function bintangTurun(num) {
  console.log("===========   No.2  ===========");

  for (let i = 1; i <= num; i++) {
    console.log("*");
  }
}

bintangTurun(6);

//* Nomor 3
function bintangKotak(num) {
  console.log("===========   No.3  ===========");

  for (let j = 1; j <= num; j++) {
    var temp3 = "";
    for (let k = 1; k <= num; k++) {
      temp3 += "* ";
    }
    console.log(temp3);
  }
}
bintangKotak(6);

// *Nomor 4
function bintangKanan(num) {
  console.log("===========   No.4  ===========");

  var tem4 = "";
  for (let n = 1; n <= num; n++) {
    tem4 += "* ";
    console.log(tem4);
  }
}

bintangKanan(6);

// //*Nomor 5

function bintangKiri(num) {
  console.log("===========   No.5  ===========");

  for (let o = 1; o <= num; o++) {
    var tem5 = "";
    for (let p = num; p >= o; p--) {
      tem5 += "* ";
    }
    console.log(tem5);
  }
}

bintangKiri(6);
//  //* Nomor 6

function segitigaBintang(num) {
  console.log("===========   No.6  ===========");

  for (let q = num; q > 0; q--) {
    let temp6 = "";
    for (let r = 0; r <= num; r++) {
      if (r >= q) {
        temp6 += "* ";
      } else {
        temp6 += " ";
      }
    }
    // temp6+= '\n'
    console.log(temp6);
  }
}
segitigaBintang(10);
