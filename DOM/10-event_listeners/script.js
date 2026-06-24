const mesaj = document.querySelector("#mesaj");
const button = document.querySelector("button");
const buttonContainer = document.querySelector("#buttons");

function mesajGoster() {
  console.log(mesaj.value); // Input'taki değeri konsola yaz
  mesaj.value = "";
}

function mesajGoster2() {
  console.log("mesaj 2");
}

// Birden fazla listener eklenebilir
button.addEventListener("click", mesajGoster);
button.addEventListener("click", mesajGoster2);

// 5 tane buton oluştur - X
// id'leri btn1-btn2-btn3 olarak gitsin - X
// butonun textleri button 1 - button 2 - button 3 olarak gitsin - X
// her buton mesajGoster() fonksiyonunu çalıştırabilsin. - X
// buttonContainer altında olacak - X

for (let i = 1; i <= 5; i++) {
  let button = document.createElement("button");
  button.id = `btn${i}`;
  button.innerText = `button ${i}`;
  button.addEventListener("click", mesajGoster);
  buttonContainer.appendChild(button);
}

// ID'si "btn1" olan butondan mesajGoster fonksiyonunu kaldırır.
// Kaldırılacak fonksiyon, addEventListener ile eklenen fonksiyonun aynısı olmalıdır.
document.querySelector("#btn1").removeEventListener("click", mesajGoster);
