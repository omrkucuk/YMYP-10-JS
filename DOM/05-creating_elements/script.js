// Arrow function:
// const createListItem = () => {}

// 1. Yöntem
function createListItem(text) {
  const li = document.createElement("li"); // Yeni bir <li> elementi oluşturur.

  li.className = "item"; // li elementine class ekler
  li.id = "item1"; // li elementine id ekler
  li.setAttribute("data-id", "5"); // li elementine özel bir attribute ekler
  li.innerText = text;

  const ch = document.createElement("input"); // Yeni bir <input> elementi oluşturur.
  ch.type = "checkbox"; // input tipini checkbox olarak ayarlar
  ch.className = "ch1"; // input elementine class ekler

  li.appendChild(ch); // <input> elementini <li> elementinin içine (sonuna) ekler

  document.querySelector("#myList").appendChild(li);
}

// createListItem("item 4 ");
// createListItem("item 5 ");

// 2. Yöntem
function createListItem2(text) {
  const li = document.createElement("li");
  li.className = "item";

  // Template literal kullanarak HTML içeriğini direkt olarak oluşturur ve ekler
  li.innerHTML = `${text} <input type="checkbox"/>`;
  document.querySelector("#myList").appendChild(li);
}

createListItem2("item 4 ");
createListItem2("item 5 ");
createListItem2("item 6 ");
