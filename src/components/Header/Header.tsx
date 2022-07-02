import { useState } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchCharacterByName } from "../../Redux/CharacterSlice";
import { SearchModule } from "../SearchModule/SearchModule";

const Header = () => {
  const [character, setCharacter] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    dispatch(searchCharacterByName(character))
    e.preventDefault();
  }

  return (
    <div className={style.header}>
      {/* <Link style={{ textDecoration: 'none' }} to="/"> */}
      <span className={style.header__menuItem}>
        {/* <h3>Characters</h3> */}
        <Link to={"/"}>Home</Link>
      </span>
      <span className={style.header__menuItem}>
        <Link to={"/characters"}>Characters</Link>
      </span>
      <span className={style.header__menuItem}>
        <Link to={""}>Locations</Link>
      </span>
      <span className={style.header__menuItem}>
        <Link to={""}>Episodes</Link>
      </span>
      <span className={`${style.header__searchModule} ${style.header__menuItem}`}>
        <SearchModule />
      </span>
      
    </div>
  );
};

export default Header;
