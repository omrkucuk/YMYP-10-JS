const input = document.querySelector("#text");

function onKeyPress() {
  console.log("keypress tetiklendi");
}

function onKeyUp() {
  console.log("keyup tetiklendi");
}

function onKeyDown(e) {
  console.log(e);
  console.log(e.key);
  document.querySelector("h2").innerText += e.key;

  if (e.key == "Enter") alert("enter tıklandı");

  if (e.ctrlKey && e.key == "a") alert("Ctrl + a");
}

// input.addEventListener("keypress", onKeyPress);  // Tuşa basıldığında tetiklenir
// input.addEventListener("keyup", onKeyUp);  // Tuş bırakıldığında tetiklenir.
input.addEventListener("keydown", onKeyDown);
