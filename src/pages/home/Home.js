import './Home.css';

const Home = ({ setAuth }) => {

  const logout = (e) => {
    setAuth(false);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn" type="button" onClick={logout}>logout</button>
    </div>
  );
};

export default Home;