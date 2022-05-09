const fruits = [
  ["apel", 10, 10000],
  ["jeruk", 5, 5000],
  ["nanas", 8, 5000],
  ["manggis", 7, 5000],
  ["mangga", 9, 5000],
];

// console.log(fruits);

function tambahFruits(arrFruits) {
  return fruits.push(arrFruits);
}

tambahFruits(["melon", 3, 300]);

console.log(fruits);
