import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { authenticate, login } from '../../store/session';
import { MdStorage } from 'react-icons/md'
import { checkIfImageExists } from "../utils"
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../auth/SignUpForm';
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [openDropDown, setOpenDropDown] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)
  let imageValid;

  if (sessionUser) {
    imageValid = checkIfImageExists(sessionUser.profile_pic)
  }

  const handleDemoLogin = () => {
    dispatch(login("demo@aaa.io", "password"))
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
      <ul className="nav-links">
        <li>
          <NavLink
            className="inactive"
            to="/"
            exact={true}
            activeClassName="active"
          >
            <div
              className="tinybnb-logo"
              style={{
                backgroundImage: `url("data:image/png;base64,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")`
              }}
            ></div>
          </NavLink>
        </li>
        <div>
          <NavLink className="inactive" to="/" exact={true}>
            <h1 className="nav-bar-title">TinyBnB</h1>
          </NavLink>
        </div>
        <div className="nav-bar-right">
          {sessionUser && (
            <li>
              <NavLink
                className="inactive"
                to="/become-a-host"
                exact={true}
                activeClassName="active"
              >
                Become a Host
              </NavLink>
            </li>
          )}
          <li className="nav-login-signup">
            <div
              onClick={() => setOpenDropDown(!openDropDown)}
              className={
                openDropDown
                  ? "nav-profile-click open"
                  : "nav-profile-click closed"
              }
            >
              <MdStorage className="nav-pp-logo" />
              <div
                className="nav-profile-pic"
                style={{
                  backgroundImage: `url(${sessionUser && imageValid
                    ? sessionUser.profile_pic
                    : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                    } )`,
                }}
              ></div>
            </div>
            {openDropDown && (
              <div className="profile-drop-down">
                {!sessionUser ? (
                  <div className="dropdown-inside-loggedout">
                    <p onClick={handleLoginClick} className="login-p">
                      Login
                    </p>

                    <p onClick={handleSignUpClick} className="login-p">
                      Sign Up
                    </p>

                    <p onClick={handleDemoLogin} className="inactive">
                      Demo Login
                    </p>
                  </div>
                ) : (
                  <div className="dropdown-inside">
                    <div className="dropdown-content">
                      <NavLink
                        className="inactive"
                        to={`/users/${sessionUser.id}`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Profile
                      </NavLink>
                      <NavLink
                        className="inactive"
                        to={`/my-hosting`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Host
                      </NavLink>
                      <NavLink
                        className="inactive"
                        // to={`/users/${sessionUser.id}/bookings`}
                        to={`/my-reservations`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Trips
                      </NavLink>
                    </div>
                    <div
                      onClick={() => setOpenDropDown(false)}
                      className="logout-botton"
                    >
                      <LogoutButton />
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
        </div>
      </ul>
      {openLogin && <LoginForm setOpenLogin={setOpenLogin} />}
      {openSignUp && <SignUpForm setOpenSignUp={setOpenSignUp} />}
    </nav>
  );
}

export default NavBar;
