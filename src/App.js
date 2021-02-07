import {useState} from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';

const App = () => {
  const [isAuth, setAuth] = useState(false);

  if (isAuth) {
    return (
      <Home setAuth={setAuth} />
    );
  } else {
    return (
      <Login setAuth={setAuth} />
    );
  }
};

export default App;
