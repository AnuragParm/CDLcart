//Variable defined

const productElement = document.querySelector(".productRender");
const cartElement = document.querySelector(".cartItems");
const subTotalElement = document.querySelector(".subTotal");
let totalCartValueItemA = 0;
let totalCartValueItemB = 0;
let totalCartValueItemC = 0;
let totalCartValueItemD = 0;

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

//Delete Item from cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id != id);
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
    if (item.id === 0) {
      const x = item.numberOfUnits;
      emptyCartItem = item;
      totalCartValueItemA = ~~(x / 3) * 1.3 + (x % 3) * 0.5;

      cartElement.innerHTML += `
            <div class="cartItemRow">
              <div class="cartItemCard">
                <div class="cartItemDescription">
                  <div onClick="removeFromCart(${item.id})"> 
                    <img src="/img/${item.img}"/>
                    <h6>${item.name}</h>
                  </div>
                </div>
              </div>
              <span><button class="btn btn-danger" onClick="changeNumberOfUnits('minus', ${
                item.id
              })"><i class="fa-solid fa-minus"></i></button>
              ${item.numberOfUnits} 
              <button class="btn btn-success" onClick="changeNumberOfUnits('plus', ${
                item.id
              })"><i class="fa-solid fa-plus"></i></button>
              </span>
              <span>Sub-Total: £ ${totalCartValueItemA.toFixed(2)}</span>
            </div>        `;
    } else if (item.id === 1) {
      const x = item.numberOfUnits;
      totalCartValueItemB = ~~(x / 2) * 0.45 + (x % 2) * 0.3;

      cartElement.innerHTML += `
            <div class="cartItemRow">
              <div class="cartItemCard">
                <div class="cartItemDescription">
                  <div onClick="removeFromCart(${item.id})"> 
                    <img src="/img/${item.img}"/>
                    <h6>${item.name}</h>
                  </div>
                </div>
              </div>
              <span><button class="btn btn-danger" onClick="changeNumberOfUnits('minus', ${
                item.id
              })"><i class="fa-solid fa-minus"></i></button>
              ${item.numberOfUnits} 
              <button class="btn btn-success" onClick="changeNumberOfUnits('plus', ${
                item.id
              })"><i class="fa-solid fa-plus"></i></button>
              </span>
              <span>Sub-Total: £ ${totalCartValueItemB.toFixed(2)}</span>
            </div>        `;
    } else if (item.id === 2) {
      const x = item.numberOfUnits;
      totalCartValueItemC = ~~(x / 5) * 0.8 + (x % 5) * 0.2;

      cartElement.innerHTML += `
            <div class="cartItemRow">
              <div class="cartItemCard">
                <div class="cartItemDescription">
                  <div onClick="removeFromCart(${item.id})"> 
                    <img src="/img/${item.img}"/>
                    <h6>${item.name}</h>
                  </div>
                </div>
              </div>
              <span><button class="btn btn-danger" onClick="changeNumberOfUnits('minus', ${
                item.id
              })"><i class="fa-solid fa-minus"></i></button>
              ${item.numberOfUnits} 
              <button class="btn btn-success" onClick="changeNumberOfUnits('plus', ${
                item.id
              })"><i class="fa-solid fa-plus"></i></button>
              </span>
              <span>Sub-Total: £ ${totalCartValueItemC.toFixed(2)}</span>
            </div>        `;
    } else if (item.id === 3) {
      const x = item.numberOfUnits;
      totalCartValueItemD = ~~(x / 5) * 0.5 + (x % 5) * 0.15;

      cartElement.innerHTML += `
            <div class="cartItemRow">
              <div class="cartItemCard">
                <div class="cartItemDescription">
                  <div onClick="removeFromCart(${item.id})"> 
                    <img src="/img/${item.img}"/>
                    <h6>${item.name}</h>
                  </div>
                </div>
              </div>
              <span><button class="btn btn-danger" onClick="changeNumberOfUnits('minus', ${
                item.id
              })"><i class="fa-solid fa-minus"></i></button>
              ${item.numberOfUnits} 
              <button class="btn btn-success" onClick="changeNumberOfUnits('plus', ${
                item.id
              })"><i class="fa-solid fa-plus"></i></button>
              </span>
              <span>Sub-Total: £ ${totalCartValueItemD.toFixed(2)}</span>
            </div>        `;
    }
  });
}

//Calculate Cart Subtotal
function renderSubtotal() {
  let totalItem = 0;

  cart.forEach((item) => {
    totalItem += item.numberOfUnits;
  });
  //Total cart value
  let totalCartValue =
    totalCartValueItemA +
    totalCartValueItemB +
    totalCartValueItemC +
    totalCartValueItemD;

  subTotalElement.innerHTML = `
  Cart Total (${totalItem} items): £ ${totalCartValue.toFixed(2)}
  `;
  //totalItemCart.innerHTML = totalItem;
}
