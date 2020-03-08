import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav>
            <div  className={n.nav}>
                <ol className={n.ol}>
                    <li className={n.li}><NavLink to="/profile">Профиль</NavLink></li>
                    <li className={n.li}><NavLink to="/dialogs">Сообщения</NavLink></li>
                    <li className={n.li}><NavLink to="/settings">Настройки</NavLink></li>
                    <li className={n.li}><NavLink to="/exit">Выйти</NavLink></li>
                </ol>
            </div>
            <Friends state={props.state}/>
        </nav>
    )
};

export default Navbar;