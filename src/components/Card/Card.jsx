import { projectColorScheme } from "../../utils/theme";
function createMarkup(example) {
    return { __html: example }
}

const Card = ({ item }) => {
    return (
        <div id={item.id} className={`card ${projectColorScheme[item.type]}`}>
            <div className="card__body">
                <p className="card__text">{item.usage ? item.usage.replace(/-/g, ' ') : item.type.replace(/-/g, ' ')}</p>
                <h2>{item.title}</h2>
                <p
                    className="card__exemple"
                    dangerouslySetInnerHTML={createMarkup(item.example)}
                ></p>
            </div>
        </div>
    )
}
export default Card