import React, { useState, useContext } from "react";

import ConnectorCard from "../../components/ConnectorCard/ConnectorCard.jsx";
import DataContext from "../../context/DataContext.jsx";

const TestPage = () => {
    const { connectors } = useContext(DataContext);
    const [randomConnector, setRandomConnector] = useState(null);

    const getRandomConnector = () => {
        const randomIndex =
            connectors.length && Math.floor(Math.random() * connectors.length);
        setRandomConnector(connectors[randomIndex]);
    };

    const nextCard = () => {
        getRandomConnector();
    };

    const removeConnector = () => {
        let id = randomConnector && randomConnector.id;
        const updatedConnectors = connectors.filter(
            (connector) => connector.id !== id
        );

        const localStorageData = JSON.parse(localStorage.getItem("connectors"));
        const updatedLocalStorageData = localStorageData.filter(
            (connector) => connector.id !== id
        );
        localStorage.setItem("connectors", JSON.stringify(updatedLocalStorageData));
    };
    return (
        <section id="connector-details">
            {randomConnector && <ConnectorCard connector={randomConnector} />}
            <h2>TestPage</h2>
        </section>
    )
}

export default TestPage