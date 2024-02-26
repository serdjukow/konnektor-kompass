import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import ConnectorList from '../../components/ConnectorList/ConnectorList'

const KonnektorenPage = () => {
    const { connectors } = useContext(DataContext);
    const [randomConnector, setRandomConnector] = useState(null);

    const getRandomConnector = () => {
        const randomIndex =
            connectors.length && Math.floor(Math.random() * connectors.length);
        setRandomConnector(connectors[randomIndex]);
    };


    return (
        <section id="connectors"> {connectors && <ConnectorList connectors={connectors} />}</section>

    )
}

export default KonnektorenPage