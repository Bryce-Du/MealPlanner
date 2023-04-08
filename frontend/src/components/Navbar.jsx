import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(props) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth.user ?? {})
  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <header>
      <nav>
        <Link className='navLink' to="/">
          <h1 style={{ paddingInline: 16 }}>
            MealPlanner
          </h1>
        </Link>
        {user && (
          <div className='actions'>
            <Link className='navLink' to={`user/${user}`} style={{ paddingInline: 16 }}>View Profile</Link>
            <Link className='navLink' to="/" onClick={handleClick}>Logout</Link>
          </div>
        )}
        {!user && (
          <div className='actions'>
            <Link className='navLink' style={{ paddingInline: 16 }} to="/login">Login</Link>
            <Link className='navLink' to="/signup">Signup</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;