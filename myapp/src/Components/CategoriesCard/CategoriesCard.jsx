import React from 'react';
import {Link} from 'react-router-dom';
import classes from './CategoriesCard.module.css';
import { API_URL } from '../../сonstants/constants';

export default function CategoriesCard({data}) {
  return (
    <Link to={`/catalog/${data.id}`} className={classes.container}>        
      <a href='#'><img src={`${API_URL}${data.image}`} /></a>
        <h3 className={classes.title}>{data.title}</h3>                       
    </Link>
  )
}
