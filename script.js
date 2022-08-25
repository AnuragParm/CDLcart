//Variable defined

const productElement = document.querySelector(".productRender");
const cartElement = document.querySelector(".cartItems");
const subTotalElement = document.querySelector(".subTotal");

//Render Product Items
function renderProducts() {
  products.forEach((product) => {
    productElement.innerHTML += `
          <div class="col-6 col-md-4">
            <div class="product">
              <img
                src="/img/${product.img}"
                class="img-fluid"
                alt="${product.name}"
              />
              <div class="productDetail">
              <span><i class="fas fa-tag"></i><i> Special Offer: ${product.description}</i></span>
              <span>Price Per Unit: £${product.price}</span>
              <button class="btn btn-success" onClick="addToCart(${product.id})">add to cart</button>
              </div>
            </div>
          </div>
`;
  });
}
renderProducts();

//Cart Array to render cart
let cart = [];
//Add To Cart
function addToCart(id) {
  //Check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({ ...item, numberOfUnits: 1 });
    // console.log(cart);
  }
  updateCart();
}

//change number of units in an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let oldNumberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && oldNumberOfUnits > 1) {
        oldNumberOfUnits--;
      } else if (action === "plus" && oldNumberOfUnits < item.instock) {
        oldNumberOfUnits++;
      }
    }
    return { ...item, numberOfUnits: oldNumberOfUnits };
  });
  updateCart();
}

//Update Cart
function updateCart(params) {
  renderCartItems();
  renderSubtotal();
}

//render Cart Items
function renderCartItems() {
  cartElement.innerHTML = ""; //clearing cart before rendering
  cart.forEach((item) => {
    cartElement.innerHTML += `
            <div class="cartItemRow">
              <div class="cartItemCard">
                <div class="cartItemDescription">
                  <img src="/img/${item.img}" alt="${item.name}" />
                  <h6>Item: ${item.name}</h6>
                </div>
              </div>
              <span><button class="btn btn-danger" onClick="changeNumberOfUnits('minus', ${item.id})"><i class="fa-solid fa-minus"></i></button>
              ${item.numberOfUnits} 
              <button class="btn btn-success" onClick="changeNumberOfUnits('plus', ${item.id})"><i class="fa-solid fa-plus"></i></button>
              </span>
              <span>Sub-Total: £ ${item.price}</span>
            </div>        `;
  });
}
//Calculate Cart Subtotal
function renderSubtotal() {
  let totalPrice = 0;
  let totalItem = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItem += item.numberOfUnits;
  });
  subTotalElement.innerHTML = `
  total (${totalItem} items): £ ${totalPrice.toFixed(2)}
  `;
  totalItemCart.innerHTML = totalItem;
}
