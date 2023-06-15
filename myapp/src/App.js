import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import Root from './Pages/Root/Root';
import ErorPage from './Pages/ErorPage/ErorPage';
import CategoriesListPage from './Pages/CategoriesListPage/CategoriesListPage';
import ProductPage from './Pages/ProductPage/ProductPage';

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
        element: <div>Basket</div>,
      },
      {
        path: "*",
        element: <ErorPage />,
      },
    ],
  },
]);



function App() {
  return (
    <div>
     
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
