
// Mahsulotlarni chiqaradigan elementni topish
const productsContainer = document.getElementById('products-container');

// Har bir mahsulotni HTML kartochkasi shaklida yaratish
products.forEach((product) => {
  // Mahsulot kartochkasi HTML yaratish
  const productCard = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <span>${product.discount}</span>
        <div class="rating">${'★'.repeat(Math.floor(product.rating))}</div>
        <button class="add-to-cart">В корзину</button>
      </div>
    </div>
  `;

  // Mahsulotni sahifaga qo'shish
  productsContainer.innerHTML += productCard;
});
