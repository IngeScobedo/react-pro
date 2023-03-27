import { useContext } from "react";
import { productsContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
    const { increaseBy, quantity } = useContext(productsContext);
    return (
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{quantity}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    );
  };

export default ProductButtons