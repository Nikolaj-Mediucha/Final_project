import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './HomePage.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/UI/Button/Button'
import { useCategories } from '../../hooks/useCategories';
import { useProducts } from '../../hooks/useProducts'
import CategoriesList from '../../Components/CategoriesList/CategoriesList'
import ProductList from '../../Components/ProductList/ProductList'

function HomePage() {
  const allCategories = useCategories();
  const products = useProducts();
  const salesProducts = products.filter((item) => item.discont_price).splice(0, 4);

  const [phone, updatePhone] = React.useState('');

  const sendDiscountRequest = () => {
    fetch('http://localhost:3333/sale/send', {
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
          alert('Thank you for your order!');
        }
      });
  }

  return (
    <div>
      <div>
        Sale
        <NavLink to='/sales'>Sale</NavLink>
      </div>
      <div className={classes.catalog}>
        <div className={classes.row}>
          <h2 className={classes.categories_title}>Catalog</h2>
          <NavLink to='/catalog'>All categories</NavLink>
        </div>
        <CategoriesList categories={allCategories.slice(0, 4)} />
      </div>
      <div>
        <input type='' onChange={(e) => updatePhone(e.target.value)} />
        <Button onClick={sendDiscountRequest} text="Get discount" disabled={!phone} /> 
      </div>
      <div>
        <h2>Sales</h2>
        <ProductList products={salesProducts} />
      </div>
    </div>
  )
}

export default HomePage