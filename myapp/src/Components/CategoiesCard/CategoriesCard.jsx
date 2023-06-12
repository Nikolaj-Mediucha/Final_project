import React from 'react';
import {Link} from 'react-router-dom';
import classes from './CategoriesCard.module.css';


export default function CategoriesCard({data}) {
  return (
    <Link to={`/catalog/${data.id}`} className={classes.container}>
        
        <img src={`http://localhost:3333${data.image}`} width='318' height='350'/>
        <h3 className={classes.title}>{data.title}</h3>
                           
         
    </Link>
  )
}
