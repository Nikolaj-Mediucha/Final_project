import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import Root from './Pages/Root/Root';
import ErorPage from './Pages/ErorPage/ErorPage';
import CategoriesListPage from './Pages/CategoriesListPage/CategoriesListPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import BasketPage from './Pages/BasketPage/BasketPage';
import { useLocalStorage } from './hooks/useLocalStorage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "catalog/:category",
        element: <CategoriesPage />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "catalog",
        element: <CategoriesListPage />,
      },
      {
        path: "basket",
        element: <BasketPage/>,
      },
      {
        path: "*",
        element: <ErorPage />,
      },
    ],
  },
]);



function App() {
  useLocalStorage();
  return (
    <div>
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
