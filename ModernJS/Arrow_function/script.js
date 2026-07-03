// Klasik fonksiyon
// function topla(a, b) {
//   return a + b;
// }

// Arrow Function (tam hali)
// const topla = (a, b) => {
//     return a + b
// };

// Arrow function (kısa hali)
// const topla = (a, b) => a + b;

// Tek parametre
// const kare = (x) => x * x;

// Parametresiz
const selamla = () => "Merhaba";

console.log(selamla());

const kullaniciBilgisi = (ad, yas) => {
  const dogumYili = new Date().getFullYear() - yas;
  return `${ad}, ${dogumYili} yılında doğmuştur`;
};

console.log(kullaniciBilgisi("Ayşe", 25));
