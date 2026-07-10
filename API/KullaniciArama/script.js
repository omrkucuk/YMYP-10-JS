const kullaniciAra = async () => {
  const userId = document.querySelector("#userId").value;
  const div = document.querySelector("#kullaniciDetay");

  if (!userId) {
    div.innerHTML = `<div class="error">Lütfen bir kullanıcı ID giriniz!</div>`;
    return;
  }

  if (userId < 1 || userId > 10) {
    div.innerHTML = `<div class="error">Lütfen 1-10 arası bir ID giriniz!</div>`;
    return;
  }

  div.innerHTML = `<p class="loading">Aranıyor...</p>`;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      throw new Error("Kullanıcı bulunamadı");
    }

    const kullanici = await response.json();
    console.log(kullanici);

    div.innerHTML = `
      <div class="user-detail">
        <h3>${kullanici.name}</h3>
        <p><b>Username:</b> ${kullanici.username}</p>
        <p><b>Email:</b> ${kullanici.email}</p>
        <p><b>Telefon:</b> ${kullanici.phone}</p>
        <p><b>Şehir:</b> ${kullanici.address.city}</p>
        <p><b>Adres:</b> ${kullanici.address.street} / ${kullanici.address.suite}</p>
        <p><b>Website:</b> ${kullanici.website}</p>
      </div>
      `;
  } catch (error) {
    div.innerHTML = `<div class="error">${error}</div>`;
  }

  console.log(userId);
};

document.querySelector("#userId").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    kullaniciAra();
  }
});
