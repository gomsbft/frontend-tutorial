// async await, fetch
// DOM 선택자
const productContainer = document.querySelector('.product-list');
const eventProduct = document.querySelectorAll('.main-list li');

// 1. 데이터를 받아오자!!
let productList = [];

async function getProductList() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const {products} = await res.json();

    productList = products;
  } catch (err) {
    console.error(err);
  }
}

function filterProduct(category) {
  const newProductList = (category == 'all') ? 
  productList : productList.filter(function (value) {
    return value.category === category;
  });

  renderProductList(newProductList);
}

// 받아온 데이터들을 가지고 이제 진짜 html에 적용해볼 거야
async function renderProductList(list) {
  productContainer.innerHTML = list.map(function (product) {
    return `
      <li>
        <div class="product-element__header">
          <img src="${product.images[0]}" alt="">
        </div>
        <div class="product-element__body">
            <h3>${product.title}</h3>
            <p>재고:${product.stock}</p>
            <p>가격:${product.price}$</p>
        </div>
      </li>
    `
  }).join('');
}

async function initProductList() {
  await getProductList();

  renderProductList(productList);
}

eventProduct.forEach((element) => element.addEventListener('click', function (event) {
  filterProduct(event.target.dataset.category);
}));

initProductList();
