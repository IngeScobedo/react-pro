import noImage from '../assets/no-image.jpg';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

interface Props {
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

const ProductCard = ({ product }: Props) => {
  const { increaseBy, quantity } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt={product.title}
      />

      <span className={styles.productDescription}>{product.title}</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{quantity}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
