let arrCart = [];
let totalHarga = 0;
function renderCart() {
  let htmlResult = "";

  let temp = daftarBooks.map(function (i) {
    return i.bookName;
  });

  arrCart.forEach(
    (item, idx) => {
      item.Id = temp.indexOf(item.bookName);
      totalHarga += parseInt(item.Week) * 5000;

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
  document.getElementById("labelHarga").innerHTML = "Rp." + totalHarga;

  document.getElementById("CartBody").innerHTML = htmlResult;
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
    console.log(arrCart);
    renderData();
    renderCart();
  }
}

function changeWeekCart(idx) {
  arrCart[idx].Week = document.getElementById("ddCartWeek_" + idx).value;
  renderCart();
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

function ReturnBook(idx) {
  let status = "Available";

  daftarBooks[arrRenter[idx].Id].Status = status;
  arrRenter.splice(idx, 1);
  renderData();
  renderCart();
  renderRent();
}

function confirmPay() {
  let Nama = document.getElementById("txtNamaPeminjam").value;
  if (!Nama) {
    alert("Nama harus diisi");
  } else {
    if (arrCart.length < 1) {
      alert("Tidak ada barang dalam keranjang!");
    } else {
      startCounter();
      document.getElementById("waktuPembayaran").hidden = false;
    }
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
  stopCounter();
  bayar();

  console.log(arrRenter);
}
