import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './HomePage.module.css'
import Button from '../../Components/UI/Button/Button'
import { useCategories } from '../../hooks/useCategories';
import { useProducts } from '../../hooks/useProducts'
import CategoriesList from '../../Components/CategoriesList/CategoriesList'
import ProductList from '../../Components/ProductList/ProductList'
import img from './Media/SaleImage.png';
import image from './Media/image 3.png';
import { API_URL } from '../../сonstants/constants';

function HomePage() {
  const allCategories = useCategories();
  const products = useProducts();
  const salesProducts = products.filter((item) => item.discont_price).splice(0, 4);
  const [phone, updatePhone] = React.useState('');
  const sendDiscountRequest = () => {
    fetch(`${API_URL}/sale/send`, {
      method: 'POST',
      body: JSON.stringify(
        {
          phone,
        }
      )
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          alert('Thank you for the discount request!');
        }
      });
  }
  return (
    <div>
      <div className={classes.saleContainer}>
        <div className={classes.saleDescription}>
          <h1 className={classes.saleH1}>Sale</h1>
          <h2 className={classes.saleH2}>New season</h2>
          <div className={classes.buttonSale}>
            <NavLink to='/sales' className={classes.button}>Sale</NavLink>
          </div>
        </div>
        <img src={img} alt="image" className={classes.saleImage} />
      </div>
      <div className={classes.catalog}>
        <div className={classes.row}>
          <h2 className={classes.categories_title}>Catalog</h2>
          <NavLink to='/catalog' className={classes.allCategories}>All categories</NavLink>
        </div>
        <CategoriesList categories={allCategories.slice(0, 4)} />
      </div>
      <div className={classes.discontContainer}>
        <div className={classes.discontImg}>
          <img src={image} alt="discont" className={classes.discontImage} />
        </div>
        <div className={classes.discontGet}>
          <h2 className={classes.h2}>5% off</h2>
          <h3 className={classes.h3}>on the first order</h3>
          <input type='telefon' placeholder='+49' onChange={(e) => updatePhone(e.target.value)} className={classes.input} />
          <button className={classes.getButton} onClick={sendDiscountRequest} disabled={!phone}>Get a discount</button>
        </div>
      </div>
      <div>
        <h2 className={classes.categories_title}>Sale</h2>
        <ProductList products={salesProducts} />
      </div>
    </div>
  )
}
export default HomePage