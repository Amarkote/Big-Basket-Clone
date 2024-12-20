import {
  ADD_TO_CART,
  FETCH_DATA,
  FETCH_TO_CART,
  GET_SINGLE_PRODUCT,
  REMOVE_TO_CART,
  SET_ORDER,
} from "./action";

const initState = {
  product: [],
  currentProduct: {},
  cart: [],
  order:[]
};
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        currentProduct: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case FETCH_TO_CART: {
      return {
        ...state,
        cart: [...action.payload],
      };
    }
    case REMOVE_TO_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case SET_ORDER: {
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    }
    // case FETCH_CART: {
    //   return {
    //     ...state,
    //     cart: [...state.cart, action.payload],
    //   };
    // }
    // case DELETE_CART:
    //   return { cart: state.cart.filter((e) => e.id !== action?.payload?.id) };
    default:
      return state;
  }
};
