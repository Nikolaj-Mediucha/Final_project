import React from 'react'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard';
import { useCategories } from '../../hooks/useCategories';
import classes from './CategoriesListPage.module.css';
import CategoriesList from '../../Components/CategoriesList/CategoriesList';

export default function CategoriesListPage() {
  const categories = useCategories();
  return (
    <div>
      <h1 className={classes.title}>Categories</h1>

      <div className={classes.container}>
        {categories.length ? <CategoriesList categories={categories} /> :
          <h3>No categories</h3>
        }
      </div>
    </div>
  )
}
