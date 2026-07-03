// Arrays

// filter() - Filtreleme:
// Dizideki elemanları belli bir koşula göre filtreler ve yeni bir dizi döner

// map() - Diziyi döner
// Dizideki her elemanı dönüştürerek yeni bir dizi oluşturur.

// find() - Bulma
// Koşulu sağlayan ilk elemanı döner.

// findIndex() - Index Bulma
// Koşulu sağlayan ilk elemanın index'ini döner.

// reduce() - Biriktirme
// Dizideki tüm elemanları tek bir değere indirger. Toplama, çarpma gibi işlemler için kullanılır.

// Örnek veri seti
const notlar = [45, 78, 92, 35, 67, 88, 54];
const kitaplar = [
  { baslik: "Sefiller", yazar: "Victor Hugo", fiyat: 235 },
  { baslik: "1984", yazar: "George Orwell", fiyat: 345 },
  { baslik: "Suç ve Ceza", yazar: "Dostoyevski", fiyat: 460 },
  { baslik: "Simyacı", yazar: "Paulo Coelho", fiyat: 210 },
];

// FILTER
const gecenNotlar = notlar.filter((not) => not >= 50);
console.log(gecenNotlar);

const pahaliKitaplar = kitaplar.filter((kitap) => kitap.fiyat > 250);
console.log(pahaliKitaplar);

// MAP
const kitapBasliklari = kitaplar.map((kitap) => kitap.baslik);
console.log(kitapBasliklari);

const notlarYuzde = notlar.map((not) => not * 1.1);
console.log(notlarYuzde);

// FILTER + MAP - Zincir Kullanımı

const pahaliKitaplarListesi = kitaplar
  .filter((kitap) => kitap.fiyat > 250)
  .map((kitap) => `${kitap.baslik} - ${kitap.fiyat}₺`);

console.log("----- Pahalı Kitaplar Listesi --------");
console.log(pahaliKitaplarListesi);

// const liste = document.querySelector("#liste");
// const kitapListesi = kitaplar.map(
//   (kitap) =>
//     `<li>
//     <h1>${kitap.baslik}</h1>
//     <p>${kitap.yazar}</p>
//     <span>${kitap.fiyat}</span>
//     </li>
//     `,
// );

// liste.innerHTML = kitapListesi;

// FIND - İlk eşleşeni bul
const ilkPahaliKitap = kitaplar.find((kitap) => kitap.fiyat > 250);
console.log(ilkPahaliKitap);

// FINDINDEX - Index Bul
const index = kitaplar.findIndex((kitap) => kitap.yazar == "Dostoyevski");
console.log(index);

// REDUCE

const sayilar = [1, 2, 3, 4, 5];

// Klasik yöntem
let toplam = 0;

for (let sayi of sayilar) {
  toplam += sayi;
}

console.log(toplam);

// Reduce yöntemi
const toplam2 = sayilar.reduce((toplamDeger, currentDeger) => toplamDeger + currentDeger, 0);
console.log("Reduce Yöntemi Sonucu :", toplam2);

const carpma = sayilar.reduce((acc, curr) => acc * curr, 1);
console.log(carpma);

// Örnek: Öğrenci notları sistemi
const ogrenciler = [
  { ad: "Ahmet", notlar: [80, 75, 90] },
  { ad: "Ayşe", notlar: [100, 100, 90] },
  { ad: "Mehmet", notlar: [60, 55, 65] },
];

const ortalamalar = ogrenciler.map((ogr) => {
  const toplam = ogr.notlar.reduce((a, b) => a + b, 0);
  const ort = toplam / ogr.notlar.length;
  return { ad: ogr.ad, ortalama: ort };
});

console.log(ortalamalar);

const basarililar = ortalamalar.filter((ogr) => ogr.ortalama >= 80);
console.log("Başarılı öğrenciler", basarililar);
