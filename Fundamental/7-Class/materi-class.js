//class adalah temple untuk membuat sebuah object
//1 class bisa memiliki lebih dari 1 property / fungsi

class baju {
  constructor(warna, ukuran, harga = 10000) {
    //property dari object
    this.warna = warna;
    this.ukuran = ukuran;
    this.harga = harga;
  }
}

function jumlah(angka) {
  return angka + 10;
}
jumlah(5);
new baju();
let bajuBola = new baju("merah", "XL");
// bajuBola.harga = 20000;
console.log(bajuBola.harga);

class artist {
  constructor(name) {
    //constructor adalah object yg akan dieksekusi pertama kali saat class dipanggil
    (this.name = name), (this.country = "Indonesia"), (this.year = 2020);
  }

  intro() {
    console.log("I am A Singer " + this.name);
  }
}

let isyana = new artist("Isyana");
let iisDahlia = new artist("iisDahlia");
let Sule = new artist("Sule");

Sule.intro();

let KumpulanArtis = [isyana, iisDahlia, Sule];

KumpulanArtis.forEach((artist) => {
  console.log(artist);
});

isyana.intro();

class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new car("JCW", 2021);

console.log("My Car is " + myCar.age() + " years old.");
console.log(myCar.name + " " + myCar.year);

class product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
    this.qty = 0;
  }
  //method 1
  calculate() {
    return this.price * this.qty;
  }
  // method 2
  toString() {
    return "Harga barang ini adalah Rp.";
  }
}

let number = 123;
console.log(number.toString());

let apel = new product("Apel", 2000);
apel.qty = 2;
apel.warna = "merah";
console.log(apel.toString() + apel.calculate());

// console.log(new product("abc", 1000));

//inheritance

// class book extends product {
//   constructor(productName, price, author, pages) {
//     super(productName, price);
//     this.author = author;
//     this.pages = pages;
//   }
// }

// let buku = new book("Buku Nikah", 2000, "Jason", 1000);
// buku.qty = 3;
// console.log(buku.calculate());

class book extends product {
  constructor(productName, price, author, pages) {
    super(productName, price); //constructor product
    this.author = author;
    this.pages = pages;
  }

  //akan menimpa method si product
  //   toString() {
  //     return "book";
  //   }

  toString() {
    return `${this.productName} || Rp.${this.price.toLocaleString()} x ${
      this.qty
    }
    = ${this.calculate().toLocaleString()}`;
  }
}

const bookHp = new book("harpot", 10000, "j. k, rowling", 762);
bookHp.qty = 100;

console.log(bookHp.toString());
console.log(apel.toString());

// console.log(new book("harpot", 10000, "j. k, rowling", 762));

class shirt {
  constructor(size) {
    this.size = size;
  }
}

//SOAL

// - Sekarang market tidak lagi hanya menjual buah, melainkan berbagai macam produk lainnya.
// Produk yang dijual kini memiliki empat jenis berbeda. Ada produk yang akan digolongkan sebagai fastfood,
//  kemudian cloth atau pakaian, elektronik dan juga buah.
//  Jadi total ada tiga jenis produk baru yang akan kita jual selain buah.

// - Keempat produk memiliki beberapa properties yang sama.
//  Dan setiap produk juga akan memiliki properties yang sifatnya unik,
//   artinya properties yang hanya ada di satu jenis produk saja.

// - Properties yang akan ada pada semua jenis produk diantaranya :
//     - category
//     - name
//     - price
//     - stock

// - Properties yang akan ada pada jenis produk fast food adalah expired :
// berisi integer yang menunjukkan tahun dimana makanan ini tidak lagi layak untuk dikonsumsi

// - Properties yang akan ada pada jenis produk cloth adalah size :
// berisi satu buah huruf yang menunjukkan ukuran dari pakaian, terdapat empat huruf yaitu s, m, l, dan xl

// - Properties yang akan ada pada jenis produk electronic adalah warranty :
//  berisi string 'yes' atau 'no' untuk menunjukkan bahwa barang tersebut masih memiliki garansi atau tidak.

// - Properties yang akan ada pada jenis produk buah  adalah sugarLevel :
// berisi sebuah string yang memiliki tiga buah pilihan yaitu
//  'low', 'medium', dan 'high' untuk memberi tahu tingkat kandungan gula yang ada pada buah

// - Karena kini sudah memiliki jenis atau kategori produk.
// Saat akan menambahkan produk baru, maka akan menentukan jenisnya terlebih dahulu sebelum menginput data lainnya
// seperti nama dan harga. Karena setiap jenis produk memiliki properties uniknya masing - masing.
// Maka nantinya pertanyaan yang muncul juga akan bersifat dinamis atau berbeda disetiap jenisnya.
// Sebagai contoh saat kita sedang menginput produk yang termasuk jenis pakaian,
// maka akan muncul prompt yang akan meminta kita untuk memasukkan informasi size pakaian tersebut.
//  Kemudian jika kita sedang mencoba untuk menambahkan produk jenis elektronik,
//  maka nanti akan ada pertanyaan mengenai status garansinya. Kurang lebih seperti itu.

// - Mungkin hanya itu saja hal yang baru untuk versi market kali ini.
//  Sisanya hanya perlu penyesuaian saja seperti pada proses belanja hingga user melakukan pembayaran.
//  Karena sekarang data disimpan sudah dalam bentuk object, tidak lagi menggunakan array dua dimensi.
