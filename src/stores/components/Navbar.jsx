import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CarContext';

const Navbar = ({user,onLogout} ) => {
  const { cartItems } = useCart(); // Destructuring to get cart items

  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.." />
        </div>
        {user ? (
          <>
            <div className="user-detail" onClick={onLogout}>Log Out</div>
          </>
        ):(
          <Link to='/login'>
          <div className="user-detail">Log In</div>
          </Link>
        )}
        
        <Link to='/cart'>
          <div className="cart">
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      <div className="subMenu">
        <ul>
          <Link to='/mobiles'>
            <li>Mobiles</li>
          </Link>
          <Link to='/computers'>
            <li>Computers</li>
          </Link>
          <Link to='/watches'>
            <li>Watches</li>
          </Link>
          <Link to='/men'>
            <li>Men Wear</li>
          </Link>
          <Link to='/women'>
            <li>Women Wear</li>
          </Link>
          <Link to='/furniture'>
            <li>Furniture</li>
          </Link>
          <Link to='/ac'>
            <li>AC</li>
          </Link>
          <Link to='/books'>
            <li>Books</li>
          </Link>
          <Link to='/kitchen'>
            <li>Kitchen</li>
          </Link>
          <Link to='/speakers'>
            <li>Speakers</li>
          </Link>
          <Link to='/fridges'>
            <li>Fridge</li>
          </Link>
          <Link to='/tv'>
            <li>TV's</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
