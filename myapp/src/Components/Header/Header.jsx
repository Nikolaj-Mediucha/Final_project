import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import classes from './Header.module.css';
import Button from '../UI/Button/Button';



export default function Header() {
  const navigate = useNavigate();

  return (
    
    
      <header className={classes.header}>
        <div className={classes.actions_buttons}>
          <Link to={'/'}>
            <i className={classes.icon_home}/>
          </Link>
          <Button buttonClassName={classes.button} text='Catalog' onClick={()=>{navigate('/catalog')}}/>   


        </div>

       
        <nav className={classes.nav}>
        <Link to={'/catalog'} className={classes.link}>Mein Page</Link>
        <Link to={'/catalog/'} className={classes.link}>All products</Link>
        <Link to={'/catalog/'} className={classes.link}>All Sales</Link>
        <Link to={'/basket'}><i className={classes.icon_basket}/></Link>

        </nav>
       

      </header>
      
    
  )
}
