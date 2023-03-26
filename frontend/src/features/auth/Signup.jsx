import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from './authSlice';
import './Login.css';

function Signup(props) {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Password Confirmation: ${passwordConfirm}`);
    if (password === passwordConfirm) {
      dispatch(signup({ email, password }))
    } else {
      console.log("password and confirmation must match")
    }
  };

  if (user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className='container'>
      <div className='form-card'>
        <form onSubmit={handleSubmit}>
          <div className='form-header'>
            Sign Up
          </div>
          <div className='form-body'>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Email'} />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'} />
            <br />
            <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder={'Password Confirmation'} />
            <br />
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;