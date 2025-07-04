import React, { useState } from 'react';

function Product({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => setAdded(true)}>Add to Cart</button>
      {added && <p>Added to Cart!</p>}
    </div>
  );
}

export default Product;
