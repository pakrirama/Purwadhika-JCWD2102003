const prompt = require("prompt-sync")();

// Initial Variabel
let menu = 0;
let pilihan = 0;
const keranjang = [];

//Class
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class FastFood extends Product {
  constructor(name, price, stock, expired) {
    super(name, price, stock);
    this.expired = expired;
    this.category = "FastFood";
  }
}

class Cloth extends Product {
  constructor(name, price, stock, size) {
    super(name, price, stock);
    this.size = size;
    this.category = "Cloth";
  }
}

class Electronic extends Product {
  constructor(name, price, stock, waranty) {
    super(name, price, stock);
    this.waranty = waranty;
    this.category = "Electronic";
  }
}

class Fruits extends Product {
  constructor(name, price, stock, sugarLevel) {
    super(name, price, stock);
    this.sugarLevel = sugarLevel;
    this.category = "Fruits";
  }
}

//Object Produk Kategori
const fastFoodObj = [
  new FastFood("Sabanna", 8000, 10, 1),
  new FastFood("DeKriuk", 9000, 20, 1),
];

const clothObj = [
  new Cloth("H&M", 80000, 10),
  new Cloth("Nudie", 1000000, 4),
  new Cloth("Polo", 500000, 9),
];
const electronicObj = [
  new Electronic("Kulkas", 3000000, 2, "Yes"),
  new Electronic("Kulkas", 3000000, 2, "Yes"),
];

const fruitsObj = [
  new Fruits("Apel", 10000, 10, "Medium"),
  new Fruits("Mangga", 5000, 5, "Medium"),
];

const showProductList = (obj) => {
  let category = obj[0].category;
  let showObj = `Daftar Product ${category}\n`;
  obj.forEach((element, index) => {
    showObj += `${index + 1}. Produk:${element.name} Harga:${
      element.price
    } Stock:${element.stock}\n`;
  });
  return showObj;
};

const addProduct = () => {
  let addCategory = prompt("Masukan kategori produk : ");
  let addName = prompt("Masukan nama produk : ");
  let addPrice = parseInt(prompt("Masukan harga produk : "));
  let addStock = parseInt(prompt("Masukan stock produk : "));
  //Add Product
  if (addCategory == "FastFood") {
    let addExpired = parseInt(prompt("Masukan expired :"));
    fastFoodObj.push(new FastFood(addName, addPrice, addStock, addExpired));
    console.log(showProductList(fruitsObj));
  } else if (addCategory == "Cloth") {
    let addExpired = prompt("Masukan sugar level :");
    clothObj.push(new Cloth(addName, addPrice, addStock));
    console.log(clothObj);
  } else if (addCategory == "Electronic") {
    let addWaranty = prompt("Masukkan Waranty :");
    electronicObj.push(new Electronic(addName, addPrice, addStock, addWaranty));
    console.log(electronicObj);
  } else if (addCategory == "Fruits") {
    let addSugarLevel = prompt("Masukan Sugar Level :");
    fruitsObj.push(new Fruits(addName, addPrice, addStock, addSugarLevel));
    console.log(showProductList(fruitsObj));
  }
};

const allProductObj = [fastFoodObj, clothObj, electronicObj, fruitsObj];

while (menu != 3) {
  menu = prompt(`Daftar Menu :\n1.Menu Admin\n2.Menu User\n\nMasukan Menu :`);
  if (menu == 1) {
    pilihan = prompt(`
        1. Menambahkan Produk \n
        2. Edit Produk \n
        3. Menghapus Produk \n\n
        Masukan Pilihan :
    `);
    if (pilihan == 1) {
      addProduct();
    }
  }
  if (menu == 2) {
    while (pilihan != 5) {
      //balik ke task
      pilihan = prompt(`
       1. Daftar Buah \n
       2. Menambah Keranjang \n 
       3. Menghapus Keranjang \n
       4. Checkout Keranjang \n 
       5. Exit\n\n
       Masukan Pilihan :`);

      //menampilkan isi buah
      if (pilihan == 1) {
        console.log(allProductObj);
        // } else if (pilihan == 2) {
        //   tambahKeranjang(fruits, keranjang);
        // } else if (pilihan == 3) {
        //   hapusKeranjang(keranjang);
        // } else if (pilihan == 4) {
        //   checoutKeranjang(fruits, keranjang);
      }
    }
  }
}
