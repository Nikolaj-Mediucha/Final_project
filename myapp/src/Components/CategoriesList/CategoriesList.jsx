import React from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import classes from "./CategoriesList.module.css";

const CategoriesList = ({ categories }) => (
  <div className={classes.container}>
    {categories.map((category) => (
      <CategoriesCard data={category} key={category.id} />
    ))}
  </div>
);
export default CategoriesList;