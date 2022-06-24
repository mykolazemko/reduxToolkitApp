import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/characters'}>Go to Characters</Link>
    </div>
  );
};

export default Home;
