import styles from './MealItemForm.module.css';
import Input from './../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      {/* мы в инпут передаем все пропсы с input.js и помним что тут будет храниться объект input*/}
      <Input
        label='Количество'
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
    </form>
  );
};

export default MealItemForm;
