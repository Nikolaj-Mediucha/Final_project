import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from './ProductList.module.css';

const PageList = ({ products }) => (
  <div className={classes.container}>
    {products.map((product) => (
      <ProductCard data={product} key={product.id} />
    ))}
  </div>
);

export default PageList;