import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

const Navbar = () => {

const {cart} = useContext (Context);

const totalItems = cart.reduce ((acc, item ) => acc + item.quanty, 0 );

  return (
    <div className='nav-container'>
        <nav className='container'>
          <Link to= '/'>
            <h1 className='navbar-logo'>Shop</h1>
            </Link>

            <Link to='/cart'>
            <h2 className='navbar-cart'>
              🛒 {totalItems > 0 && <span className='cart-count'>{totalItems}
                </span>}
              </h2>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar