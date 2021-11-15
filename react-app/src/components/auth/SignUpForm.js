import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { AiOutlineClose } from 'react-icons/ai'
import './SignUpForm.css'

const SignUpForm = ({setOpenSignUp}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="signupForm">
      <div className="signupFormInner">
        <div className="signup-top">
          <p>Sign up</p>
          <AiOutlineClose
            onClick={() => setOpenSignUp(false)}
            className="close-btn"
          />
        </div>
        <form onSubmit={onSignUp} className="signup-boxes">
          <div>
            {errors.map((error, ind) => (
              <div key={ind} className="login-err">
                {error}
              </div>
            ))}
          </div>
          <div className="signup-inputs">
            <div className="input-user-name">
              <label>User Name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div className="input-email">
              <label>Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div className="input-pass">
              <label>Password</label>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div className="input-repeat-password">
              <label>Repeat Password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
          </div>
          <div className="signup-bottom">
            <button className="reserve-btn" type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
