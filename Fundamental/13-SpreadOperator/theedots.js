//1.Removw Vowels
function removeVowels(string) {
  output = string.split("").filter((c) => {
    return c != "a" && c != "i" && c != "u" && c != "e" && c != "o";
  });
  return output.join("");

  console.log(removeVowels("javascript"));
  console.log(removeVowels("aiueo"));
}

//2.Alphabet Value
function AlphabetValue(str) {
  const arr = str.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxzy".split("");
  let strValue = 0;

  arr.forEach((c) => {
    const charValue = alphabet.indexOf(c) + 1;
    strValue += charValue;
  });

  return strValue;
}

console.log("Str value : " + AlphabetValue("fakhri"));

//3.Alphabet Value
function AlphabetValueOdd(str) {
  const arr = str.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxzy".split("");
  let strValue = 0;

  arr.forEach((c) => {
    const charValue = alphabet.indexOf(c) + 1;
    if (charValue % 2 != 0) {
      strValue += charValue;
    }
  });

  return strValue;
}

console.log("Str value Odd : " + AlphabetValueOdd("fakhri"));

// 4.Unique Items

arr1 = [1, 3, 7, 4];
arr2 = [1, 5, 3, 7, 0];

function uniqueItems(arr1, arr2) {
  let unique1 = arr1.filter((val) => {
    return !arr2.includes(val);
  });
  let unique2 = arr2.filter((val) => !arr1.includes(val));
  let unique = unique1.concat(unique2);
  1;
  return unique;
}
function uniqueItems2(arr1, arr2) {
  result = [];
  arr1.forEach((val) => {
    if (!arr2.includes(val)) {
      result.push(val);
    }
  });

  arr2.forEach((val) => {
    if (!arr1.includes(val)) {
      result.push(val);
    }
  });

  return result;
}

console.log("Cara 1 :" + uniqueItems(arr1, arr2));
console.log("Cara 2 Jordan :" + uniqueItems2(arr1, arr2));

// console.log(uniqueItem(arr1, arr2));
// console.log(arr2.indexOf(1) == -0);

// 5.Remove duplicate
function removeDuplicate(arr1, arr2) {
  // output = [...arr1, ...arr2];
  // unique = [...new Set(output)];
  // cara kerenya
  // return unique;
  return [...new Set([...arr1, ...arr2])];
}
function removeDuplicate2(arr1, arr2) {
  const result = [arr1];
  arr2.forEach((val) => {
    if (!arr1.includes(val)) {
      result.push(val);
    }
  });
  return result;
}

console.log("Cara Wira : " + removeDuplicate(arr2, arr1));
console.log("Cara Jordan : " + removeDuplicate2(arr2, arr1));
