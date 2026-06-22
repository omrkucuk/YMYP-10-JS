function insertElement() {
  const ul = document.querySelector("#myList");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  // ul elementinin hemen önüne(kardeş olarak) h1 elementini ekler
  ul.insertAdjacentElement("beforebegin", h1);
}

function insertText() {
  const item = document.querySelector("li:first-child");
  // İlk li elementinin hemen önüne (kardeş olarak) metin ekler.
  item.insertAdjacentText("beforebegin", "insertAdjacentText");
}

function insertHtml() {
  const item = document.querySelector("li:nth-child(2)");

  // İkinci li elementinin içine, en sona (son çocuk olarak) <h2> HTML'ini ekler
  item.insertAdjacentHTML("beforeend", "<h2>insertAdjacentHTML</h2>");
}

// Bir parent element içinde, belirtilen bir elementten önce yeni bir element ekler
function insertBefore() {
  const ul = document.querySelector("#myList");

  const li = document.createElement("li");
  li.textContent = "insertBefore";

  const secondLi = document.querySelector("li:nth-child(2)");
  ul.insertBefore(li, secondLi);
}

insertElement();
insertText();
insertHtml();
insertBefore();
