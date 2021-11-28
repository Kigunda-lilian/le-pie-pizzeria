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

function UpdateCartList(cart) {
    let cartList = document.getElementById("cart-list");
    cart.forEach(pizzaObject => {
        cartList.innerHTML += "<div>size: <br> crust: <br> toppings: <br> quantity: <br> price: <br></div>";
    });
};

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

    cart.push(pizza);

    let cartItemscount = 0;
    cart.forEach(pizzaObject => {
        console.log(pizzaObject);
        cartItemscount += pizzaObject.quantity;
    });

    console.log(cartItemscount);
    document.getElementById("cart-badge").innerText = cartItemscount;

    UpdateCartList(cart);
}