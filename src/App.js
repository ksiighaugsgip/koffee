import logo from './logo.png';
import './App.css';

import Main from './Main.js'
import Cart from './Cart.js'
import Kofa from './Kofa.js'

import cart from './cart.svg'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import { CartContextProvider } from './CartContext.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/kofa",
        element: <Kofa />,
      },
    ]
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

function Root() {
  return (
    <>
      <header className="header">
        <div className='logo'>
          <Link to="/">
            <img src={logo} className='logoimg' alt="logo"/>
          </Link>
        </div>
        <div className="button-container">
          <Link to="/cart">
            <img src={cart} className='cartbtn' alt="cart"/>
          </Link>
        </div>
      </header>
      <Outlet/>
      <footer className='footer'>
      <Link to="/">
        <img src={logo} className='logoimg' alt="logo"/>
      </Link>
      </footer>
    </>
  );
}



export default App;
