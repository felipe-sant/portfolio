import InformationProps from "../types/props/Information.props";
import css from "../styles/components/information.module.css"

function InformationComponent(props: { information: InformationProps }) {
    const { img, name, description, startTime, endTime, type } = props.information

    return (
        <div className={css.content}>
            <div className={css.title}>
                <div className={css.left}>
                    <h3>{name}</h3>
                    <h4>{type}</h4>
                </div>
                <div className={css.right}>
                    <img src={img} alt="location" />
                    <div>{startTime} - {endTime}</div>
                </div>
            </div>
            <div className={css.text}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default InformationComponent