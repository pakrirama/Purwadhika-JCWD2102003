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
        console.log(showProduct(allProductObj));
        // } else if (pilihan == 2) {
        //   tambahKeranjang(fruits, keranjang);
        // } else if (pilihan == 3) {
        //   hapusKeranjang(keranjang);
        // } else if (pilihan == 4) {
        //   checoutKeran