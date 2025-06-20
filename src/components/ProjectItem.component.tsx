import ProjectItemProps from "../types/props/ProjectItem.props"
import css from "../styles/components/projectItem.module.css"
import TagComponent from "./Tag.component"
import github from "../assets/github.svg"
import global from "../assets/global.svg"
import { redirectToUrl } from "../utils/redirectUrl"
import formatDate from "../utils/formatDate"

function ProjectItemComponent(props: { project: ProjectItemProps }) {
    const { img, description, linkGit, name, tagLanguage, tagScope, tags, linkProj, lastUpdate } = props.project

    return (
        <div className={css.content}>
            <div className={css.left}>
                <img src={img} alt="project" />
                <div className={css.tags}>
                    <div>{tagLanguage.map((tag, index) => <TagComponent tag={tag} key={index} />)}</div>
                    {tags.length > 0 && <div className={css.line} />}
                    <div>{tags.map((tag, index) => <TagComponent tag={tag} key={index} />)}</div>
                </div>
            </div>
            <div className={css.right}>
                <div className={css.up}>
                    <div className={css.title}>
                        <h2>{name}</h2>
                        <TagComponent tag={tagScope} />
                    </div>
                    <div className={css.date}>
                        <abbr title={lastUpdate.toDateString()}>{formatDate(lastUpdate)}</abbr>
                    </div>
                </div>
                <div className={css.text}>
                    <p>{description}</p>
                </div>
                <div className={css.buttons}>
                    {linkProj &&
                        <button className={css.proj} onClick={() => redirectToUrl(linkProj)}>
                            <img src={global} alt="external" />
                            <span>Ver projeto</span>
                        </button>
                    }
                    <button className={css.github} onClick={() => redirectToUrl(linkGit)}>
                        <img src={github} alt="github" />
                        <span>Ver código</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItemComponent