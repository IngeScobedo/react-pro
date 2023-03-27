import ProductCard, { Product } from '../components/ProductCard';

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Coffee Mug',
    img: '/coffee-mug.png',
  },
  {
    id: '2',
    title: 'Coffee Express',
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
        {PRODUCTS.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
