import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
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

  return (
    <Modal onHideCart={props.onHideCart}>
      {/* отобраз элементы корзины */}
      {cartItems}

      {/* для суммы */}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>

      {/* для действий - кнопки*/}
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
