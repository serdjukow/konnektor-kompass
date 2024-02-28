import './connector-test-card.scss'

const ConnectorTestCard = ({ connector, testCardButtonClick }) => {
    return (
        <div id={connector.id} onClick={testCardButtonClick} className="connector-test-card">
            <div className="connector-test-card__title">
                <h2>{connector.connector}</h2>
            </div>
            <div className="connector-test-card__buttons">
                <button id='nebensatz' className="connector-test-card__button nebensatz">
                    Nebensatz
                </button>
                <button id='hauptsatz-position-0'  className="connector-test-card__button hauptsatz-position-0">
                    Hauptsatz (Position 0)
                </button>
                <button id='hauptsatz-position-1'  className="connector-test-card__button hauptsatz-position-1">
                    Hauptsatz (Position 1)
                </button>
                <button id='infinitivgruppe' className="connector-test-card__button infinitivgruppe">
                    Infinitivgruppe
                </button>
            </div>
        </div>
    );
}
export default ConnectorTestCard