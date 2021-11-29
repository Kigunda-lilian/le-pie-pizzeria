class Pizza {
    constructor(size, topping, crust, price, quantity) {
        this.size = size;
        this.topping = topping;
        this.crust = crust
        this.price = price;
        this.quantity = quantity;
    }
}

const cart = [];

function AddToCart01(pizzaSize, pizzatoppings, pizzacrust, price, pizzaQuantity) {
    pizza = new Pizza("pizzaSize", "pizzatoppings", "pizzacrust", parseInt(price), parseInt(pizzaQuantity));

    // Add pizza object to array cart.
    cart.push(pizza);

    /*
     *  Find number of total pizza quantity
     */
    let cartItemscount = 0;
    // Loop each pizza object
    cart.forEach(pizzaObject => {
        cartItemscount += pizzaObject.quantity; // Sum the number of pizza quantity.
    });

    document.getElementById("cart-badge").innerText = cartItemscount;

    UpdateCartList(cart);
}

function AddToCart() {
    pizzaSize = document.getElementById("pizza-size").value;
    pizzaQuantity = document.getElementById("pizza-quantity").value;
    pizzaCrust = document.getElementById("pizzacrust").value;
    pizzaToppings = document.getElementById("pizzatoppings").value;
    // console.log(pizzaSize);

    let sizePrice = 0;

    if (sizePrice == "Large") {
        price = 475;
    } else if (sizePrice == "Medium") {
        price = 400;
    } else if (sizePrice == "Small") {
        price = 380;

    }

    let toppingPrice = 0;
    if (toppingPrice == "Glutten-free") {
        price = 375;
    } else if (toppingPrice == "Crispsy") {
        price = 300;
    } else if (toppingPrice == "Stuffed") {
        price = 280;

    }

    let crustPrice = 0;
    if (crustPrice == "pineapple") {
        price = 475;
    } else if (crustPrice == "onion") {
        price = 300;
    } else if (crustPrice == "sausages") {
        price = 180;

    }

    price = sizePrice + toppingPrice + crustPrice;
    pizza = new Pizza("pizzaSize", "pizzaToppings", "pizzaCrust", parseInt(price), parseInt(pizzaQuantity));

    // Add pizza object to array cart.
    cart.push(pizza);

    /*
     *  Find number of total pizza quantity
     */
    let cartItemscount = 0;
    let totalCost = 0;
    // Loop each pizza object
    cart.forEach(pizzaObject => {
        cartItemscount += pizzaObject.quantity; // Sum the number of pizza quantity.
        totalCost += pizzaObject.quantity * pizzaObject.price;
    });

    document.getElementById("cart-badge").innerText = cartItemscount;
    document.getElementById("cart-total-cost").innerText = totalCost;


    UpdateCartList(cart);
}

function UpdateCartList(cart) {

    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach(function(pizzaObject, index) {
        console.log(index);
        cartList.innerHTML += "<div>" +
            "size: " + pizzaObject.size + "<br>" + "crust:" + pizzaObject.crust + "<br>" + "toppings:" + pizzaObject.topping + "<br>" + "quantity: " + pizzaObject.quantity + " <br>" + "price:" + pizzaObject.price + "<br>" +
            "<button onclick='RemovePizza(" + index + ")'>remove</button></div>" +
            "<br>";
    });
};

function RemovePizza(index) {
    cart.splice(index, 1);

    UpdateCartList(cart);
}