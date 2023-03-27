import ProductCard from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.scss'

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Coffee Mug',
    img: '/coffee-mug.png',
    className: 'bg-dark text-white',
  },
  {
    id: '2',
    title: 'Coffee Express',
    className: 'text-dark',
    img: '/coffee-mug.png'
  },
];

const ShoppingPage = () => {
  return (
    <div>
      <h1>shoping</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '3rem',
        }}
      >
        {PRODUCTS.map((product, i) => (
          <ProductCard className={product.className} product={product} key={i}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
