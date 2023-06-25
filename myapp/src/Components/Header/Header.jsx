import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import classes from './Header.module.css';
import Button from '../UI/Button/Button';

const getAllItemsAmount = (arr) => arr.reduce((sum, arrItem) => sum + arrItem.amount, 0);
export default function Header() {
  const navigate = useNavigate();
  const itemsInBasket = useSelector((state) => getAllItemsAmount(state.basket))
  return (
    <header className={classes.header}>
      <div className={classes.actions_buttons}>
        <Link to="/">
          <i className={classes.icon_home} />
        </Link>
        <Button buttonClassName={classes.button} text='Catalog' onClick={() => { navigate('/catalog') }} />
      </div>
      <nav className={classes.nav}>
        <Link to={'/'} className={classes.link}>Main Page</Link>
        <Link to={'/products'} className={classes.link}>All products</Link>
        <Link to={'/sales'} className={classes.link}>All Sales</Link>
        <Link className={classes.basket} to={'/basket'}>
          <i className={classes.icon_basket} />
          {itemsInBasket ? <div className={classes.amount}>{itemsInBasket}</div> : null}
        </Link>
      </nav>
    </header>
  )
}
