import {useState} from 'react';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState('');

  if (isAuth) {
    return <Home authFunc={setAuth} user={user} />;
  } else {
    return <Login authFunc={setAuth} userFunc={setUser} />;
  }
};

export default App;
