const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const items = document.querySelectorAll(".items li");

function fn() {
  // 1 <h1 class="title f22"></h1>
  // 1 <h1 class="title f22 red"></h1>

  console.log(h1.className); // h1 elementinin mevcut class string'ini döndürür ("title f20")
  console.log(h1.classList); // h1 elementinin class'larını DOMTokenList olarak döndürür

  //   h1.className = "title f22 red";
  h1.classList.add("red"); // "red" class'ını mevcut class'lara ekler.
  //   h1.classList.remove("f20"); // "f20" class'ını siler.
  h1.classList.toggle("red"); // "red" class'ı varsa siler, yoksa ekler.
  h1.classList.replace("f20", "f22"); // "f20" class'ını "f22" ile değiştir.

  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle("active");

    items[i].style.color = "green";
    items[i].style.fontSize = "40px";
    items[i].style.padding = "10px"; // Inline stil ile iç boşluk ekler
  }
}

button.addEventListener("click", fn); // Butona tıklanıldığında fn fonksiyonunu çalıştır
