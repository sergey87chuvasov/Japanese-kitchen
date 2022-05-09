import styles from './MealItem.module.css';
// import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        {/* тут имя 'name' может быть любым - ИМЯ БЛЮДА */}
        <h3>{props.name}</h3>
        {/*  Описание БЛЮДА */}
        <div className={styles.description}>{props.description}</div>
        {/*  ЦЕНА БЛЮДА заранее отформотрируем выше func*/}
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
