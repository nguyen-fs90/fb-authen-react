import './Home.css';

const Home = ({ authFunc, user }) => {
  const handleClick = (event) => {
    authFunc(false);
  }
  return (
    <div>
      <h1>Home Page</h1>
      <h2>hello {user}</h2>
      <button type="button" onClick={handleClick}>logout</button>
    </div>
  );
};

export default Home;