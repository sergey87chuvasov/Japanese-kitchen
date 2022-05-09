import React from 'react';
import styles from './Header.module.css';
import sushiImage from '../../assets/sushi.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <button>Корзина</button>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt='Блюда японской кухни' />
      </div>
    </React.Fragment>
  );
};

export default Header;
