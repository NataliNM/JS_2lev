const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

const renderProduct = (title, price) =>
    `<div class="product-item">
            <img src="#" alt="img_product_item" class="img_product_item">
            <h3 class="title_product_item">${title}</h3>
            <p class="price_product_item">${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price)).join('');
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);