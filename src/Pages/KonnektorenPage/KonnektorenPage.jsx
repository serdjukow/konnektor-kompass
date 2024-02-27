import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import ConnectorList from '../../components/ConnectorList/ConnectorList'

const KonnektorenPage = () => {
    const { connectors } = useContext(DataContext);
    return (
        <section id="connectors"> {connectors && <ConnectorList connectors={connectors} />}</section>
    )
}

export default KonnektorenPage