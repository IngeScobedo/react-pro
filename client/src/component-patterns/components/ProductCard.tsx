import { createContext, ReactElement } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const productsContext = createContext({} as ProductContextProps);
const { Provider } = productsContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
  className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {
  const { increaseBy, quantity } = useProduct();

  return (
    <Provider
      value={{
        quantity,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className ? className : ''}`}>{children}</div>
    </Provider>
  );
};

export default ProductCard;
