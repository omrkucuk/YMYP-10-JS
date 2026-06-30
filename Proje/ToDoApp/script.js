const input = document.querySelector("#gorevInput");
const ekleBtn = document.querySelector("#ekleBtn");
const liste = document.querySelector("#liste");
const filtreButonlari = document.querySelectorAll(".filter");

ekleBtn.addEventListener("click", function () {
  const metin = input.value.trim();

  if (metin === "") {
    alert("Lütfen bir görev yazın.");
    return;
  }

  const li = document.createElement("li");

  const left = document.createElement("div");
  left.classList.add("left");

  const check = document.createElement("div");
  check.classList.add("check");

  const text = document.createElement("span");
  text.classList.add("text");
  text.textContent = metin;

  left.appendChild(check);
  left.appendChild(text);

  // Tamamlandı Toggle
  li.addEventListener("click", function () {
    li.classList.toggle("tamamlandi");

    if (li.classList.contains("tamamlandi")) {
      check.innerHTML = "✔️";
    } else {
      check.innerHTML = "";
    }
  });

  // Sil butonu
  const silBtn = document.createElement("button");
  silBtn.innerHTML = "🗑️";
  silBtn.classList.add("sil-btn");

  silBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(left);
  li.appendChild(silBtn);
  liste.appendChild(li);

  input.value = "";

  const aktifFiltre = document.querySelector(".filter.active").getAttribute("data-filter");

  listeyiFiltrele(aktifFiltre);
});

filtreButonlari.forEach((btn) => {
  btn.addEventListener("click", function () {
    activeClassSil();
    btn.classList.add("active");
    listeyiFiltrele(btn.getAttribute("data-filter"));
  });
});

function activeClassSil() {
  filtreButonlari.forEach((x) => x.classList.remove("active"));
}

function listeyiFiltrele(filtre) {
  const gorevler = liste.querySelectorAll("li");

  gorevler.forEach((gorev) => {
    switch (filtre) {
      case "all":
        gorev.style.display = "flex";
        break;

      case "completed":
        gorev.classList.contains("tamamlandi")
          ? (gorev.style.display = "flex")
          : (gorev.style.display = "none");
        break;

      case "uncompleted":
        !gorev.classList.contains("tamamlandi")
          ? (gorev.style.display = "flex")
          : (gorev.style.display = "none");
        break;
    }
  });
}
