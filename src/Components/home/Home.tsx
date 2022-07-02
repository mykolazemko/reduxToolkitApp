import { Link } from "react-router-dom";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <h1>Home</h1>
      <Link to={'/characters'}>Go to Characters</Link>
    </div>
  );
};

export default Home;
