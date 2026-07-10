const API_URL = "https://fakestoreapi.com/products";

// 1. Ürünleri Listele
const loadProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();

    console.log(products);
    const container = document.querySelector("#products");
    container.innerHTML = products
      .map(
        (product) => `
            <div class="product">
                <h3>${product.title}</h3>
                <img src="${product.image}" width="50"/>
                <p>${product.price} TL</p>
                <p>${product.description} TL</p>
                <button onclick="deleteProduct(${product.id})">Sil</button>
            </div>
            `,
      )
      .join("");
  } catch (error) {
    console.error("Ürünler yüklenemedi: ", error);
  }
};

// Yeni Ürün Ekle
const addProduct = async () => {
  const newProduct = {
    title: "Yeni Ürün",
    price: 99.9,
    description: "Test ürünü",
    category: "electronics",
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    console.log("Eklendi: ", data);
    loadProducts(); // Listeyi yenile
  } catch (error) {
    alert("Ürün Eklenemedi!");
  }
};

// Ürün silmek
const deleteProduct = async (id) => {
  if (!confirm("Silmek istediğinize emin misiniz?")) return;

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    alert("Ürün Silindi!");
    loadProducts();
  } catch (error) {
    alert("Silme işlemi başarısız!");
  }
};

loadProducts();
