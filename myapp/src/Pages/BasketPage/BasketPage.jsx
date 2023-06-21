import React from 'react'
import classes from './BasketPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProductById, updateAmountById } from '../../store/basket'

export default function BasketPage() {
  const [phone, updatePhone] = React.useState('');
  const itemsInBasket = useSelector((state) => state.basket)
  const dispatch = useDispatch()


  if (!itemsInBasket) {
    return 'Basket is empty'
  }

  const onAmountChange = (id, difference) => { //diff =  1 || -1
    dispatch(updateAmountById({id, difference}))
  }

  const sendOrder = () => {
    fetch('http://localhost:3333/order/send', {
      method: 'POST',
      body: JSON.stringify(
        {
          phone: phone, // todo useSTate - update через input
          basket: itemsInBasket
        }
      )
    }) // запрос к беку
      .then(response => response.json()) // преобразуем
      .then(data => {
        console.log(data);
        if (data.status === 'OK') {
          // вывести сообщение 
          
    // on success -> remove all items in basket + clear phone
        }
      }); 

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
                <div className={classes.itemsAmount}>
                  <button className={classes.amountIcon} onClick={() =>onAmountChange(item.id, -1)}>-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => onAmountChange(item.id, 1)}>+</button>
                </div>
              </div>
              <div className={classes.price}>
                <div className={classes.current_price}>{item.price}
                  <span className={classes.spanPrice}>$</span>
                </div>
                {item.discont_price ? (
                  <>
                    <div className={classes.discont_price}>{item.discont_price}$</div>
                  </>) : ''}
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
          <input type="telefon" placeholder='Phone number' className={classes.orderInput} onChange={(e) => {updatePhone(e.target.value)}}/>
          <button className={classes.orderButton} onClick={sendOrder} disabled={!phone.length || !itemsInBasket.length}>Order</button>
        </div>
      </div>
    </div>
  )
}
