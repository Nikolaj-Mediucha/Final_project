import React from 'react'
import classes from './BasketPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProductById } from '../../store/basket'

export default function BasketPage() {
  const itemsInBasket = useSelector((state) => state.basket)
  const dispatch = useDispatch()


  if (!itemsInBasket) {
    return 'Basket is empty'
  }
  return (
    <div >
      <p3 className={classes.basket_title}>Shopping cart</p3>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h3 className={classes.backToStore}>Back to the store</h3>
          {itemsInBasket.map((item) => (
            <div className={classes.itemsInBasket}>
              <img src={`http://localhost:3333${item.image}`} className={classes.itemImage} />
              <div>
                <h3 className={classes.title}>{item.title}</h3>
                <div className={classes.itemsAmount}>-  1  +</div>
              </div>
              <div className={classes.price}>

              </div>
              <button className={classes.button} onClick={(e) => { dispatch(removeAllProductById(item.id)) }}>X</button>
            </div>
          ))}
        </div>
        <div className={classes.order}>
          <h3 className={classes.orderTitle}>Order Details</h3>
          <div className={classes.orderTotalContainer}>
            <p className={classes.orderTotal}>Total</p>
            <p className={classes.totalOrderSum}>3077,00
              <span className={classes.orderSumSpan}>$</span>
            </p>
          </div>
          <input type="telefon" placeholder='Phone number' className={classes.orderInput} />
          <button className={classes.orderButton}>Order</button>
        </div>
      </div>
    </div>
  )
}
