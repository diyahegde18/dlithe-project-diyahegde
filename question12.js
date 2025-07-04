import React from 'react';

function ProductsList({ products }) {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

export default ProductsList;
