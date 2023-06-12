import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

export default function CategoriesPage() {
 const { category } = useParams();
  return <div>Categodies:{category}</div>
}

