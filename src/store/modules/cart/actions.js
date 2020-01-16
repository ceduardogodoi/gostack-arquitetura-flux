function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
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

export { addToCartRequest, addToCartSuccess, removeFromCart, updateAmount };
