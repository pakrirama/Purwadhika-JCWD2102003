class Books {
  constructor(bookName, Author, Week, TotalPage, Category, Status, Id) {
    this.bookName = bookName;
    this.Author = Author;
    this.Week = Week;
    this.TotalPage = TotalPage;
    this.Status = Status;
    (this.Category = Category), (this.Id = Id);
  }
}

class Cart extends Books {
  constructor(bookName, Author, Week, TotalPage, Category, Status, Id) {
    super(bookName, Author, Week, TotalPage, Category, Status, Id);
  }
}

class Renter extends Books {
  constructor(bookName, Author, Week, TotalPage, Category, Status, Id, Name) {
    super(bookName, Author, Week, TotalPage, Category, Status, Id);
    this.Name = Name;
    this.dueDate = new Date();
  }
}

let daftarBooks = [
  new Books(
    "Death Note Vol 1",
    "Takeshi Obata",
    1,
    221,
    "Horror",
    "Available",
    0
  ),
  new Books(
    "Death Note Vol 2",
    "Takeshi Obata",
    1,
    323,
    "Horror",
    "Available",
    1
  ),
  new Books(
    "Death Note Vol 3",
    "Takeshi Obata",
    1,
    443,
    "Horror",
    "Available",
    2
  ),
  new Books("Earth", "JJ", 1, 532, "Science", "Available", 3),
];

let arrCart = [];
let arrRenter = [];
let tempDaftarProduk = [];

function changeWeekCart(idx) {
  arrCart[idx].Week = document.getElementById("ddCartWeek_" + idx).value;
  renderCart();
}

function renderCart() {
  let htmlResult = "";
  let totalharga = 0;

  let temp = daftarBooks.map(function (i) {
    return i.bookName;
  });

  arrCart.forEach(
    (item, idx) => {
      item.Id = temp.indexOf(item.bookName);
      totalharga += parseInt(item.Week) * 5000;

      htmlResult += `
            <tr>
            <td>
                   ${idx + 1} 
                </td>
                <td>
                    ${item.bookName} 

                </td>
                <td>
                    ${item.Author} 
                </td>
                
                <td>
                    <select id="ddCartWeek_${idx}"  onchange="changeWeekCart(${idx})">
                        <option ${
                          item.Week == 1 ? "selected" : ""
                        } value="1">Rp.5000 / 1 Week </option>
                        <option  ${
                          item.Week == 2 ? "selected" : ""
                        }  value="2">Rp.10000 / 2 Week </option>
                        <option  ${
                          item.Week == 3 ? "selected" : ""
                        }  value="3">Rp.15000 / 3 Week</option>
                        <option  ${
                          item.Week == 4 ? "selected" : ""
                        }  value="4">Rp.20000 / 4 Week</option>
                    </select>                
                </td>
                <td>
                    ${item.TotalPage} 
                </td>
                <td>
                    ${item.Category} 
                </td>
                <td>
                    <button onclick="deleteCart(${idx})">Delete From Cart</button>
                </td>
                </tr>
                `;
    }

    // alert(harga)
  );
  document.getElementById("labelHarga").innerHTML = "Rp." + totalharga;

  document.getElementById("CartBody").innerHTML = htmlResult;
}

function renderData() {
  let htmlResult = "";
  let filterNamaBuku = document.getElementById("filterNamaBuku").value;

  let filterCat = document.getElementById("filterCat").value;

  daftarBooks.forEach((item, index) => {
    item.Id = index;
  });

  tempDaftarProduk = daftarBooks;

  if (filterCat != "All") {
    tempDaftarProduk = daftarBooks.filter(function (buku) {
      return buku.Category == filterCat;
    });
  }

  if (filterNamaBuku != "") {
    tempDaftarProduk = tempDaftarProduk.filter(function (buku) {
      console.log(
        buku.bookName.toLowerCase().indexOf(filterNamaBuku.toLowerCase())
      );

      return (
        buku.bookName.toLowerCase().indexOf(filterNamaBuku.toLowerCase()) !== -1
      );
    });
  }

  tempDaftarProduk.forEach((item, idx) => {
    htmlResult += `
            <tr>
            <td>
                   ${idx + 1} 
                </td>
                <td>
                    ${item.bookName} 

                </td>
                <td>
                    ${item.Author} 
                </td>
                <td>
                    <select id="ddCartPrice_${item.Id.toString()}" >
                        <option value="1" >Rp.5000 / 1 Week  </option>
                        <option value="2" >Rp.10000 / 2 Week </option>
                        <option value="3" >Rp.15000 / 3 Week </option>
                        <option value="4" >Rp.20000 / 4 Week </option>
                    </select>                  
                </td>
                <td>
                    ${item.TotalPage} 
                </td>
                <td>
                    ${item.Category} 
                </td>
                <td>
                    ${item.Status} 
                </td>
                <td>
                    <button onclick="deleteData(${item.Id})">Delete</button>
                    <button onclick="AddToCart(${item.Id})">Add To Cart</button>
                </td>
                
                </tr>
                `;
  });
  document.getElementById("produkBody").innerHTML = htmlResult;
}

