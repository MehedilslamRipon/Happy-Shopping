// dependencies
import React, { useContext } from 'react';
import logo from './../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import {UserContext} from './../../App';

const Header = () => {
   let [loggedInUser, setLoggedInUser] = useContext(UserContext);

   return (
      <div className="header">
         <img src={logo} alt="logo" />
         <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Order</Link>
            <button
               onClick={() => setLoggedInUser({})}
               style={{
                  padding: '10px',
                  background: '#F4BD43',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  color: 'rgb(248 248 248)',
               }}
            >
               Sign Out
            </button>
         </nav>
      </div>
   );
};

export default Header;
