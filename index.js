//ANALIZ 
// 1. 4 islem modulu yapilacak.
// 2. functions.js de 4 islem fonksiyonu olusturulacak.
// 3. module.export ile ihrac edilecek.
// 4. index.js de require ile ithal edilen fonksiyon calistirilacak.

const dortIslem = require("./functions");//kod functions.js den ithal edildi.

dortIslem.toplam(3, 5);
dortIslem.fark(4, 8);
dortIslem.carpim(9, 5);
dortIslem.bolum(8, 2);