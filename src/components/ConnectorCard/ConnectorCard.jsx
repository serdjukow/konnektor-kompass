function createMarkup(example) {
    return { __html: example };
}

const ConnectorCard = ({ connector }) => {
    return (
        <div id={connector.id} className={`connector-card ${connector.connector_type}`}>

            <div className="connector-card__body">
                <p className="connector-card__text ">{connector.sentence_type.replace(/-/g, ' ')}</p>
                <h2>{connector.connector}</h2>
                <p className="connector-card__text">{connector.connector_type}</p>
                <p
                    className="connector-card__exemple"
                    dangerouslySetInnerHTML={createMarkup(connector.example)}
                ></p>
                {
                    connector.comment && (
                        <div className="connector-card__comment">
                            <h5 className="connector-card__comment-title">{connector.comment.title}</h5>
                            {connector.comment.text.map((item, id) => (
                                <p key={id} className="connector-card__comment-text">{item}</p>
                            ))}
                        </div>
                    )
                }

            </div>
        </div>
    );
}
export default ConnectorCard