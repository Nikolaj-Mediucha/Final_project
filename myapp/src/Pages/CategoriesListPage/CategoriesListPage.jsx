import React from 'react'
import CategoriesCard from '../../Components/CategoiesCard/CategoriesCard';
import classes from './CategoriesListPage.module.css';
// import {API_URL} from '/Constants/constants';

// useState - переменная

// use Effect - выполнить фук только один раз

// fetch
export default function CategoriesListPage() {
  const [arr, updateArr] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3333/categories/all') // запрос к беку
      .then(response => response.json()) // преобразуем
      .then(data => updateArr(data)); // получили преоб data и записали в перем arr
  }, []);

  return (
    <div>
      <h1 className={classes.title}>Categories</h1> 
        <div className={classes.container}>
            {arr.length ? arr.map((item) => <CategoriesCard data={item} key={item.id}/> ) : 
            <h3>Loading..</h3>
            }
        </div>
    </div>
  )
}
