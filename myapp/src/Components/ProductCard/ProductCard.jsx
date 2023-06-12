import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ProductCard.module.css'

export default function ProductCard({data}) {
  return (
     
    <div className={classes.container}>
         <Link to={`/product/${data.id}`} className={classes.link}>
            <img src={`http://localhost:3333${data.image}`} width="300" />
            <button className={classes.button} onClick={(e)=>{ e.stopPropagation(); e.preventDefault(); }}>Add to cart</button>
        </Link>
        <div className={classes.prices}>
            <div className={classes.current_price}>{data.price}$</div>
            {data.discont_price ? (
            <> 
                <div className={classes.discont_price}>{data.discont_price}$</div>
                <div className={classes.discount}>{Math.round(100-(data.discont_price/data.price*100))}%</div>
            </>):''}
        </div>
        <h3 className={classes.title}>{data.title}</h3>                           
    </div>    
    
  )
}
