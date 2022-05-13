import { useReducer } from 'react';
import CartContext from './cart-context';

// нам нужна функц с дефолтн сост корзины
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // проверка на наличие одинакового товара
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];

    let updateItem;
    let updateItems;

    if (existingCartItem) {
      updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItem = {
        ...action.item,
      };
      updateItems = state.items.concat(updateItem);
    }

    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  // вся логика по управлению данными
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
