import { Link } from 'react-router-dom';
import css from '../styles/components/header.module.css';

function HeaderComponent() {
    const location: string = "home";

    return (
        <div className={css.header}>
            <div className={css.logo}>
                <img src="/images/gato.svg" alt="aaa" />
            </div>
            <div className={css.menu}>
                <ul className={css.menuList}>
                    <li className={location === "about" ? css.mark : ""}>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li className={location === "home" ? css.mark : ""}>
                        <Link to="/">Início</Link>
                    </li>
                    <li className={location === "project" ? css.mark : ""}>
                        <Link to="/project">Projetos</Link>
                    </li>
                </ul>
            </div>
            <div className={css.logo}></div>
        </div>
    )
}

export default HeaderComponent;