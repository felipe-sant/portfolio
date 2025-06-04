import ProjectFavoriteProps from "../types/props/ProjectFavorites.props";
import css from "../styles/components/projectFavorite.module.css"
import { Link } from "react-router-dom";

function ProjectFavoriteComponent(props: { project: ProjectFavoriteProps}) {
    const { name, description, img, link } = props.project
    return (
        <div className={css.content}>
            <div className={css.left}>
                <img src={img} alt="project" />
            </div>
            <div className={css.right}>
                <div className={css.title}>
                    <h2>{name}</h2>
                    <Link to={link} className={css.link + " link"}>Ver projeto completo</Link>
                </div>
                <div className={css.text}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectFavoriteComponent