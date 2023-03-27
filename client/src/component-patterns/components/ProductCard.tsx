import { createContext, ReactElement, useContext } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
// * Product Context
export const productsContext = createContext({} as ProductContextProps);
const { Provider } = productsContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { increaseBy, quantity } = useProduct();

  return (
    <Provider
      value={{
        quantity,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export default ProductCard;
