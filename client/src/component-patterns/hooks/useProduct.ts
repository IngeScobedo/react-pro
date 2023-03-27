import { useState } from 'react';

const useProduct = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseBy = (value: number) => setQuantity((prev) => Math.max(prev + value, 0));

  return {
    quantity,
    increaseBy,
  };
};

export default useProduct;
