function createMarkup(example) {
    return { __html: example };
}

const ConnectorCard = ({ connector }) => {
    return (
        <div id={connector.id} className={`connector-card ${connector.connector_type}`}>

            <div className="connector-card__body">
                <p className="connector-card__text ">{connector.sentence_type}</p>
                <h2>{connector.connector}</h2>
                <p className="connector-card__text">{connector.connector_type}</p>
                <p
                    className="connector-card__exemple"
                    dangerouslySetInnerHTML={createMarkup(connector.example)}
                ></p>
            </div>
        </div>
    );
}
export default ConnectorCard