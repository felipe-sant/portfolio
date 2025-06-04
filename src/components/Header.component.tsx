import { Link } from 'react-router-dom';
import css from '../styles/components/header.module.css';
import gato from "../assets/gato.svg";

function HeaderComponent(props: { location: string }) {
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <img src={gato} alt="aaa" />
            </div>
            <div className={css.menu}>
                <ul className={css.menuList}>
                    <li className={props.location === "about" ? css.mark : ""}>
                        <Link to="/about" className="link">Sobre</Link>
                        <div className={css.selectedLine} />
                    </li>
                    <li className={props.location === "home" ? css.mark : ""}>
                        <Link to="/" className="link">Início</Link>
                        <div className={css.selectedLine} />
                    </li>
                    <li className={props.location === "project" ? css.mark : ""}>
                        <Link to="/project" className="link">Projetos</Link>
                        <div className={css.selectedLine} />
                    </li>
                </ul>
            </div>
            <div className={css.logo}></div>
        </div>
    )
}

export default HeaderComponent;