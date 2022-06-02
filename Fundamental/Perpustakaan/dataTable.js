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
  document.getElementById("txtBookName").value = "";
  document.getElementById("txtAuthor").value = "";
  document.getElementById("txtTotalPage").value = "";
  renderData();
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
let tempDaftarProduk = [];
