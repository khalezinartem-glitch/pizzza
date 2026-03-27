const products = [
    {
        id: 1,
        name: "Пепперони фреш",
        desc: "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
        price: 289,
        img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b8cc-17188959150b.jpg"
    },
    {
        id: 2,
        name: "Двойная цыпленок",
        desc: "Цыпленок, моцарелла, соус альфредо",
        price: 399,
        img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/f4035661-ca31-419b-b467-f4e9cf76f92a.jpg"
    },
    {
        id: 3,
        name: "Ветчина и грибы",
        desc: "Ветчина, шампиньоны, моцарелла, томатный соус",
        price: 449,
        img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/be27393a-3932-442c-9694-81476b744958.jpg"
    },
    {
        id: 4,
        name: "Додо Микс",
        desc: "Бекон, цыпленок, ветчина, сыр блю чиз, моцарелла, томаты",
        price: 549,
        img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/676369c3-9828-4f8e-8a07-8820c7407887.jpg"
    },
    {
        id: 5,
        name: "Чизбургер-пицца",
        desc: "Мясной фарш, соленые огурчики, томаты, красный лук, моцарелла, соус бургер",
        price: 499,
        img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/16262130-974a-449e-8797-09439634e062.jpg"
    },
    {
        id: 6,
        name: "Сырная",
        desc: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
        price: 289,
        img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/3f0ac943-71a8-4430-ade3-2947df315809.jpg"
    }
];

let cartCount = 0;

function renderGrid() {
    const grid = document.getElementById('main-grid');
    grid.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}" class="card-img" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="card-footer">
                <span class="price">от ${p.price} ₽</span>
                <button class="btn-add" onclick="addToCart()">Выбрать</button>
            </div>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-button').innerText = `Корзина (${cartCount})`;
}

document.addEventListener('DOMContentLoaded', renderGrid);
