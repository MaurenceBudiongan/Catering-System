document.addEventListener("DOMContentLoaded", function () {
  showHome(); // Load all menu items by default
});

let orderItems = []; // Array to store selected items
function showHome() {
  const content = document.getElementById("content");
  content.innerHTML = '<p class="p">Welcome to Catering Food Services</p>';
}
function showMenu(category = null) {
  const content = document.getElementById("content");
  let menuItems = [
    // Define all menu items here
    // Your menu items array here...
    {
      category: "Meat",
      image: "img/about.jpg",
      name: "Menudo",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 405
    },
    {
      category: "Meat",
      image: "img/about.jpg",
      name: "Liempo",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 580.5
    },
    {
      category: "Meat",
      image: "img/about.jpg",
      name: "Lechon Manok",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 560.0
    },
    {
      category: "Meat",
      image: "img/about.jpg",
      name: "Humba",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 600.0
    },
    {
      category: "Meat",
      image: "img/about.jpg",
      name: "Pork Grilled",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 690.0
    },
    {
      category: "Meat",
      image: "img/about.jpg",
      name: "Mami Pares",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 495.0
    },
    {
      category: "Veggie",
      image: "img/screen.png",
      name: "Pinakbet",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin <br>sa among cater",
      price: 325.0
    },
    {
      category: "Veggie",
      image: "img/screen.png",
      name: "Kare Kare",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin <br>sa among cater",
      price: 460.0
    },
    {
      category: "Veggie",
      image: "img/screen.png",
      name: "Tortang Talong",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin <br>sa among cater",
      price: 550.0
    },
    {
      category: "Pasta",
      image: "img/event-8.jpg",
      name: "Spaghetti",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 750.0
    },
    {
      category: "Pasta",
      image: "img/event-8.jpg",
      name: "Carbonara",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 800.0
    },
    {
      category: "Pasta",
      image: "img/event-8.jpg",
      name: "Chicken Alfredo",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 765.0
    },
    {
      category: "Soup",
      image: "img/event-1.jpg",
      name: "Isdang dubok",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 665.0
    },
    {
      category: "Soup",
      image: "img/event-1.jpg",
      name: "Isdang dubok",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 580.0
    },
    {
      category: "Soup",
      image: "img/event-1.jpg",
      name: "Isdang dubok",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 600.0
    }
  ];
  // Filter menu items if a category is specified
  if (category) {
    menuItems = menuItems.filter((item) => item.category === category);
  }
  const categoryButtons = `
    <div class="meat">   
      <button onclick="showMenu('Meat')">Meat Dishes</button> 
      <button onclick="showMenu('Veggie')">Veggies</button>
      <button onclick="showMenu('Pasta')">Pasta</button>
      <button onclick="showMenu('Soup')">Soup</button>
    </div>`;
  const menuList = menuItems
    .map(
      (item) => `
      <section>
    <div class="Food">
      <div class="menu-items">             
        <h3>${item.name}</h3>
        <img src=${item.image} width="210px" height="90px">
        <p align="justify">${item.description}</p>
        <p class="price">Price: ₱${item.price.toFixed(2)}</p>
        <button onclick="addToOrder('${item.name}', ${
        item.price
      })">Reserve Now</button>
      </div>     
    </div>  
    </section>
    `
    )
    .join("");

  content.innerHTML = `${categoryButtons}${menuList}`;
}

