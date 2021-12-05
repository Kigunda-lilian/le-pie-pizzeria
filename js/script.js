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

let totalCost = 0;

function AddToCart() {
    pizzaSize = document.getElementById("pizza-size").value;
    pizzaQuantity = document.getElementById("pizza-quantity").value;
    pizzaCrust = document.getElementById("pizzacrust").value;
    pizzaToppings = document.getElementById("pizzatoppings").value;

    // console.log(pizzaSize);

    let sizePrice = 0;
    if (pizzaSize == "Large") {
        sizePrice = 475;
    } else if (pizzaSize == "Medium") {
        sizePrice = 400;
    } else if (pizzaSize == "Small") {
        sizePrice = 380;

    }

    let toppingPrice = 0;
    if (pizzaToppings == "Glutten-free") {
        toppingPrice = 375;
    } else if (pizzaToppings == "Crispsy") {
        toppingPrice = 300;
    } else if (pizzaToppings == "Stuffed") {
        toppingPrice = 280;

    }

    let crustPrice = 0;
    if (pizzaCrust == "pineapple") {
        crustPrice = 475;
    } else if (pizzaCrust == "onion") {
        crustPrice = 300;
    } else if (pizzaCrust == "sausages") {
        crustPrice = 180;

    }

    price = sizePrice + toppingPrice + crustPrice;
    pizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, price, parseInt(pizzaQuantity));


    // Add pizza object to array cart.
    cart.push(pizza);
    console.log(cart);

    /*
     *  Find number of total pizza quantity
     */
    let cartItemscount = 0;

    // Loop each pizza object
    cart.forEach(pizzaObject => {
        cartItemscount += pizzaObject.quantity; // Sum the number of pizza quantity.
        totalCost += pizzaObject.quantity * pizzaObject.price;
    });

    document.getElementById("cart-badge").innerText = cartItemscount;

    document.getElementById("cart-total-cost").innerText = totalCost;


    UpdateCartList(cart);
}

function addDeliveryCost() {
    totalCost += 200;
    document.getElementById("cart-total-cost").innerText = totalCost;
}

function removeDeliveryCost() {
    totalCost -= 200;
    document.getElementById("cart-total-cost").innerText = totalCost;
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

function checkout() {
    alert("Your order has been received")
}