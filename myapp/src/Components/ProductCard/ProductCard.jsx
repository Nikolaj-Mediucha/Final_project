import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/basket'
import classes from './ProductCard.module.css'

export default function ProductCard({ data }) {
  const dispatch = useDispatch();
  const onAddToCardClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addProduct(data));
  }

  return (

    <div className={classes.container}>
      <Link to={`/product/${data.id}`} className={classes.link}>
        <img src={`http://localhost:3333${data.image}`} width="300" />
        <button className={classes.button} onClick={onAddToCardClick}>Add to cart</button>
      </Link>
      <div className={classes.prices}>
        <div className={classes.current_price}>{data.discont_price ? data.discont_price : data.price}<span className={classes.spanPrice}>$</span></div>
        {data.discont_price ? (
          <>
            <div className={classes.price}><s>{data.price}<span className={classes.spanPrice}>$</span></s></div>
            <div className={classes.discont}>-{Math.round(100 - (data.discont_price / data.price * 100))}%</div>
          </>) : ''}
      </div>
      <h3 className={classes.title}>{data.title}</h3>
    </div>

  )
}
