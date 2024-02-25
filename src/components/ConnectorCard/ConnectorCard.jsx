function createMarkup(example) {
    return { __html: example };
}

const ConnectorCard = ({ connector }) => {
    return (
        <div id={connector.id} className="connector-card">
            <h2>{connector.connector}</h2>
            <div className="example-output">
                <span className="connector-type">{connector.sentence_type}</span>
                <p
                    className="connector-example"
                    dangerouslySetInnerHTML={createMarkup(connector.example)}
                ></p>
            </div>
            <div className="options">
                <button className="option">Hauptsatz</button>
                <button className="option">Nebensatz</button>
            </div>
        </div>
    );
}
export default ConnectorCard