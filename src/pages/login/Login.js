/* eslint-disable no-undef */
import {useState} from 'react';

import './Login.css';

const Login = ({ authFunc, userFunc }) => {
  const [name, setName] = useState('');
  const [require, setRequire] = useState('');

  const handleSubmit = (e) => {
    if (name === '') {
      setRequire('name is require !');
    } else {
      authFunc(true);
      userFunc(name);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    setRequire('');
  };

  return (
    <div className="login-form">
      <h1>Login Page</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSubmit}>login</button>
      </form>
      <p>{name}</p>
      <p style={{color: "#DC143C"}}>{require}</p>
    </div>
  );
};

export default Login;