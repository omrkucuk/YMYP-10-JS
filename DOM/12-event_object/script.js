const div = document.querySelectorAll("div");

function onClick(e) {
  console.log(e); // event nesnesinin tüm detaylarını gösterir.
  console.log(e.target); // Olayın gerçekleştiği DOM elementini döndürür.
  console.log(e.timeStamp); // Olayın gerçekleşme zamanını milisaniye cinsinden döndürür.
  console.log(e.clientX); // Farenin yatay pencere koordinatlarını döndürür.
  console.log(e.clientY); // Farenin dikey pencere koordinatlarını döndürür.
  console.log(e.offsetX); // Farenin olayın gerçekleştiği elemente göre yatay koordinatlarını döndürür.
  console.log(e.offsetY); // Farenin olayın gerçekleştiği elemente göre dikey koordinatlarını döndürür.
}

div[0].addEventListener("click", onClick);
div[1].addEventListener("click", onClick);
div[2].addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", function (e) {
  // <a> elementinin varsayılan davranışını (sayfayı başka bir adrese yönlendirme) engeller.
  e.preventDefault();

  console.log("Link tıklandı ama sayfaya gidilmedi");
});
