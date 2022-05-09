// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);



// * ================ FOR LOOP ====================

// for( init ; comparator ; modificator)


for(let i = 1 ; i <= 5; i++ ){
    console.log(i);
}

// * ================ WHILE LOOP ====================

// while(condition)

let i2 = 1
while (i2<=5 ) {
    console.log(i2);
    i2++
}
// * ================ DO WHILE LOOP ====================

// do{
    //     task
    //     increment
    // }while{comparator}
    
    var i3=1
    do{
        console.log(i3);
        i3++
    }while(i3 < 6)
    
    
// * ================ NESTED LOOP ====================

for (let j = 1; j <= 5; j++) {
    for (let k = 1; k <= 5; k++) {
        console.log(k);
    }
    console.log('-------');
    
}
