import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import ConnectorList from '../../components/ConnectorList/ConnectorList'
import Loader from '../../Layouts/Loader/Loader'

const KonnektorenPage = () => {
    const { connectors } = useContext(DataContext);

    return (
        <section id="connectors">
            <div className="connectors__title">
                <h2>Wörter, die man als Satzverbindung verwenden kann</h2>
            </div>
            {connectors ? <ConnectorList connectors={connectors} /> : <Loader />}
        </section>
    )
}

export default KonnektorenPage