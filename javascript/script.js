let jmlAngkot = 10;
let jmlAngkotBeroperasi = 6;
let noAngkot = 1;
let angkotLembur = 7;

// while (noAngkot <= jmlAngkotBeroperasi) {
//     console.log('Angkot No.', noAngkot + ' beroperasi dengan baik.');
// noAngkot++;

// }

// for (let noAngkot = jmlAngkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No.', noAngkot + ' sedang tidak beroperasi.')
// }

for (let i = noAngkot; i <= jmlAngkot; i++) {
    if (i <= jmlAngkotBeroperasi && i !== 5) {
        console.log('Angkot No.', i + ' beroperasi dengan baik.')
    } else if (i === angkotLembur || i === 10 || i === 5) {
        console.log('Angkot No.', i + ' sedang lembur')
    } else {
        console.log('Angkot No.', i + ' sedang tidak beroperasi.')
    }
}