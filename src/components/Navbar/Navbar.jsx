import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <ol className={n.ol}>
                <li className={n.li}><NavLink to="/profile">Профиль</NavLink></li>
                <li className={n.li}><NavLink to="/dialogs">Сообщения</NavLink></li>
                <li className={n.li}><NavLink to="/settings">Настройки</NavLink></li>
                <li className={n.li}><NavLink to="/exit">Выйти</NavLink></li>
            </ol>
        </nav>
    )
};

export default Navbar;