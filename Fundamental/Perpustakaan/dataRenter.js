let arrRenter = [];
let nominal = 0;
let htmlResult = "";

function renderRent() {
  let temp = daftarBooks.map(function (i) {
    return i.bookName;
  });

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

function bayar() {
  nominal = document.getElementById("nominal").value;
  kembalian = nominal - totalHarga;

  if (nominal >= totalHarga) {
    document.getElementById("kembalian").innerHTML = "Kembalian :" + kembalian;
    renderRent();
  } else if (nominal < totalHarga) {
    alert("Jumlah pembayaran kurang");
  } else if (!nominal) {
    alert("Isi nominal pembayaran!");
  }

  stopCounter();
}

//jika confirm dan kurang bayar. kembali ke cart
