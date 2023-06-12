import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import CategoriesCard from '../../Components/CategoiesCard/CategoriesCard';
import classes from './CategoriesPage.module.css'
import ProductCard from '../../Components/ProductCard/ProductCard';

const data = { "category": { "id": 4, "title": "Plant Care", "image": "/category_img/4.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z" }, "data": [{ "id": 23, "title": "Espoma Organic Potting Mix23", "price": 6.95, "discont_price": 6.7, "description": "Did you know your plant`s soil medium can make or break its overall growth and health? Woodie believes potting your plants in an all organic soil mixture that feeds your plant with nutrients, while still giving roots the space they need to breathe and grow. Try out Espoma`s Organic Potting Mix in your plantings this season and see your plants take off!", "image": "/product_img/23.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }, { "id": 24, "title": "Espoma Organic Orchid Mix", "price": 6.95, "discont_price": null, "description": "Orchids radiate a delicate beauty so powerful that it, at times, can be intimidating. With use of Espoma`s Organic Orchid Mix, you can give your beautiful plant the ideal environment for optimal growth.", "image": "/product_img/24.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }, { "id": 25, "title": "Espoma Organic Perlite", "price": 13.95, "discont_price": 13.65, "description": "Espoma Organic Perlite makes the task of propagating plants quite easy and fun. This porous material is used to aid in aerating soil to allow air, water and nutrients to reach the roots of your plant.", "image": "/product_img/25.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }, { "id": 26, "title": "Fox Farm Happy Frog Potting Soil", "price": 14.95, "discont_price": null, "description": "Your potted plants deserve the best. Their roots can’t seek nutrition in the ground, so you have to bring it to them. That’s why Happy Frog® Potting Soil is amended with soil microbes that can help improve root efficiency and encourage nutrient uptake.26", "image": "/product_img/26.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }, { "id": 27, "title": "Ocean Forest Potting Soil", "price": 13.95, "discont_price": null, "description": "The ocean harbors so many nutrients that not only are good for the soul, but good for our plants! Woodie loves this powerhouse blend of premium earthworm castings, bat guano, and sea-going fish and crab meal, and you will too!", "image": "/product_img/27.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }, { "id": 28, "title": "Hoffman`s Horticultural Charcoal", "price": 12.95, "discont_price": null, "description": "In working to create the perfect soil medium for your potted plants, you may come across the use of charcoal in many planting experts` soil analyses. Hoffman`s Horticultural Charcoal is a extremely beneficial element to add to your soil mediums ensuring a plant is happy and healthy in its pot!", "image": "/product_img/28.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }, { "id": 29, "title": "Bonide Diatomaceous Earth", "price": 27.95, "discont_price": 27.05, "description": "A product that kills the bad insects but keeps the good one`s alive? Count me in! This all natural product is the ideal insect killer if your out to get those annoying pests that feed on your crops, without impacting your livestock or killing beneficial critters like earth worms!", "image": "/product_img/29.jpeg", "createdAt": "2022-10-02T14:43:29.000Z", "updatedAt": "2022-10-02T14:43:29.000Z", "categoryId": 4 }] }

export default function CategoriesPage() {
  const { category } = useParams();
  const [priceFrom, updatePriceFrom] = React.useState(0);
  const [priceTo, updatePriceTo] = React.useState();
  const [discont, updateDiscont] = React.useState(false);
  const [sortType, updateSortType] = React.useState('0');

  const onChange = (e) => {
    updatePriceFrom(e.target.value);
  };
  const onChangePriceTo = (e) => {
    updatePriceTo(e.target.value);
  }
  const onChangeDiscount = (e) => {
    updateDiscont(e.target.checked);
  }
  const onChangeSortedType = (e) => {
    console.log(e.target);
    updateSortType(e.target.value);
  }


  const filteredList = data.data.filter((item) =>
    item.price >= priceFrom &&
    (item.price <= priceTo || !priceTo) &&
    (!discont || item.discont_price)
  );

  const sortedList = filteredList.sort((a, b) => {
    // sortType == '0' ? 0 :
    // sortType == 
    // (a.price < b.price) ? 1 :
    //   (a.price > b.price) ? -1


    // console.log(sortType);
    if (sortType === '0') {
      // sort typy was not picked
      return 0;
    }

    // min -> max
    if(sortType === '1') {
 // a.price =1 b .b = 10
      if (a.price < b.price) {
        return 1;
      }

      if (a.price > b.price) {
        return -1;
      }

      return 0;
      // TODO сократить с пом ? :
    }

    // поправить 1 кортировку
    // написать 2 остальные 
    // сделать мах кратко
    // почистить
    // a > b
    return 1;

    // a < b
    // return -1

    // a = b
    // return 0;
  });
  return (
    <div>
      <h1 className={classes.h1}>{data.category.title}</h1>
      <div className={classes.filters}>
        <div className={classes.prices}>
          Price:
          <input className={classes.input_from} type='number' placeholder='from' min='0' onChange={onChange} />
          <input className={classes.input_to} type='number' placeholder='to' onChange={onChangePriceTo} />
        </div>
        <div className={classes.discounted_items}>
          Discounted items
          <input type='checkbox' className={classes.checkbox} onChange={onChangeDiscount} />
        </div>
        <div className={classes.sorted}>
          Sorted
          <select className={classes.input} type='text' placeholder='by default' onChange={onChangeSortedType}>
            <option value="0" selected>by default</option>
            <option value="1">price max to min</option>
            <option value="2">price min to max</option>
            {/* <option value="3">discont</option> */}
          </select>
        </div>

      </div>

      <div className={classes.container}>
        {sortedList.length ?
          filteredList.map((product) => <ProductCard data={product} key={product.id} />) : 'Not found any product. Change filter'}
      </div>
    </div>);
}

