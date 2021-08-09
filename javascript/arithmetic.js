// operasi aritmatika

// arguments

function operasiAritmatika() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
        // console.log(hasil);
    }
    return hasil;
}

console.log(operasiAritmatika(2,4,2));