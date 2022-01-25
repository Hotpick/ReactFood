import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    return setCartIsShown(true);
  }
  
  const hideCartHandler = () => {
    console.log('olk');
    return setCartIsShown(false);
  }
  
  return (
    <>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </>
  );
}

export default App;
