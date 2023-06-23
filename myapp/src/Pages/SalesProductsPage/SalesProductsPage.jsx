import React from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import { useProducts } from '../../hooks/useProducts';

export default function SalesProductsPage() {
  const products = useProducts();
  const filteredProducts = products.filter((item) => item.discont_price);

  return (
    <div>
      <h1>Sales</h1>
      {products.length ? (
        <ProductList products={filteredProducts} />
      ) : 'No products with discont'}
    </div>
  )
}
