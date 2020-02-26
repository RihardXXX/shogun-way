import React from "react";
import n from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <ol className={n.ol}>
                <li className={n.li}><a href="">Профиль</a></li>
                <li className={n.li}><a href="">Сообщения</a></li>
                <li className={n.li}><a href="">Настройки</a></li>
                <li className={n.li}><a href="">Выйти</a></li>
            </ol>
        </nav>
    )
};

export default Navbar;