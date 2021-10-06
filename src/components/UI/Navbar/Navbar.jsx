import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = event => {
    event.preventDefault()
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <button className="btn btn-sm btn-dark" onClick={logout}>Выйти</button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;