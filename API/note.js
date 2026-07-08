/* 
    1 # API
    Tanım: API(Application Programming Interface), farklı yazılımların birbirleriyle konuşmasını sağlayan bir köprüdür.

    Client -> API -> Server
    Server -> API -> Client

    2 # API ile yapabileceklerimiz:
    - Sunucudan veri çekmek(kullanıcı listesi, ürünler)
    - Veri göndermek(form kaydetmek, yorum yapma)
    - Güncelle yapmak (profil düzenleme)
    - Silme işlemleri (hesap kapatma)

    3 # Client - Server Mimarisi

    Client(İstemci)
    - Tarayıcılar
    - Mobil Uygulamalar
    - Masaüstü Programlar

    Server (Sunucu)
    - Verilerin saklandığı yer

    Önemli: Javascript doğrudan veritabanına erişemez! Her zaman API üzerinden gider.


    4 # Request (İstek) & Response (Cevap)

    - Request 
    1. URL -> Nereye gidiyoruz? (https://api.example.com/users)
    2. Method -> Ne yapacağız? (GET, POST, DELETE, PUT)
    3. Headers -> Ek bilgiler (token, veri tipi)
    4. Body -> Göndereceğimiz veri (sadece POST/PUT'da)

    - Response 
    {
        status: 200,   // İşlem başarılı mı?
        data: {...},   // Gelen veri
        message: "Success"  // Durum mesajı
    }
    
    5 # HTTP Methodları (CRUD İşlemleri)
    CRUD Mantığı -> Create - Read - Update - Delete

    Method - Ne Yapar - Örnek
    GET - Veri çeker - Ürün listesini getir
    POST - Yeni veri ekler - Yeni kullanıcı kaydet
    PUT - Tamamını güncelller - Profili güncelle
    DELETE - Siler - Hesabı kapat

    GET /products -> Tüm ürünleri getir
    GET /products/5 -> 5 numaralı ürünü getir
    POST /products -> Yeni ürün ekle
    PUT /products/5 -> 5'i güncelle
    DELETE /products/5 -> 5'i sil

    6 # REST API Mantığı
    /getProducts
    /updateUser
    /deleteItem

    GET /products
    PUT /users
    DELETE /items


    7 # Json - Veri Formatı
    Javascript Object:
    const user = {
        name: "Ahmet",
        age: 25
    }
    
    JSON:
    {"name":"Ahmet","age":25}
    
    Dönüştürme:
    Object -> JSON : const jsonString = JSON.stringify(user);   // API'ye göndermek için
    JSON -> Object : const userObject = JSON.parse(jsonString); // API'den geleni kullanmak için
*/

// 8 # FETCH API - GET İSTEĞi
// TEMEL KULLANIM 4 adım =>
// 1. API'ye istek at URL yaz/
// 2. Gelen veriyi Json'a çevir /
// 3. Veriyi Kullan /
// 4. Hata varsa yakala

// 1. API'ye istek at
fetch("https://jsonplaceholder.typicode.com/users")
  // 2. Gelen veriyi Json'a çevir
  .then((response) => response.json())
  // 3. Veriyi Kullan
  .then((data) => console.log(data))
  // 4. Hata varsa yakala
  .catch((error) => console.error("Hata: ", error));

// Name ve Email bastırma örneği
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      document.body.innerHTML += `<p>Name: ${user.name} - Email: ${user.email}</p>`;
    });
  });

// 9 # Post İsteği - Veri Gönderme
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ayşe", email: "ayse@example.com" }),
})
  .then((response) => response.json())
  .then((data) => console.log("Eklendi: ", data));

// const formData = {
//   username: document.getElementById("username").value,
//   email: document.getElementById("email").value,
// };

// fetch("https://api.example.com/register", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(formData),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("Eklendi: ", data));

// 10 # ASYNC / AWAIT
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Hata: ", error);
  }
}

getUsers();

const addProduct = async (product) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Ürün eklendi: ", data);
    }
  } catch (error) {
    console.error("Bağlantı hatası: ", error);
  }
};

const urun1 = {
  id: 0,
  title: "Keten Gömlek",
  price: 1500,
  description: "%100 Keten Gömlek ",
  category: "Gömlek",
  image: "http://example.com",
};

addProduct(urun1);

// 11 # STATUS CODE'LAR - DURUM KODLARI
/*
    Başarılı Kodlar:
    200 -> OK (İşlem başarılı)
    201 -> Created (Yeni kayıt oluşturuldu)

    İstemci Hataları:
    400 -> Bad Request(Hatalı istek)
    401 -> Unauthorized(Giriş yapman gerek)
    403 -> Forbidden (Yetkin yok)
    404 -> Not Found (Bulunamadı)

    Sunucu Hataları:
    500 -> Internal Server Error (Sunucu çöktü)
    503 -> Service Unavailable (Servis çalışmıyor)

    async function getUser(id) {
        const response = await fetch(`https://api.example.com/users/${id}`);

        if(response.status === 200){
            console.log("Başarılı!");
        }else if(response.status === 404){
            console.log("Kullanıcı bulunamadı!");
        }else if(response.status === 500){
            console.log("Sunucu hatası, lütfen sonra tekrar deneyin");
        }
    }
*/

// 12 # HEADERS & AUTHORIZATION
// Headers ne işe yarar ? => İsteğe ek bilgi eklemek için kullanılır
/*
    fetch(url, {
    headers:{
        'Content-Type': 'application/json',  // Veri tipi
        'Authorization': 'Bearer abc123token', // Yetkilendirme
        'Accept-Language':'tr' // Dil tercihi
    }
    })

    AUTHORIZATION - Token Kullanımı
    
    // Login olduktan sonra token alırsın
    const token = 'eyJLKDSgjdsp1imblckv43jıasfas...';

    async function getProfile(){
        const response = await fetch('https://api.example.com/profile', {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    }
*/
