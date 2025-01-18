const products = [
  {
    id: 1,
    name: "Встраиваемый светильник Markt",
    price: "3 490",
    oldPrice: "5 060",
    isSale: true,
    image: "./images/Markt.png",
  },
  {
    id: 2,
    name: "Линейный светильник ARG",
    price: "6 700",
    oldPrice: null,
    isSale: false,
    image: "./images/ARG.png",
  },
  {
    id: 3,
    name: "Сведодиодный светильник",
    price: "5 060",
    oldPrice: "6 060",
    isSale: true,
    image: "./images/Lamp.png",
  },
  {
    id: 4,
    name: "Встраиваемый светильник Markt",
    price: "3 490",
    oldPrice: null,
    isSale: false,
    image: "./images/Markt.png",
  },
  {
    id: 5,
    name: "Линейный светильник ARG",
    price: "6 700",
    oldPrice: "6 060",
    isSale: true,
    image: "./images/ARG.png",
  },
  {
    id: 6,
    name: "Сведодиодный светильник",
    price: "5 060",
    oldPrice: null,
    isSale: false,
    image: "./images/Lamp.png",
  },
  {
    id: 7,
    name: "Встраиваемый светильник Markt",
    price: "3 490",
    oldPrice: "6 060",
    isSale: true,
    image: "./images/Markt.png",
  },
  {
    id: 8,
    name: "Линейный светильник ARG",
    price: "6 700",
    oldPrice: null,
    isSale: false,
    image: "./images/ARG.png",
  },
];
const productsHTML = products.map((item) => {
  let htmlProduct = `<section class="main_products_item" id=${item.id}>
  <p class=${item.isSale && "main_products_item_sale"}>${item.isSale ? "Акция" : ""}</p>
     <div class='main_products_item_image'>
      <img src="${item.image}" alt="${item.name}" />
      <div><button>Подробнее</button></div></div>
       <p class='main_products_item_title'>${item.name}</p>
      <div class='main_products_item_prices'>
      <p class=${item.oldPrice && "main_products_item_prices_price"}>${item.price} ₽</p>
      <p class='main_products_item_prices_oldPrice'>${
        item.oldPrice !== null ? `${item.oldPrice} ₽` : ""
      }</p>
      </div>
    </section>`;

  return htmlProduct;
});

document.getElementById("products").insertAdjacentHTML("afterbegin", productsHTML.join(""));

const search = document.getElementById("search");

search.addEventListener("click", () => {
  search.classList.remove("main_menu_buttons_search");
  search.classList.add("main_menu_buttons_search--active");
});

search.addEventListener("blur", () => {
  search.classList.remove("main_menu_buttons_search--active");
  search.classList.add("main_menu_buttons_search");
});
