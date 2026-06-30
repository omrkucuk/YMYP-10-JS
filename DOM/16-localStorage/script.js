// Anahtar ve Değer
// Veri Ekleme
localStorage.setItem("kullaniciAdi", "Ahmet");
localStorage.setItem("yas", "25");
localStorage.setItem("renk", "mavi");

// Veri Okuma
let isim = localStorage.getItem("kullaniciAdi");
console.log(isim);

let yas = localStorage.getItem("yas");
console.log(`Yaş: ${yas}`);

// Veri Silme
localStorage.removeItem("yas");
console.log(localStorage.getItem("yas"));

// Tüm Verileri Silme
localStorage.clear();

// Obje Kaydetme
let kullanici = {
  isim: "Ali",
  email: "ali@gmail.com",
  yas: 30,
};

console.log(kullanici);

// Kaydetmeden önce JSON.stringify() kullan
localStorage.setItem("kullanici", JSON.stringify(kullanici));

// Okurken JSON.parse() kullan
let kayitliKullanici = JSON.parse(localStorage.getItem("kullanici"));
console.log(kayitliKullanici);

// Dizi kaydetme
let gorevler = ["Alışveriş", "Spor", "Ders Çalış"];
localStorage.setItem("gorevler", JSON.stringify(gorevler));

let kayitliGorevler = JSON.parse(localStorage.getItem("gorevler"));
console.log(kayitliGorevler);

// LocalStorage ve SessionStorage

// Ömür = Local => Kalıcı, Session => Geçici (Sekme kapanınca)
// Kapsam = Local => Tüm Sekmeler, Session => Sadece o sekme

// Kalıcı
// localStorage.setItem("key", "value");

// Geçici (Sekme kapanana kadar)
// sessionStorage.setItem("key", "value");

sessionStorage.setItem("isim", "Mehmet");
sessionStorage.setItem("yas", "40");

let kullanici2 = sessionStorage.getItem("isim");
console.log(kullanici2);
