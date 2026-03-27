const data = {
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
        }
    ],
    drinks: [
        { 
            name: "Добрый Кола", 
            desc: "0,5 л", 
            price: 99, 
            img: "https://media.dodostatic.net/image/r:292x292/018f3a3f65e2786396e949983995f50f.avif" 
        }
    ]
};

function createCard(item) {
    // Используем замену .avif на .jpg в случае ошибки загрузки
    const fallbackImg = item.img.replace('.avif', '.jpg');
    return `
        <div class="card">
            <img src="${item.img}" 
                 class="card-img" 
                 alt="${item.name}" 
                 onerror="this.onerror=null; this.src='${fallbackImg}';">
            <h3>${item.name}</h3>
            ${item.desc ? `<p>${item.desc}</p>` : ''}
            <div class="card-footer">
                <span class="price">от ${item.price} ₽</span>
                <button class="btn-add">Выбрать</button>
            </div>
        </div>
    `;
}

function render() {
    const miniGrid = document.getElementById('mini-grid');
    const pizzaGrid = document.getElementById('pizza-grid');
    const comboGrid = document.getElementById('combo-grid');
    const drinksGrid = document.getElementById('drinks-grid');

    if(miniGrid) {
        miniGrid.innerHTML = data.often.map(item => `
            <div class="mini-card">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='${item.img.replace('.avif', '.jpg')}';">
                <div class="mini-info">
                    <p>${item.name}</p>
                    <span>от ${item.price} ₽</span>
                </div>
            </div>
        `).join('');
    }

    if(pizzaGrid) pizzaGrid.innerHTML = data.pizzas.map(createCard).join('');
    if(comboGrid) comboGrid.innerHTML = data.combos.map(createCard).join('');
    if(drinksGrid) drinksGrid.innerHTML = data.drinks.map(createCard).join('');
}

document.addEventListener('DOMContentLoaded', render);