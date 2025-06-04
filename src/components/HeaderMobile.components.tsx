import { Link } from 'react-router-dom';
import css from "../styles/components/headerMobile.module.css";
import gato from "../assets/gato.svg";

function HeaderMobileComponent(props: { location: string }) {
    return <>
        <header className={css.header}>
            <div className={css.line} />
            <div className={css.logo}>
                <img src={gato} alt="Logo" />
            </div>
            <nav className={css.menu}>
                <ul className={css.menuList}>
                    <li className={props.location === "about" ? css.mark : ""}>
                        <Link to="/about" className={css.link + " link"}>SOBRE</Link>
                        <div className={css.selectedBox} />
                    </li>
                    <li className={props.location === "home" ? css.mark : ""}>
                        <Link to="/" className={css.link + " link"}>INÍCIO</Link>
                        <div className={css.selectedBox} />
                    </li>
                    <li className={props.location === "project" ? css.mark : ""}>
                        <Link to="/project" className={css.link + " link"}>PROJETOS</Link>
                        <div className={css.selectedBox} />
                    </li>
                </ul>
            </nav>
        </header>
    </>
}

export default HeaderMobileComponent;