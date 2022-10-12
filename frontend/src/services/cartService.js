export const readCart = () => {
    const cartJson = localStorage.getItem("cart");
    let cartItems = [];
    if (cartJson) {
      cartItems = JSON.parse(cartJson);
    }
    return cartItems;
};

export const addItemToCart = (item) => {
  const cartItems = readCart();
  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const deleteItemFromCart = (index) => {
  const cartItems = readCart();
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  window.location.reload();
}