import React, {useState, useEffect} from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import CategoriesCard from '../../Components/CategoiesCard/CategoriesCard';
import classes from './CategoriesPage.module.css'
import ProductCard from '../../Components/ProductCard/ProductCard';


export default function CategoriesPage() {
  const { category } = useParams();
  const [priceFrom, updatePriceFrom] = React.useState(0);
  const [priceTo, updatePriceTo] = React.useState();
  const [discont, updateDiscont] = React.useState(false);
  const [sortType, updateSortType] = React.useState('0');
  const [data, updateData] = React.useState({});


  // const [state, setState] = React.useState({
  //   priceFrom: 0,
  //   priceTo: undefined,
  //   discont: false,
  //   sortType: '0',
  // });

  // const {priceFrom, priceTo, discont, sortType, data} = state;

  React.useEffect(() => {
    fetch(`http://localhost:3333/categories/${category}`)
      .then(response => response.json())
      .then(data => updateData(data));
  }, []);

  const onChange = (e) => {
    updatePriceFrom(e.target.value);

    // setState(newValue); 
    //setState({ ... });
    // setState((draft) => {
  // draft.priceFrom = e.target.value;
  // return draft;
    // });
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

  if (!data.data) {
    return 'loading';
  };

  const filteredList = data.data.filter((item) =>
    item.price >= priceFrom &&
    (item.price <= priceTo || !priceTo) &&
    (!discont || item.discont_price)
  );

  const sortedList = filteredList.sort((a, b) => {
    if (sortType === '0') {
      return 0;
    }
    if (sortType === '1') {
      if (a.price < b.price) {
        return 1;
      } else
        if (a.price > b.price) {
          return -1;
        }
      return 0;
    }
    if (sortType === '2') {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    }
    if (sortType === '3') {
      if (a.discont > b.discont) {
        return 1;
      }
      if (a.discont < b.discont) {
        return -1;
      }
      return 0;
    }
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
          <select className={classes.input} type='text' placeholder='by default' defaultValue='0' onChange={onChangeSortedType}>
            <option value="0" selected>by default</option>
            <option value="1">price max to min</option>
            <option value="2">price min to max</option>
            <option value="3">max discont</option>
          </select>
        </div>
      </div>

      <div className={classes.container}>
        {sortedList.length ?
          filteredList.map((product) => <ProductCard data={product} key={product.id} />) : <h3 className={classes.message}>'Not found any product. Change filter'</h3>}
      </div>
    </div>);
}

// export default function CategoriesPage() {
//   const { category } = useParams();
//   const [data, updateData] = React.useState({});

//   React.useEffect(() => {
//     fetch(`http://localhost:3333/categories/${category}`)
//       .then(response => response.json())
//       .then(updateData);
//   }, []);

//   const handleChange = (field: string) => (e) => {
//     updateData((draft) => {
  //      draft[field] = e.target.value; // draft.priceFrom = 
//        return draft;
//     });
//   };

//   if (!data.data) return 'loading';

//   const { priceFrom, priceTo, discont, sortType } = data;

//   return (

//   const { title, data: productList } = data.category;
  

//   const filteredList = productList.filter(item =>
//     item.price >= priceFrom &&
//     (item.price <= priceTo || !priceTo) &&
//     (!discont || item.discont_price)
//   );

//   const sortedList = filteredList.sort((a, b) => {
//     switch (sortType) {
//       case '1':
//         return a.price < b.price ? 1 : -1;
//       case '2':
//         return a.price > b.price ? 1 : -1;
//       case '3':
//         return a.discont > b.discont ? 1 : -1;
//       default:
//         return 0;
//     }
//   });
  

//   return (
//     <div>
//       <h1 className={classes.h1}>{title}</h1>
//       <div className={classes.filters}>
//         <div className={classes.prices}>
//           Price:
//           <input className={classes.input_from} type='number' placeholder='from' min='0' onChange={handleChange('priceFrom')} />
//           <input className={classes.input_to} type='number' placeholder='to' onChange={handleChange(updatePriceTo)} />
//         </div>
//         <div className={classes.discounted_items}>
//           Discounted items
//           <input type='checkbox' className={classes.checkbox} onChange={handleChange(updateDiscont)} />
//         </div>
//         <div className={classes.sorted}>
//           Sorted
//           <select className={classes.input} type='text' placeholder='by default' defaultValue='0' onChange={handleChange(updateSortType)}>
//             <option value="0">by default</option>
//             <option value="1">price max to min</option>
//             <option value="2">price min to max</option>
//             <option value="3">max discount</option>
//           </select>
//         </div>
//       </div>

//       <div className={classes.container}>
//         {sortedList.length ?
//           sortedList.map(product => <ProductCard data={product} key={product.id} />) :
//           <h3 className={classes.message}>'Not found any product. Change filter'</h3>
//         }
//       </div>
//     </div>
//   );
// }



