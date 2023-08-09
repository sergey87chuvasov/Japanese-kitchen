import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import SubmitOrder from './SubmitOrder';
import React from 'react';

const Cart = (props) => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);

  const [isDataSubmitting, setIsDataSubmitting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
    useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  // отображен кнопки при заказе
  const hasItems = cartContext.items.length > 0;

  // функции удаления и добавления элемента в корзине
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsSubmitOrderAvailable(true);
  };

  // sendOrder
  const submitOrderHandler = async (userData) => {
    setIsDataSubmitting(true);

    await fetch(
      'https://react-course-http-28f8d-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          // get our meals
          orderedMeals: cartContext.items,
        }),
      }
    );

    setIsDataSubmitting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
  };

  // вспомогат переменн для элементов корзины - это массив из нескольк объектов
  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalButtons = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onHideCart}>
        Закрыть
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Заказать
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {/* отобраз элементы корзины */}
      {cartItems}

      {/* для суммы */}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>

      {isSubmitOrderAvailable && (
        <SubmitOrder
          onSubmit={submitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isSubmitOrderAvailable && modalButtons}
    </React.Fragment>
  );

  const dataSubmittinCartModalContent = <p>Отправка данных заказа...</p>;

  const dataWasSubmittedCartModalContent = (
    <React.Fragment>
      <p>Ваш заказ успешно отправлен!</p>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmitting && !wasDataSendingSuccessful && cartModalContent}
      {isDataSubmitting && dataSubmittinCartModalContent}
      {wasDataSendingSuccessful && dataWasSubmittedCartModalContent}
    </Modal>
  );
};

export default Cart;
