//Variable defined

const productElement = document.querySelector(".productRender");
const cartElement = document.querySelector(".cartItems");

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
  const item = products.find((product) => product.id === id);
  cart.push({ ...item, numberOfUnits: 1 });
  // console.log(cart);

  updateCart();
}

//Update Cart
function updateCart(params) {
  renderCartItems();
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
              <span> 1 </span>
              <span>Sub-Total: £ ${item.price}</span>
            </div>        `;
  });
}
