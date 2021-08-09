// menjumlahkan volume 2 kubus

function kubus(a, b, c) {
    let total = a * b * c;

    return total;
}

// kubus(8, 8, 8);


function jumlahVolumeKubus(kubus1, kubus2) {
    kubus1 = kubus(8,8,8);
    kubus2 = kubus(3,3,3);
    
    let jumlah = kubus1 + kubus2;
    
    return jumlah;
}

console.log('volume kubus pertama adalah ',kubus(8,8,8));
console.log('volume kubus kedua adalah ',kubus(3,3,3));
console.log('jadi jumlah total volume 2 kubus adalah ', jumlahVolumeKubus());