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

function AddToCart01(pizzaSize, topping, crust, price, pizzaQuantity) {
    pizza = new Pizza(pizzaSize, "pineapple", "stuffed", price, parseInt(pizzaQuantity));

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
    // console.log(pizzaSize);

    let sizePrice = 100;

    if (pizzaSize == "Medium") price = 75;

    let toppingPrice = 100;
    if (pizzaSize == "Crispsy") price = 75;

    let crustPrice = 100;
    if (pizzaSize == "sausages") price = 75;

    price = sizePrice + toppingPrice + crustPrice;
    pizza = new Pizza(pizzaSize, "pineapple", "stuffed", price, parseInt(pizzaQuantity));

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

function UpdateCartList(cart) {

    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach(function(pizzaObject, index) {
        console.log(index);
        cartList.innerHTML += "<div>" +
            "size: " + pizzaObject.size + "<br> crust: <br> toppings: <br> quantity: " + pizzaObject.quantity + " <br> price: <br>" +
            "<button onclick='RemovePizza(" + index + ")'>remove</button></div>" +
            "<br>";
    });
};

function RemovePizza(index) {
    cart.splice(index, 1);

    UpdateCartList(cart);
}