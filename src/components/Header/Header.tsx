import React, { useState } from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    const [character, setCharacter] = useState([]);
    return(
        <div className={style.header}>
            {/* <Link style={{ textDecoration: 'none' }} to="/"> */}
                <span className={style.header__logo}>
                    {/* <h3>Characters</h3> */}
                    <Link to={'/'}>Home</Link>
                </span>
                <span className={style.header__logo}>
                <Link to={'/characters'}>Characters</Link>
                </span>
            {/* </Link> */}
            <input placeholder='Enter Character Name'></input>
            <button>Search</button>
        </div>
    )
}

export default Header
