const ADD_PRODUCT = 'ADD_CART_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const RESET_CART = 'RESET_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ORDER_PRODUCT = 'ORDER_PRODUCT';
const RESET_ORDER = 'RESET_ORDER';

let initialState = {
  items: [],
  quantityItem: [],
  selectedItems: [],
};

const cartProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [
          ...state.items.filter(e => e.productId !== action.payload.productId), action.payload
        ]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(e => e.productId !== action.payload),
        quantityItem: state.quantityItem.filter(e => e.productId !== action.payload)
      };
      case RESET_CART:
        return {
          items: [],
          selectedItems: [],
          quantityItem: []
        };
    case ADD_QUANTITY:
      return {
        ...state,
        quantityItem: [
          ...state.quantityItem.filter(e => e.productId !== action.payload.productId), action.payload
        ]
      };
    case SUB_QUANTITY:
      return {
        ...state,
        quantityItem: [...state.quantityItem.filter(e => e.productId !== action.payload.productId), action.payload]
      };
    case ORDER_PRODUCT:
      return {
        ...state,
        selectedItems: [action.payload]
      };
    case RESET_ORDER:
      return {
        ...state,
        selectedItems: [],
        quantityItem: []
      };
    default:
      return state;
  }
}


export const addToCart = (productSize, productId, productPrice, productDescription, productMaterial, pictureUrl) => ({
  type: ADD_PRODUCT, payload: {
    productSize,
    productId,
    productPrice,
    productDescription,
    productMaterial,
    pictureUrl
  }
})
export const removeFromCart = (productId) => ({ type: REMOVE_PRODUCT, payload: productId })
export const resetCart = () => ({ type: RESET_CART })
export const addQuantity = (productId, productSize, quantity, productPrice) => ({ type: ADD_QUANTITY, payload: { productId, productSize, quantity, productPrice } })
export const subQuantity = (productId, productSize, quantity, productPrice) => ({ type: SUB_QUANTITY, payload: { productId, productSize, quantity, productPrice } })
export const orderProduct = (totalPrice, totalCount, obj) => ({ type: ORDER_PRODUCT, payload: { totalPrice, totalCount, obj } })
export const resetOrder = () => ({ type: RESET_ORDER })

export default cartProductReducer;