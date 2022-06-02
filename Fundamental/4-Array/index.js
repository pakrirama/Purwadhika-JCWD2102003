const arr = ['satu','dua','tiga','empat','lima']


// console.log(arr.indexOf('tigaa','empat'));

var names = ['Alex','Elena','Chaplin','Bernard','Dany']

// console.log('elena dany caplin bernard alex');
// console.log(names.sort().reverse());





const things = [
    ['red pen','blue pen'],
    ['analog clock','digital clock','smart watch']
]

// console.log(things);

// for (let i = 0; i < things.length; i++) {
//     for (let k = 0; k < things[i].length; k++) {
//         console.log(things[i][k]);
//     }
    
// }


    // var menuPrompt = prompt('Pilih Menu : \n 1.Daftar Buah \n 2.Menambah Buah \n 3.Menghapus Buah \n 4.Menghapus Buah \n 5.Exit' )
    var keranjang = ['Mangga','Apel','Melon','Semangka']
    var buah = []
    const daftarBuah = [
        ['Mangga',10,5000],
        ['Apel',10,6000],
        ['Melon',10,7000],
        ['Semangka',10,8000],
        ['Durian',10,9000]
    ]

    for (let b = 0; b < daftarBuah.length; b++) {
            buah.push(daftarBuah[b][0])  
    }
    var idBuah = keranjang.indexOf('Apel')
    console.log(idBuah);
    console.log(keranjang.splice(idBuah,1));
    console.log(keranjang);