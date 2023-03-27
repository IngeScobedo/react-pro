import { ProductButtonProps, ProductCardProps, ProductImageProps, ProductTitleProps } from "../components";

export interface Product {
    id: string;
    title: string;
    img?: string;
    className?: string;
}

export interface ProductContextProps {
    quantity: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title, className }: ProductTitleProps) => JSX.Element;
    Image: ({ img, alt, className }: ProductImageProps) => JSX.Element;
    Buttons: ({ className }: ProductButtonProps) => JSX.Element;
}