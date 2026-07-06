// 1. Array Yayma
const sayilar = [1, 2, 3];
console.log(...sayilar); // 1 2 3 (ayrı ayrı elemanlar)

// 2. Array Birleştirme
const meyveler = ["elma", "armut"];
const sebzeler = ["havuç", "brokoli"];
const yiyecekler = [...meyveler, ...sebzeler, "ekmek", "çilek"];
console.log(yiyecekler);

// 3. Array Kopyalama (Value)
const puanlar1 = [10, 20, 30];
const puanlar2 = [...puanlar1]; // Yeni array oluşturur

puanlar2[0] = 100;
console.log("Puanlar 1: ", puanlar1); // [10, 20, 30] - değişmedi
console.log("Puanlar 2: ", puanlar2); // [100, 20, 30]

// Yanlış kullanım
const yanlis = puanlar1; // Aynı array'i gösterir
yanlis[0] = 999;
console.log(puanlar1);

// 4. Object Birleştirme
const kullanici = {
  ad: "Ahmet",
  email: "ahmet@gmail.com",
};

const konum = {
  sehir: "İstanbul",
  ilce: "Kadıköy",
};

const tumBilgi = {
  ...kullanici,
  ...konum,
  telefon: "555-1234",
};
console.log(tumBilgi);
// {ad: "Ahmet", email: "ahmet@gmail.com", sehir: "İstanbul", ilce: "Kadıköy", telefon: "555-1234"}

// Aynı key varsa sonraki üzerine yazar
const kullanici2 = { ...kullanici, email: "yeni@gmail.com" };
console.log(kullanici2); // email güncellendi

// REST PARAMETERS (Fonksiyonda sınırsız parametre)
const toplam = (...sayilar) => {
  return sayilar.reduce((toplamDeger, sayi) => toplamDeger + sayi, 0);
};

console.log(toplam(1, 2));
console.log(toplam(1, 2, 3));
console.log(toplam(1, 2, 3, 4, 5));

// İlk parametreleri ayır, gerisini topla
const profilGoster = (ad, soyad, ...detaylar) => {
  console.log(`Ad Soyad: ${ad} ${soyad}`);
  console.log("Diğer bilgiler: ", detaylar);
};

profilGoster("Ayşe", "Demir", "İstanbul", "Mühendis", "28 yaşında");
// Ad Soyad: Ayşe Demir
// Diğer bilgiler: ["İstanbul", "Mühendis", "28 yaşında"]

// Array Metodlarıyla Kullanımı

const liste1 = [5, 2, 8, 1, 9];
const liste2 = [3, 7, 4];

// Tüm sayıları birleştir ve en büyüğünü bul
const enBuyuk = Math.max(...liste1, ...liste2);
console.log(enBuyuk);

// Tüm sayıları birleştir ve sırala
const sirali = [...liste1, ...liste2].sort((a, b) => a - b);
console.log(sirali);
