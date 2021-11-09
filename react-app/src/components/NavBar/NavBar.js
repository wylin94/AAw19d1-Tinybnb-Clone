import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { authenticate, login } from '../../store/session';
import { MdStorage } from 'react-icons/md'
import { checkIfImageExists } from "../multipurpose"
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
      <ul>
        <li>
          <NavLink
            to="/"
            exact={true}
          >
            <div
              style={{
                backgroundImage: `url("https://m.media-amazon.com/images/I/41io9KLyNaL._AC_SX466_.jpg")`
              }}
            ></div>
          </NavLink>
        </li>
        <div>
          <NavLink to="/" exact={true}>
            <h1>TinyBnB</h1>
          </NavLink>
        </div>
        <div>
          {sessionUser && (
            <li>
              <NavLink
                to="/become-a-host"
                exact={true}
              >
                Become a Host
              </NavLink>
            </li>
          )}
          <li>
            <div onClick={() => setOpenDropDown(!openDropDown)}>
              <MdStorage />
              <div
                style={{
                  backgroundImage: `url(${
                    sessionUser && imageValid
                      ? sessionUser.profile_pic
                      : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                  } )`,
                }}
              ></div>
            </div>
            {openDropDown && (
              <div>
                {!sessionUser ? (
                  <div>
                    <p onClick={handleLoginClick}>
                      Login
                    </p>

                    <p onClick={handleSignUpClick}>
                      Sign Up
                    </p>

                    <p onClick={handleDemoLogin}>
                      Demo Login
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <NavLink
                        to={`/users/${sessionUser.id}`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Profile
                      </NavLink>
                      <NavLink
                        to={`/users/${sessionUser.id}/bookings`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Trips
                      </NavLink>
                    </div>
                    <div onClick={() => setOpenDropDown(false)}>
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
