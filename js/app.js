
// Mahsulotlarni chiqaradigan elementni topish
const productsContainer = document.getElementById('products-container');

// Har bir mahsulotni HTML kartochkasi shaklida yaratish
products.forEach((product) => {
  // Mahsulot kartochkasi HTML yaratish
  const productCard = `
    <li class="product-card">
    <button class="product-like-btn">
      <img class="product-like-img" src="../imgs/like.svg" alt="like">
    </button>
    <div class='product-img'>
       <img src="${product.img}" alt="${product.title}">
    </div>
      <div class="product-info">

      <div class='narx-wrapper'>

      <div>
      <p class="aslNarx">${product.asli} ₽</p>
      <span class='spen'>С картой</span>
      </div>
          <div>
            <p class="dastavkaNarx">${product.dastavka} ₽ </p>
              <span class='spen'>Обычная</span>
          </div>
        
      </div>
      <h3 class='product-title'>${product.title}</h3>
      <div class="rating">${'★'.repeat(Math.floor(product.rating))}</div>
        <button class="add-to-cart">В корзину</button>
      </div>
    </li>
  `;

  // Mahsulotni sahifaga qo'shish
  productsContainer.innerHTML += productCard;
});

// Barcha "В корзину" tugmalarini olish
const addProductButtons = document.querySelectorAll('.add-to-cart');

// Har bir korzinka tugmasiga bosish voqeasini qo'shish
addProductButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Tanlangan mahsulotni olish
    const selectedProduct = products[index];

    // Mahsulotlarni oldindan saqlangan ro'yxatni localStorage'dan olish
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

    // Yangi tanlangan mahsulotni ro'yxatga qo'shish
    selectedProducts.push(selectedProduct);

    // Yangilangan ro'yxatni localStorage'da saqlash
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

    // Tugmaga klass qo'shish
    button.classList.add('active-add-to-cart'); 

    console.log(`Mahsulot qo'shildi:`, selectedProduct);
  });
});