function show(category = null) {
  const content = document.getElementById("content");
  let menuItems = [
    // Define all menu items here
    // Your menu items array here...
    {
      category: "Chiffon",
      image: "img/about.jpg",
      name: "Lechon Pagud",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 10.99
    },
    {
      category: "Chiffon",
      image: "img/about.jpg",
      name: "Liempo",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 10.99
    },
    {
      category: "Chiffon",
      image: "img/about.jpg",
      name: "Lechon Manok",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 10.99
    },
    {
      category: "Chiffon",
      image: "img/about.jpg",
      name: "Humba",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 10.99
    },
    {
      category: "Chiffon",
      image: "img/about.jpg",
      name: "Pork Grilled",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 10.99
    },
    {
      category: "Chiffon",
      image: "img/about.jpg",
      name: "Mami Pares",
      description:
        "pa reserve na mo ba ali naba<br>hangyuni ni guys wa mi halin<br> sa among cater",
      price: 10.99
    },
    {
      category: "Burlap",
      image: "img/screen.png",
      name: "Pinakbet",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin <br>sa among cater",
      price: 12.99
    },
    {
      category: "Burlap",
      image: "img/screen.png",
      name: "Kare Kare",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin <br>sa among cater",
      price: 12.99
    },
    {
      category: "Burlap",
      image: "img/screen.png",
      name: "Tortang Talong",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin <br>sa among cater",
      price: 12.99
    },
    {
      category: "Velvet",
      image: "img/event-8.jpg",
      name: "Spaghetti",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 8.99
    },
    {
      category: "Velvet",
      image: "img/event-8.jpg",
      name: "Carbonara",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 8.99
    },
    {
      category: "Velvet",
      image: "img/event-8.jpg",
      name: "Chicken Alfredo",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 8.99
    },
    {
      category: "lace",
      image: "img/event-1.jpg",
      name: "Isdang dubok",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 8.99
    },
    {
      category: "Lace",
      image: "img/event-1.jpg",
      name: "Isdang dubok",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 8.99
    },
    {
      category: "Lace",
      image: "./img/event-1.jpg",
      name: "Isdang dubok",
      description:
        "pa reserve na mo ba ali naba<br> hangyuni ni guys wa mi halin<br> sa among cater",
      price: 8.99
    }
  ];
  // Filter menu items if a category is specified
  if (category) {
    menuItems = menuItems.filter((item) => item.category === category);
  }

  const menuList = menuItems
    .map(
      (item) => `
    <div class="Food">
      <div class="menu-items">             
        <h3>${item.name}</h3>
        <img src=${item.image} width="210px" height="90px">
        <p align="justify">${item.description}</p>
        <p class="price">Price: ₱${item.price.toFixed(2)}</p>
        <button onclick="addToOrder('${item.name}', ${
        item.price
      })">Reserve Now</button>
      </div>     
    </div>  
    `
    )
    .join("");

  const categoryButtons = `
    <div class="meat">   
      <button onclick="show('Chiffon')">Chiffon</button> 
      <button onclick="show('Burlap')">Burlap </button>
      <button onclick="show('Velvet')">Velvet</button>
      <button onclick="show('Lace')">Lace</button>
    </div>`;

  content.innerHTML = `${categoryButtons}${menuList}`;
}

function addToOrder(itemName, itemPrice) {
  // Add item to orderItems array
  orderItems.push({ name: itemName, price: itemPrice });
  alert(`Added ${itemName} to your order. Price: ${itemPrice.toFixed(2)}`);
}

function showOrder() {
  const content = document.getElementById("content");
  const orderList = orderItems
    .map(
      (item) =>
        ` <div>
            <img src="${item.image}" alt="${item.name}" width="50" height="50">
            <span>${item.name} - ${item.price.toFixed(2)}</span>
          </div>`
    )
    .join("");
  const totalAmount = orderItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  content.innerHTML = `
    <div class="placeOrder">
      <button onclick="placeOrder()">Place Order</button>
    </div>
    <div class="order">
      <h2>Order</h2>
      <ul>${orderList}</ul>
      <h3>Total Amount: ${totalAmount}</h3>
      <div class="payment">
        <h4> Mode Of Payment</h4>
        <ul>
          <li>Gcash</li>
          <li>Cash On delivery</li>
          <li>Paymaya</li>
          <li>Paypal</li>
        </ul>
      </div>
    </div>`;
}
