function createMarkup(example) {
    return { __html: example };
}

const ConnectorCard = ({ connector }) => {
    return (
        <div id={connector.id} className="connector-card">
            <h2>{connector.connector}</h2>
            <div className="example-output">
                <p className="connector-type">{connector.sentence_type}</p>
                <personalbar className="connector-type">{connector.connector_type}</personalbar>
                <p
                    className="connector-example"
                    dangerouslySetInnerHTML={createMarkup(connector.example)}
                ></p>
            </div>
        </div>
    );
}
export default ConnectorCard