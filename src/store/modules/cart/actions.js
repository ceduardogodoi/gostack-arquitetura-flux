function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export { addToCart, removeFromCart };
