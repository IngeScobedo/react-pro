import { useContext } from "react";
import { productsContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

const ProductImage = ({ img = '', alt = 'No product image' }) => {
    const { product } = useContext(productsContext);
    let imgToShow: string;
  
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = noImage;
    }
  
    return <img className={styles.productImg} src={imgToShow} alt={alt} />;
  };

export default ProductImage