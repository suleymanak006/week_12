
function toplamaFonksiyonu(a, b){
    const toplam =a+b;
    console.log("2 sayinin toplami = " + toplam);
}
function cikarmaFonksiyonu(a, b){
    const fark =a-b;
    console.log("2 sayinin farki = " + fark);
}
function carpmaFonksiyonu(a, b){
    const carpim =a*b;
    console.log("2 sayinin carpimi = " + carpim);
}
function bolmeFonksiyonu(a, b){
    const bolum =a/b;
    console.log("2 sayinin bolumu = " + bolum);
}
module.exports = {
    toplam: toplamaFonksiyonu,
    fark: cikarmaFonksiyonu,
    carpim: carpmaFonksiyonu,
    bolum: bolmeFonksiyonu
}
