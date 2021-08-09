// code by Erwin Aris Prayogo A.K.A HexaCloud


// variabel global atau global variable
let star = '';
// 
// jika rows atau columns lebih besar atau sama dengan 0  
let angka1 = 10;

// jika rows atau columns sama dengan 0
let angka2 = 0;




// --------- segitiga sama sisi -----------
function segitigaSamaSisi() {
    for (let rows = angka1; rows >= angka2; rows--) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += '  ';
        }
        for (let columns1 = angka1; columns1 >= rows; columns1--) {
            star += ' *';
        }
        for (let columns1 = angka1; columns1 > rows; columns1--) {
            star += ' *';
        }
        star += '\n';
    }
    console.log(star, '===== segitiga sama sisi =====');
}




// --------- segitiga siku-siku ---------
function segitigaSiku() {
    for (let rows = angka2; rows < angka1; rows++) {
                                // angka2  <= //angka2
        for (let columns = angka2; columns <= rows; columns++) {
            star += '*';
        }
    star += '\n';
}
console.log(star, '===== segitiga siku-siku =====');
}




// -------------- segitiga siku sama sisi --------------
function segitigaSikuSamaSisi() {  
    for (let rows = angka2; rows <= angka1; rows++) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += ' *';
        }
        star += '\n';
    }
    console.log(star + '===== segitiga siku sama sisi =====');
}



// ---------------- segitiga lancip ------------------
function segitigaLancip() {
    for (let rows = angka1; rows >= angka2; rows--) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += ' ';
        }
        for (let columns1 = angka1; columns1 >= rows; columns1--) {
            star += ' *';

        }
        star += '\n';
    }
    console.log(star + '===== segitiga lancip =====');
}




// ------------ segitiga sama lancip terbalik ---------------
function segitigaLancipTerbalik() {
    for (let rows = angka2; rows <= angka1; rows++) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += ' ';
        }
        for (let columns1 = angka1; columns1 >= rows; columns1--) {
            star += ' *';
        }
        star += '\n';
    }
    console.log(star + '===== segitiga lancip terbailik =====');
}






// ------------ segitiga tumpul ---------------
function segitigaTumpul() {
    for (let rows = angka2; rows <= angka1; rows++) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += ' ';
        }
        for (let columns1 = angka2; columns1 <= rows; columns1++) {
            star += ' *';
        }
        star += '\n';
    }
    console.log(star + '===== segitiga tumpul =====');
}





// ------------ jajar genjang ---------------
function jajarGenjang() {
    for (let rows = angka1; rows > angka2; rows--) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += '  ';
        }
        for (let columns1 = angka1; columns1 >= rows; columns1--) {
            star += '  *';
        }
        for (let columns1 = angka2; columns1 < rows; columns1++) {
            star += '  *';
        }
        star += '\n';
    }
    console.log(star + '===== jajar genjang =====');
}



// --------- belah ketupat -----------
function belahKetupat() {
    for (let rows = angka1; rows > angka2; rows--) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += '  ';
        }
        for (let columns1 = angka1; columns1 >= rows; columns1--) {
            star += ' *';
        }
        for (let columns1 = angka1; columns1 > rows; columns1--) {
            star += ' *';
        }
        star += '\n';
    }
    for (let rows = angka2; rows <= angka1; rows++) {
        for (let columns = angka2; columns <= rows; columns++) {
            star += '  ';
        }
        for (let columns1 = angka1; columns1 >= rows; columns1--) {
            star += ' *';
        }
        for (let columns1 = angka1; columns1 > rows; columns1--) {
            star += ' *';
        }
        star += '\n';
    }
    console.log(star, '===== belah ketupat =====');
}


// ------------- segitiga pascal belum bisa --------------




// segitigaSamaSisi();
segitigaSiku();
// segitigaSikuSamaSisi();
// segitigaLancip();
// segitigaLancipTerbalik();
// segitigaTumpul();
// jajarGenjang();
// belahKetupat();


