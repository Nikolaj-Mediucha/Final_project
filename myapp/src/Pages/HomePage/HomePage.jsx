import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './HomePage.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/UI/Button/Button'


function HomePage() {
  return (
    <div>
      <Header/>
      <div className='body'>
         <h2 className={classes.categories_title}>Catalog</h2>
          <NavLink to={'/CategoriesListPage'}>
            <Button text='AllCategories' className='categories_btn' />
          </NavLink>
      </div>

      <Footer/>
    </div>
  )
}

export default HomePage