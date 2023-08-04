import styles from './SubmitOrder.module.css';

const SubmitOrder = (props) => {
  const confirmOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>Введите имя</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='city'>Введите название города</label>
        <input type='text' id='city' />
      </div>
      <div className={styles.control}>
        <label htmlFor='address'>Введите Адрес</label>
        <input type='text' id='address' />
      </div>
      <button>Подтвердить заказ</button>
      <button type='button' onClick={props.onCancel}>
        Отменить
      </button>
    </form>
  );
};

export default SubmitOrder;
