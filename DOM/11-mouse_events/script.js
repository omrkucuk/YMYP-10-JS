const div = document.querySelector("div");
const img = document.querySelector("img");

function onClick() {
  console.log("onClick"); // Fare ile tek tıklandığında tetiklenir
}

function onDblClick() {
  console.log("dblClick"); // Fare ile çift tıklandığında tetiklenir
}

function onContextmenu() {
  console.log("onContextmenu"); // Fare ile sağ tıklandığında tetiklenir
}

function onMousedown() {
  console.log("onMousedown"); // Fare butonuna basıldığında (click'ten önce) tetiklenir
}

function onMouseEnter() {
  console.log("onMouseEnter"); // Fare elementin sınırlarına girdiğinde tetiklenir
}

function onMouseMove() {
  console.log("onMouseMove"); // Fare elementin üzerindeyken hareket ettiğinde tetiklenir
}

function onDrag() {
  console.log("onDrag"); // Resim sürüklenirken sürekli tetiklenir
}

function dragStart() {
  console.log("dragStart"); // Sürükleme başladığında tetiklenir
}

function dragEnd() {
  console.log("dragEnd"); // Sürükleme bittiğinde (fare bırakıldığında) tetiklenir
}

// div.addEventListener("click", onClick);
// div.addEventListener("dblclick", onDblClick);
// div.addEventListener("contextmenu", onContextmenu);
// div.addEventListener("mousedown", onMousedown);
// div.addEventListener("mouseenter", onMouseEnter);
// div.addEventListener("mousemove", onMouseMove);
// img.addEventListener("drag", onDrag);
// img.addEventListener("dragstart", dragStart);
img.addEventListener("dragend", dragEnd);
