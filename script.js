/**
 * Данные магазина Додо Пицца
 * Используются прямые ссылки на медиа-сервер Додо
 */
const shopData = {
    often: [
        { 
            name: "Пепперони фреш", 
            price: 289, 
            img: "https://media.dodostatic.net/image/r:292x292/0198bf3e424371b49f0b8d7dbe320a70.avif" 
        },
        { 
            name: "3 пиццы 30 см", 
            price: 1539, 
            img: "https://media.dodostatic.net/image/r:292x292/018f3a3f65e2786396e949983995f50f.avif" 
        },
        { 
            name: "Додстер", 
            price: 169, 
            img: "https://media.dodostatic.net/image/r:292x292/11ee796f932622f995872957771765c9.avif" 
        },
        { 
            name: "2 соуса", 
            price: 89, 
            img: "https://media.dodostatic.net/image/r:292x292/11ee7970104e13568770a31b79d94943.avif" 
        }
    ],
    pizzas: [
        { 
            name: "Пепперони фреш", 
            desc: "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус", 
            price: 289, 
            img: "https://media.dodostatic.net/image/r:584x584/0198bf3e424371b49f0b8d7dbe320a70.avif" 
        },
        { 
            name: "Двойная цыпленок", 
            desc: "Цыпленок, моцарелла, соус альфредо", 
            price: 399, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7d61102322909f3e461a35569768.avif" 
        },
        { 
            name: "Мясная", 
            desc: "Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла", 
            price: 549, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7d611adfa29290044f089cc04d11.avif" 
        },
        { 
            name: "Додо Микс", 
            desc: "Бекон, цыпленок, ветчина, сыр блю чиз, сыр чеддер, сыр пармезан, моцарелла", 
            price: 549, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7d6143f7a07ca070014c22a36465.avif" 
        },
        { 
            name: "Чизбургер-пицца", 
            desc: "Мясной фарш, соленые огурчики, томаты, красный лук, моцарелла, соус бургер", 
            price: 499, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7d6115bb29299ed8733479f7d996.avif" 
        },
        { 
            name: "Сырная", 
            desc: "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо", 
            price: 289, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7d610d03c75990236a2829a6747b.avif" 
        }
    ],
    combos: [
        { 
            name: "2 пиццы", 
            desc: "Две пиццы 25 см на выбор. Для компании поменьше", 
            price: 899, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7970335805908959d57183e8787f.avif" 
        },
        { 
            name: "Комбо от 599 ₽", 
            desc: "Пицца 25 см, закуска и напиток. Наслаждайтесь!", 
            price: 599, 
            img: "https://media.dodostatic.net/image/r:584x584/018f3a3f65e2786396e949983995f50f.avif" 
        }
    ],
    drinks: [
        { 
            name: "Добрый Кола", 
            desc: "0,5 л", 
            price: 99, 
            img: "https://media.dodostatic.net/image/r:584x584/018f3a3f65e2786396e949983995f50f.avif" 
        },
        { 
            name: "Кофе Капучино", 
            desc: "Горячий напиток на основе эспрессо и нежного молока", 
            price: 169, 
            img: "https://media.dodostatic.net/image/r:584x584/11ee7d618398f6d79066611f71101741.avif" 
        }
    ]
};

/**
 * Создает HTML-разметку для основной карточки товара
 */
function createCardHTML(item) {
    return `
        <article class="card">
            <div class="card-image-container">
                <img src="${item.img}" 
                     alt="${item.name}" 
                     class="card-img" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Found'">
            </div>
            <div class="card-content">
                <h3>${item.name}</h3>
                ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
                <div class="card-footer">
                    <span class="price">от ${item.price} ₽</span>
                    <button class="btn-add">Выбрать</button>
                </div>
            </div>
        </article>
    `;
}

/**
 * Отрисовка всех блоков страницы
 */
function initializeApp() {
    // Рендер "Часто заказывают"
    const miniGrid = document.getElementById('mini-grid');
    if (miniGrid) {
        miniGrid.innerHTML = shopData.often.map(item => `
            <div class="mini-card">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100'">
                <div class="mini-info">
                    <p>${item.name}</p>
                    <span>от ${item.price} ₽</span>
                </div>
            </div>
        `).join('');
    }

    // Рендер основных категорий
    const categories = {
        'pizza-grid': shopData.pizzas,
        'combo-grid': shopData.combos,
        'drinks-grid': shopData.drinks
    };

    for (const [id, items] of Object.entries(categories)) {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = items.map(createCardHTML).join('');
        }
    }
}

// Запуск приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', initializeApp);
