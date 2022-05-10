import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  // вспомогат переменн для элементов корзины - это массив из нескольк объектов

  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {/* отобраз элементы корзины */}
      {cartItems}

      {/* для суммы */}
      <div className={styles.total}>
        <span>Итого</span>
        <span>45.88</span>
      </div>

      {/* для действий - кнопки*/}
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
