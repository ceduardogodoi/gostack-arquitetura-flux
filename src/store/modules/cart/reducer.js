import produce from 'immer';

function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product, // 04:39
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}

export default reducer;
