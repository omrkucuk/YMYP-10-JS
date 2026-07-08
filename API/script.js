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
                <button>Sil</button>
            </div>
            `,
      )
      .join("");
  } catch (error) {
    console.error("Ürünler yüklenemedi: ", error);
  }
};

loadProducts();
