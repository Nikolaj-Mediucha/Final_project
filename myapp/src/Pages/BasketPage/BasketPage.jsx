import React from 'react'
import classes from './BasketPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProductById, updateAmountById } from '../../store/basket'
import { API_URL } from '../../сonstants/constants';
import { Link } from 'react-router-dom';

export default function BasketPage() {
  const [phone, updatePhone] = React.useState('');
  const itemsInBasket = useSelector((state) => state.basket)
  const dispatch = useDispatch();
  const getSumOfItems = (arr) => arr.reduce((sum, arrItem) => sum + (arrItem.price_discont || arrItem.price) * arrItem.amount, 0);
  const sumOfAllItems = useSelector((state) => getSumOfItems(state.basket))
  if (!itemsInBasket) {
    return 'Basket is empty'
  }
  const onAmountChange = (id, difference) => {
    dispatch(updateAmountById({ id, difference }))
  }
  const sendOrder = () => {
    fetch(`${API_URL}/order/send`, {
      method: 'POST',
      body: JSON.stringify(
        {
          phone: phone,
          basket: itemsInBasket
        }
      )
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          alert('Thank you for your order!')
        }
      });
  }
  return (
    <div >
      <p3 className={classes.basket_title}>Shopping cart</p3>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.header}>
            <Link to={'/'} className={classes.backToStore}>Back to the store</Link>
          </div>
          <div className={classes.list}>
            {itemsInBasket.length ? itemsInBasket.map((item) => (
              <div className={classes.itemsInBasket}>
                <img src={`${API_URL}${item.image}`} className={classes.itemImage} />
                <div>
                  <h3 className={classes.title}>{item.title}</h3>
                  <div className={classes.itemsAmount}>
                    <button className={classes.amountButton} onClick={() => onAmountChange(item.id, -1)}>-</button>
                    <span>{item.amount}</span>
                    <button className={classes.amountButton} onClick={() => onAmountChange(item.id, 1)}>+</button>
                  </div>
                </div>
                <div className={classes.price}>
                  <div className={classes.current_price}>{item.discont_price ? item.discont_price : item.price}
                    <span className={classes.spanPrice}>$</span>
                  </div>
                  {item.discont_price ? (
                    <>
                      <div className={classes.discont_price}><s>{item.price}$</s></div>
                    </>) : ''}
                </div>
                <button className={classes.button} onClick={(e) => { dispatch(removeAllProductById(item.id)) }}>X</button>
              </div>
            )) : 'Basket is empty'}
          </div>
        </div>
        <div className={classes.order}>
          <h3 className={classes.orderTitle}>Order Details</h3>
          <div className={classes.orderTotalContainer}>
            <p className={classes.orderTotal}>Total</p>
            <p className={classes.totalOrderSum}>{sumOfAllItems.toFixed(2)}
              <span className={classes.orderSumSpan}>$</span>
            </p>
          </div>
          <input type="telefon" placeholder='Phone number' className={classes.orderInput} onChange={(e) => { updatePhone(e.target.value) }} />
          <button className={classes.orderButton} onClick={sendOrder} disabled={!phone.length || !itemsInBasket.length}>Order</button>
        </div>
      </div>
    </div>
  )
}
