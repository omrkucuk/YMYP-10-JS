const replaceItem1 = () => {
  const firtsItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Updated Item";

  firtsItem.replaceWith(li); // Eski ilk li'yi, yeni oluşturulan li ile tamamen değiştirir.
};

const replaceItem2 = () => {
  const secondLi = document.querySelector("li:nth-child(2)");

  secondLi.outerHTML = "<li>updated item 2</li>"; // Elementin kendisini ve içeriğini tamamen değiştirir
};

const replaceAllItems = () => {
  const items = document.querySelectorAll("li"); // Tüm li elementlerini seçer

  for (let i = 0; i < items.length; i++) {
    if (i == 1) {
      items[i].innerText = "Second Item";
    } else {
      items[i].innerText = "Replace All";
    }
  }
};

// replaceItem1();
// replaceItem2();
replaceAllItems();
