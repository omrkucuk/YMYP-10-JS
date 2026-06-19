let sonuc;

sonuc = document.getElementsByClassName("item"); // item class'ına sahip tüm elementleri seçer.
sonuc = document.getElementsByClassName("item")[0];
sonuc = document.getElementsByClassName("item")[1];
sonuc = document.getElementsByClassName("item")[2];

const items = document.getElementsByClassName("item"); // HtmlCollection

const group2 = document.getElementById("group2");

const group2Items = group2.getElementsByTagName("li"); // group2 ID'li element içindeki tüm <li>'leri seçer

const x = document.querySelectorAll("li"); // Tüm <li> elementlerini seçer.
const y = document.querySelectorAll(".item"); // Tüm "item" class'lı elementleri seçer
// group2 ID'li element içindeki tüm "item" class'lı elemenleri seçer
const z = document.querySelectorAll("#group2 .item");

for (let i = 0; i < items.length; i++) {
  // Klasik for döngüsü ile elementler üzerinde gezinme(HTMLCollection ve NodeList için çalışr)
  console.log(items[i]);
}

for (let item of x) {
  // for...of döngüsü ile elementler üzerinde gezinme(NodeList için modern yöntem)
  item.style.color = "red";
  item.style.fontSize = "20px";
  item.innerText = "Eleman";
}

console.log(x);
