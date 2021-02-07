import {useState, useEffect} from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';
import firebase from './Firebase';

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setAuth(true);
        setLoading(false);
      } else {
        // User is signed out
        setAuth(false);
        setLoading(false);
      }
    });    
  }, []);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  }

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
