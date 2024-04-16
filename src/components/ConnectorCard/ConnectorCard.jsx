function createMarkup(example) {
    return { __html: example };
}

const colors = {
    "subjunktionen": "blue",
    "konjunktionen": "yellow",
    "konjunktionaladverbien": "green",
    "infinitivgruppe": "violet",
    "besonderer-position": "gray"
}

const ConnectorCard = ({ item }) => {
    return (
        <div id={item.id} className={`card ${colors[item.sentence_type]}`}>

            <div className="card__body">
                <p className="card__text ">{item.sentence_type.replace(/-/g, ' ')}</p>
                <h2>{item.connector}</h2>
                <p className="card__text">{item.connector_type}</p>
                <p
                    className="card__exemple"
                    dangerouslySetInnerHTML={createMarkup(item.example)}
                ></p>
                {
                    item.comment && (
                        <div className="card__comment">
                            <h5 className="card__comment-title">{item.comment.title}</h5>
                            {item.comment.text.map((item, id) => (
                                <p key={id} className="card__comment-text">{item}</p>
                            ))}
                        </div>
                    )
                }

            </div>
        </div>
    );
}
export default ConnectorCard