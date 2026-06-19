// Sayfadaki tek bir elementi seçmek için kullanılan yöntem

let sonuc;

// 1 getElement

sonuc = document.getElementById("title");
sonuc = document.getElementById("title").id;

// Elementin class değerini string olarak döndürür("app-title text-center")
sonuc = document.getElementById("title").className;

// Elementin class'larını DomTokenList olarak döndürür.
sonuc = document.getElementById("title").classList;

// Inline css ile font büyüklüğünü değiştirir.
document.getElementById("title").style.fontSize = "80px";
document.getElementById("title").style.color = "red";
// document.getElementById("title").style.display = "none"; // Elementi sayfada gizler

// Elementin sadece metin içeriğini değiştirir.
document.getElementById("title").innerText = "Alışveriş Listesi";
document.getElementById("title").innerHTML =
  "<p><span style='color:blue'>Alışveriş</span> Listesi 'p' ile</p>";

// 2 QuerySelector

// ID seçicisi (#) ile "title" ID'li elementi döndürür.
sonuc = document.querySelector("#title");
// Class seçicisi (.) ile "app-title" class'lı ilk elementi döndürür.
sonuc = document.querySelector(".app-title");

sonuc = document.querySelector("h1"); // Tag adı ile ilk <h1> elementini döndürür.
sonuc = document.querySelector("input[type='text']"); // Attribute seçicisi ile input'u seçer.

// Pseude selector ile ul içindeki 3. <li> elementini seçer
sonuc = document.querySelector("li:nth-child(3)");
sonuc = document.querySelector("li:nth-child(3)").innerText = "Eleman 3";
sonuc = document.querySelector("li:nth-child(3)").style.color = "green";

const parentElement = document.querySelector("ul");
// Seçilen parentElement (ul) içindeki ilk (li) elementi seçer.
const firstElement = parentElement.querySelector("li");

firstElement.style.color = "red";

console.log(firstElement);
