import React from 'react';
import { Link } from 'react-router-dom';
import style from "../assets/css/Navbar.module.css"
const Navbar = ({signOut}) => {
    return (
        <div>
            <div className={style.container}>
                <h1>Foochat</h1>
                <Link to="/" onClick={signOut}>Log Out</Link>
            </div>
        </div>
    );
};

export default Navbar;