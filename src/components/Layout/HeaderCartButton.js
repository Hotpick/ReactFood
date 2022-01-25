import {useContext, useEffect, useState} from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);
  
  const {items} = cartContext;
  
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  
  const numberOfCartItems = items.reduce((currentNumber , item) => {
    return currentNumber + item.amount;
  }, 0);
  
  
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    }
  }, [items]);
  
  return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>
          Your Cart
        </span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
      </button>
  );
}

export default HeaderCartButton;