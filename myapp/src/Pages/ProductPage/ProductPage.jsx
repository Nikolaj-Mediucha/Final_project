import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import classes from './ProductPage.module.css'
import Container from '../../Components/Container/Container';

export default function ProductPage() {
  const { productId } = useParams();
  const [data, updateData] = React.useState(null);

  console.log(data);

  React.useEffect(() => {
    fetch(`http://localhost:3333/products/${productId}`)
      .then(response => response.json())
      .then(data => updateData(data));
  }, []);

  if (!data) {
    return 'loading';
  };
  const productData = data[0]; // data[data.length - 1] 

  return (
    <div>
      <h1 className={classes.h1}>{productData.title}</h1>
      <div className={classes.container}>
        <div className={classes.img}>
          <img src={`http://localhost:3333${productData.image}`} />
        </div>
        <div className={classes.info}>
          <div className={classes.price}>
            <div className={classes.current_price}>{productData.price}$</div>
            {productData.discont_price ? (
              <>
                <div className={classes.discont_price}>{productData.discont_price}$</div>
                <div className={classes.discont}>-{Math.round(100 - (productData.discont_price / productData.price * 100))}%</div>
              </>) : ''}
          </div>
          <button className={classes.button} onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>To cart</button>
          <div className={classes.description}>
            <p3 className={classes.description_title}>Description</p3>

            <p4 className={classes.description_text}>{productData.description}</p4>
          </div>
        </div>
      </div>
    </div>
  )
}
