function clearHeader() {
  const h1 = document.querySelector("h1");
  h1.remove(); // h1 elementinin kendisini DOM'dan kaldırır
}

clearHeader();

function removeItem1() {
  //   const firstItem = document.querySelector("li:first-child");
  //   firstItem.remove();

  const ul = document.querySelector("ul");
  const firstItem = document.querySelector("li:first-child");

  // Ebeveyn (ul) üzerinden, çocuğu (firstItem) siler (Eski/alternatif yöntem)
  ul.removeChild(firstItem);
}

function removeItem(number) {
  const li = document.querySelector(`li:nth-child(${number})`);
  li.remove();
}

// removeItem1();

// removeItem(1);

function removeAll() {
  const ul = document.querySelector("ul");

  while (ul.firstChild) {
    ul.firstChild.remove();
  }
}

removeAll();
