import React from 'react';
import {Link} from 'react-router-dom';
import classes from './CategoriesCard.module.css';


export default function CategoriesCard({data}) {
  return (
    <Link to={`/catalog/${data.id}`} className={classes.container}>
        
      <a href='#'><img src={`http://localhost:3333${data.image}`} /></a>
        <h3 className={classes.title}>{data.title}</h3>
                           
         
    </Link>
  )
}
