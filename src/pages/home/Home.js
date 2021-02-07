import './Home.css';
import firebase from '../../Firebase';

const Home = ({ setAuth }) => {

  const logout = (e) => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      setAuth(false);
    }).catch((error) => {
      // An error happened.
      alert(error.message)
    });
    
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn" type="button" onClick={logout}>logout</button>
    </div>
  );
};

export default Home;