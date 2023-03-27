import { useContext } from "react";
import { productsContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props { title?: string, className?: string };

const ProductTitle = ({ title, className }: Props) => {
    const { product } = useContext(productsContext);
    return (
      <span className={`${styles.productDescription} ${className ? className : ''}`}>{title ? title : product.title}</span>
    );
  };

export default ProductTitle
