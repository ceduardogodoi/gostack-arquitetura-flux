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

function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export {
  addToCartRequest,
  addToCartSuccess,
  removeFromCart,
  updateAmountRequest,
  updateAmountSuccess,
};
