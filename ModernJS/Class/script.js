// Class Oluşturma
class Araba {
  constructor(marka, model, yil) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
  }

  bilgiGoster() {
    return `${this.marka} ${this.model} (${this.yil})`;
  }

  yasHesapla() {
    const simdikiYil = new Date().getFullYear();
    return simdikiYil - this.yil;
  }
}

// Instance (nesne) oluşturma
const araba1 = new Araba("Toyota", "Corolla", 2018);
const araba2 = new Araba("BMW", "320i", 2020);

console.log(araba1.bilgiGoster());
console.log(araba1.yasHesapla());

// Kişi Class'ı => Property: ad, soyad, dogumYili / Methods: yasHesapla(), tamIsım(), kendiniTanit() ? Merhaba ben ..tamisim ..yaşına
class Kisi {
  constructor(ad, soyad, dogumYili) {
    this.ad = ad;
    this.soyad = soyad;
    this.dogumYili = dogumYili;
  }

  yasHesapla() {
    return new Date().getFullYear() - this.dogumYili;
  }

  tamIsım() {
    return `${this.ad} ${this.soyad}`;
  }

  kendiniTanit() {
    return `Merhaba, ben ${this.tamIsım()}. ${this.yasHesapla()} yaşındayım`;
  }
}

const kisi1 = new Kisi("Ahmet", "Yılmaz", 1990);
const kisi2 = new Kisi("Ayşe", "Demir", 1995);

console.log(kisi1.kendiniTanit());
console.log(kisi2.kendiniTanit());
