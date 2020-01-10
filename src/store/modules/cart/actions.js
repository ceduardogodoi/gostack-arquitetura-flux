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

function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export { addToCart, removeFromCart, updateAmount };
