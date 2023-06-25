import React from 'react'
import classes from './ProductsListPage.module.css'
import { useProducts } from '../../hooks/useProducts';
import ProductList from '../../Components/ProductList/ProductList';

export default function ProductsListPage() {
  const products = useProducts();
  return (
    <div>
      <h1>All products</h1>
      {products.length ? (
        <ProductList products={products} />
      ) : 'No products'}
    </div>
  )
}
