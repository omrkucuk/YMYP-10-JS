let sonuc;

const parent = document.querySelector(".parent");

sonuc = parent.children; // Parent'ın tüm direkt çocuk elementlerini (HTMLCollection) döndürür.

sonuc = parent.children[0]; // İlk çocuğa erişir
sonuc = parent.children[0].innerText; // İlk çocuğun metin içeriğini döndürür.
sonuc = parent.children[0].className; // İlk çocuğun class adını döndürür.
sonuc = parent.children[0].nodeName; // İlk çocuğun etiket adını döndürür.

// İkinci çocuk içeriğini "Child Two" rengi: kırmızı

parent.children[1].innerText = "Child Two"; // İkinci çocuğun metin içeriğini değitirir.
parent.children[1].style.color = "red"; // İkinci çocuğun rengini değiştirir.

sonuc = parent.firstElementChild; // Parent'ın ilk çocuk elementini döndürür
sonuc = parent.lastElementChild; // Parent'ın son çocuk elementini döndürür

const child = document.querySelector(".child");

sonuc = child.parentElement; // Çocuğun direkt ebeveyn elementini (.parent) döndürür.
sonuc = child.parentElement.parentElement; // Çocuğun ebeveyninin ebeveynini (.container) döndürür.

sonuc = child.nextElementSibling; // Çocuğun hemen sonraki kardeş elementini (Child 2) döndürür.
sonuc = child.nextElementSibling.nextElementSibling; // Çocuğun iki sonraki kardeş elementini (Child 3) döndürür.
sonuc = child.nextElementSibling.nextElementSibling.previousElementSibling; // Child 3'ten Child 2'ye geri döner.

console.log(sonuc);
