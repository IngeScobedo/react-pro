import { useContext } from "react";
import { productsContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  alt?: string;
  className?: string;
}
const ProductImage = ({ img, alt, className }: Props) => {
    const { product } = useContext(productsContext);

    let imgToShow: string;
    !alt && (alt = product.title.toLowerCase());
  
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = noImage;
    }

    console.log('imgToShow', imgToShow);
  
    return <img className={`${styles.productImg} ${className ? className : ''}`} src={imgToShow} alt={alt} />;
  };

export default ProductImage