
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
const shopPage = document.querySelector('shop.html')

// Har bir  korzinkga  tugmasiga bosish voqeasini qo'shish
addProductButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    button.classList.add('active-add-to-cart'); // Tugmaga klass qo'shish
    const index = e.target.getAttribute('data-index');
    const selektedProduct = products[index];

    // maxsulotlarni localstrage ga saqlash 
    localStorage.setItem('selektedProduct', JSON.stringify(selektedProduct));

    // shop pagega yuborish
    window.location = '/shop.html'
    
  });
});

