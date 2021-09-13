/*const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];*/

/*const renderProduct = (title, price) =>
    `<div class="product-item">
            <img src="#" alt="img_product_item" class="img_product_item">
            <h3 class="title_product_item">${title}</h3>
            <p class="price_product_item">Стоимость: ${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;*/

/*const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price)).join('');
    document.querySelector('.products').innerHTML = productList;
};*/

/*renderProducts(products);*/

//класс GoodsItem - для товара, render - возвращает html-разметку
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="product-item">
            <img src="#" alt="img_product_item" class="img_product_item">
            <h3 class="title_product_item">${this.title}</h3>
            <p class="price_product_item">Стоимость: ${this.price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
    }
}

//класс GoodsList - возвращает список товаров, 
//fetchGood - метод для заполнения списка, 
//render - метод для вывода списка товаров на страницу,
//sumGoods - метод суммирования стоимости всех товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 1000 },
            { id: 2, title: 'Mouse', price: 100 },
            { id: 3, title: 'Keyboard', price: 250 },
            { id: 4, title: 'Gamepad', price: 150 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;

    }
    sumGoods() {
        const sumPriceGoods = this.goods.reduce((acc, item) => 
        {
            acc+=item.price;
            return acc
        }, 0)
      console.log(sumPriceGoods)
    }
}

//класс BasketGoods - для корзины товаров
//sumBasketGoods - метод отображающий стоимость товаров в корзине
//emptBasket - метод очистки корзины
//itemsBasket - метод подсчета кол-ва товаров в корзине
class BasketGoods {
    sumBasketGoods() {}
    emptBasket() {}
    itemsBasket() {}
}
//класс ItemsBasketGoods - класс для элемента корзины товаров 
//deleteItemsBasket - метод удаления товара из корзины
//increaseItemsBasket - метод увеличения товара в корзине
//decreaseItemsBasket - метод уменьшения товара в корзине
//favoritesItemsBasket - метод добавления товара в список избранных товаров
class ItemsBasketGoods {
    deleteItemsBasket() {}
    increaseItemsBasket() {}
    decreaseItemsBasket() {}
    favoritesItemsBasket() {}
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();