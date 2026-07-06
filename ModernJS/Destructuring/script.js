// 1. Array Destructuring
const renkler = ["kırmızı", "yeşil", "mavi", "sarı"];

// Klasik yöntem
const renk1 = renkler[0];
const renk2 = renkler[1];

// Destructuring ile
const [birinci, ikinci, ucuncu] = renkler;
console.log(birinci); // Kırmızı
console.log(ikinci); // Yeşil
console.log(ucuncu); // Mavi
console.log("********");

// İstemediğimiz elemanları atlayabiliriz
const [ilk, , , son] = renkler;
console.log(ilk);
console.log(son);
console.log("##########");

// Rest operatörü ile kalan elemanlar
const [bas, ...geri] = renkler;
console.log(bas);
console.log(geri);

// String
const [isim, soyisim] = "Ahmet Yılmaz".split(" ");
console.log(isim);
console.log(soyisim);
console.log("------------");

// Object
const kullanici = {
  ad: "Mehmet",
  soyad: "Yılmaz",
  yas: 28,
  sehir: "İstanbul",
};

// Klasik yöntem
// const ad = kullanici.ad;
// const soyad = kullanici.soyad;

// Destructuring
// const { ad, soyad, yas, sehir } = kullanici;
// console.log(`Ad: ${ad} Soyad: ${soyad} Yaş: ${yas} Şehir: ${sehir}`);

// Farklı değişken ismi kullanma
const { ad: kullaniciAdi, yas: kullaniciYasi } = kullanici;
console.log(kullaniciAdi, kullaniciYasi); // Mehmet 28

// Default değer atama
const urun = {
  urunAdi: "Laptop",
  urunFiyati: 35000,
};

const { urunAdi, urunFiyati, stok = "Stokta yok" } = urun;
console.log(stok);

// Fonksiyon Parametrelerinde Destructuring
const kullaniciBilgisi = ({ ad, soyad, yas }) => {
  console.log(`${ad} ${soyad} ${yas} yaşında`);
};

kullaniciBilgisi(kullanici);

const urunGoster = ({ urunAdi, urunFiyati = 0, stok = "Bilinmiyor" }) => {
  console.log(`Ürün Adı: ${urunAdi} - Ürün Fiyatı: ${urunFiyati} - Stok Adeti: ${stok}`);
};

urunGoster({ urunAdi: "Mouse", urunFiyati: 250 });

// İç İçe Destr

const kisi = {
  ad: "Ayşe",
  adres: {
    sehir: "Ankara",
    ilce: "Çankaya",
    postaKodu: "06100",
  },
};

const {
  ad,
  adres: { sehir, ilce },
} = kisi;
console.log(ad);
console.log(sehir);
console.log(ilce);
