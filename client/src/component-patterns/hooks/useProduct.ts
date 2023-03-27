import { useEffect, useState } from 'react';

const useProduct = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log(quantity);
  }, [quantity])
  

  const increaseBy = (value: number): void =>
    setQuantity((prev) => Math.max(prev + value, 0));

  return {
    quantity,
    increaseBy,
  };
};

export default useProduct;
