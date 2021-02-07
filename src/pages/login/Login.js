/* eslint-disable no-undef */
import {useState} from 'react';
import './Login.css';

const Login = ({setAuth}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [require, setRequire] = useState('');

  const onSubmit = (e) => {
    if (username === '' || password === '') {
      setRequire('username, password is require !');
    } else {
      setAuth(true);
    }
  };

  const onChangeName = (e) => {
    setUsername(e.target.value);
    setRequire('');
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setRequire('');
  }

  return (
    <div className="login-form">
      <h3>Welcome !</h3>
      <form>
        <label className="form-label">
          User Name:
          <input className="form-input" type="text" value={username} onChange={onChangeName} />
        </label>
        <label className="form-label">
          Password:
          <input className="form-input" type="password" value={password} onChange={onChangePassword} />
        </label>
        <p className="require-mess">{require}</p>
        <br/>
        <button className="btn" type="button" onClick={onSubmit}>login</button>
      </form>
    </div>
  );
};

export default Login;