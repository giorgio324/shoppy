import Home from './pages/Home';
import Cart from './pages/Cart';
import MainLayout from './layout/MainLayout';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { productLoader, productsData } from './api/Api';
import Product from './pages/Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Error from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
      <ToastContainer
        theme='dark'
        closeOnClick
        autoClose={1500}
        position='top-left'
      />
    </>
  );
}

export default App;