function renderRent() {
  let temp = daftarBooks.map(function (i) {
    return i.bookName;
  });

  let htmlResult = "";
  let totalharga = 0;

  arrRenter.forEach((item, idx) => {
    item.Id = temp.indexOf(item.bookName);

    htmlResult += `
            <tr>
            <td>
                   ${idx + 1} 
                </td>
                <td>
                    ${item.Name} 

                </td>
                <td>
                    ${item.bookName} 

                </td>
                <td>
                    ${item.Author} 
                </td>
                <td>
                    ${item.TotalPage} 
                </td>
                <td>
                    ${item.dueDate.toLocaleDateString()} 
                </td>
                
              
                <td>
                    ${item.Category} 
                </td>
                <td>
                    <button onclick="ReturnBook(${idx})">Return Book</button>
                </td>
                </tr>
                `;
  });
  document.getElementById("RentBody").innerHTML = htmlResult;
  document.getElementById("labelHarga").innerHTML = "Rp.0";
}

function Add() {
  let bookName = document.getElementById("txtBookName").value;
  let author = document.getElementById("txtAuthor").value;

  let status = document.getElementById("ddStatus").value;
  let week = 1;
  let category = document.getElementById("ddCategory").value;
  let totalPage = document.getElementById("txtTotalPage").value;

  const newProduct = new Books(
    bookName,
    author,
    week,
    totalPage,
    category,
    status,
    parseInt(daftarBooks.length)
  );
  daftarBooks.push(newProduct);
  renderData();
  document.getElementById("txtBookName").value = "";
  document.getElementById("txtAuthor").value = "";
  document.getElementById("txtTotalPage").value = "";
}
function AddToCart(idx) {
  if (document.getElementById("waktuPembayaran").hidden == false) {
    alert("Selesaikan proses checkout terlebih dahulu!");
  } else {
    let bookName = daftarBooks[idx].bookName;
    let author = daftarBooks[idx].Author;

    let status = "In Cart";

    let week = document.getElementById("ddCartPrice_" + idx).value;

    let category = daftarBooks[idx].Category;
    let totalPage = daftarBooks[idx].TotalPage;

    if (daftarBooks[idx].Status != "Available") {
      alert("Book Status In Cart");
    } else {
      let cart = new Cart(
        bookName,
        author,
        week,
        totalPage,
        category,
        status,
        idx
      );
      arrCart.push(cart);
    }

    daftarBooks[idx].Status = status;

    renderData();
    renderCart();
  }
}

function confirmPay() {
  let Nama = document.getElementById("txtNamaPeminjam").value;
  if (arrCart.length < 1) {
    alert("Tidak ada barang dalam keranjang!");
  } else {
    startCounter();
    document.getElementById("waktuPembayaran").hidden = false;
  }
}

function ReturnBook(idx) {
  let status = "Available";

  daftarBooks[arrRenter[idx].Id].Status = status;
  arrRenter.splice(idx, 1);
  renderData();
  renderCart();
  renderRent();
}

function deleteData(deleteIdx) {
  if (daftarBooks[deleteIdx].Status != "Available") {
    return alert("Gagal Delete, Stock terdapat di Cart");
  }
  daftarBooks.splice(deleteIdx, 1);
  renderData();
  renderCart();
  renderRent();
}

function deleteCart(deleteIdx) {
  if (document.getElementById("waktuPembayaran").hidden == false) {
    alert("Selesaikan proses checkout terlebih dahulu!");
  } else {
    let idxProduk = arrCart[deleteIdx].Id;
    daftarBooks[idxProduk].Status = "Available";
    arrCart.splice(deleteIdx, 1);

    renderData();
    renderCart();
    renderRent();
  }
}

function checkout() {
  let status = "Rented";
  let Nama = document.getElementById("txtNamaPeminjam").value;
  document.getElementById("waktuPembayaran").hidden = true;

  arrCart.forEach((val) => {
    let renter = new Renter(
      val.bookName,
      val.Author,
      val.Week,
      val.TotalPage,
      val.Category,
      val.Status,
      val.Id,
      Nama
    );
    renter.dueDate.setDate(renter.dueDate.getDate() + parseInt(val.Week) * 7);
    arrRenter.push(renter);
    daftarBooks[val.Id].Status = status;
  });

  arrCart = [];
  renderData();
  renderCart();
  renderRent();
  stopCounter();

  console.log(arrRenter);
}

function stopCounter() {
  document.getElementById("waktuPembayaran").hidden = true;
  clearInterval(stopwatch);
  seconds = 5;
  minutes = 0;
}

renderData();

let stopwatch;

function startCounter() {
  let seconds = 0;
  let minutes = 1;
  stopwatch = setInterval(() => {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);

    seconds -= 1;

    if (seconds < 10) {
      seconds = "0" + seconds;
      document.getElementById("seconds").innerHTML = seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (minutes == 1) {
      minutes = "0" + (minutes - 1);
      seconds = 5;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes > 0 && seconds == 0) {
        minutes = 0;
        seconds = 59;
      }
    }
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    if (seconds < 1 && minutes < 1) {
      clearInterval(stopwatch);
      alert("waktu habis");
      document.getElementById("waktuPembayaran").hidden = true;
    }
  }, 1000);
}

// function startCounter() {
//   var minute = 1;
//   var sec = 5;
//   setInterval(function() {
//     time =minute + " : " + sec
//     if (minute < 0) {
//        time ="0"+minute + " : " + sec;
//       }
//     document.getElementById("timer").innerHTML =time ;
//     sec--;
//     if (sec == 00) {

//       minute --;
//       sec = 5;
//        if (seconds < 1 && minutes < 1) {
//             clearInterval(stopwatch);
//             alert("waktu habis");
//             document.getElementById('waktuPembayaran').hidden=true
//         }

//     }
//   }, 1000);
// }
