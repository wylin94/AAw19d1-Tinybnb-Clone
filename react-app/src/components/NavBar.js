import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { authenticate, login } from '../store/session';
// import { MdStorage } from 'react-icon/md'

const NavBar = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [openDropDown, setOpenDropDown] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)

  const handleDemoLogin = () => {
    dispatch(login("demo@aa.io", "password"))
    setOpenDropDown(false)
  }
  const handleLoginClick = () => {
    setOpenLogin(true)
    setOpenDropDown(false);
  }
  const handleSignUpClick = () => {
    setOpenSignUp(true)
    setOpenDropDown(false)
  }
  return (
    <nav>
      <div className="menuIcon">
        <i class="fas fa-bars"></i>
      </div>
      <div className="homeIcon">
        <i class="fab fa-airbnb"></i>
      </div>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
