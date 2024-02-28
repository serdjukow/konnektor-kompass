import React, { useEffect, useContext } from "react";
import DataContext from "../../context/DataContext";
import ConnectorList from '../../components/ConnectorList/ConnectorList'

const KonnektorenPage = () => {
    const { connectors, fetchConnectors } = useContext(DataContext);

    useEffect(() => {
        !connectors.length && fetchConnectors();
    });
    return (
        <section id="connectors">
            <div className="connectors__title">
                <h2>Wörter, die man als Satzverbindung verwenden kann</h2>
            </div>
            {connectors && <ConnectorList connectors={connectors} />}
        </section>
    )
}

export default KonnektorenPage