import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/CartContextProvider';

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
    // <React.Fragment>
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
    // </React.Fragment>
  );
}

export default App;
