import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  // созд вспомогат функц - показать корзину
  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  // спрятать корзину
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <React.Fragment>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
