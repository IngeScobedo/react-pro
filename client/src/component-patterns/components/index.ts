import ProductButtons from './ProductButtons';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';

export { default as  ProductButtons } from './ProductButtons';
export { default as ProductImage } from './ProductImage';
export { default as ProductTitle } from './ProductTitle';

export type { Props as ProductButtonProps } from "./ProductButtons";
export type { Props as ProductCardProps } from "./ProductCard";
export type { Props as ProductImageProps } from "./ProductImage";
export type { Props as ProductTitleProps} from "./ProductTitle";

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})
export default ProductCard