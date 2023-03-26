import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from './authSlice';
import './Login.css';

function Login(props) {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    dispatch(login({ email, password }))
  };

  if (user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className='container'>
      <div className='form-card'>
        <form onSubmit={handleSubmit}>
          <div className='form-header'>
            Log In
          </div>
          <div className='form-body'>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Email'} />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'} />
            <br />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;