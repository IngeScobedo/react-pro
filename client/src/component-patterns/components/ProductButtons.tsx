import { useContext } from "react";
import { productsContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
}

export const ProductButtons = ({ className }: Props) => {
    const { increaseBy, quantity } = useContext(productsContext);
    return (
      <div className={`${styles.buttonsContainer} ${className ? className : ''}`}>
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