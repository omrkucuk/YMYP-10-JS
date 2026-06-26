const form = document.querySelector("#form");

// 1. Yöntem
function onSubmit(e) {
  e.preventDefault();

  const inputValue = document.querySelector("#input").value;
  const selectValue = document.querySelector("#select").value;
  const checkedValue = document.querySelector("#checkbox").checked;

  if (inputValue == "" || selectValue == "0") {
    alert("Lütfen formu eksiksiz doldurunuz");
    return;
  }

  console.log(
    `İsminiz: ${inputValue}, 18 yaşından büyük mü: ${checkedValue}, Seçilen Değer: ${selectValue}`,
  );

  console.log("form submit");
}

// 2. Yöntem
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form); // Form nesnesini kullanarak tüm veriyi toplar
  const inputValue = formData.get("input"); // name="input" attribute'ü ile değeri alır.
  const selectValue = formData.get("select");

  let checkedValue = false;

  if (formData.get("checkbox") == "on") {
    checkedValue = true;
  }

  if (inputValue === "" || selectValue === "0") {
    alert("Lütfen formu eksiksiz doldurunuz");
    return;
  }

  console.log(
    `İsminiz: ${inputValue}, 18 yaşından büyük mü: ${checkedValue}, Seçilen Değer: ${selectValue} `,
  );

  console.log("form submit");

  const entries = formData.entries(); // Tüm form alanlarını [key, value] olarak almak için
  for (let enrty of entries) {
    console.log(enrty);
  }
}

// form.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit2);
