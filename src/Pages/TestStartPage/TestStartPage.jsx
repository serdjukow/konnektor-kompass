import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import DataContext from "../../context/DataContext.jsx";
import ConnectorTestCard from "../../components/ConnectorTestCard/ConnectorTestCard.jsx";
import Progress from '../../components/Progress/Progress.jsx'
import 'react-circular-progressbar/dist/styles.css';

const TestStartPage = () => {
    const { connectors } = useContext(DataContext);
    const [connectorsData, setConnectorsData] = useState(connectors);
    const [randomConnector, setRandomConnector] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [riededConnectors, setRiededConnectors] = useState(0);


    const addRiededConnectors = () => {
        let readConnectors = connectorsData.filter(connector => connector.read === true);
        setRiededConnectors(readConnectors.length)
    }

    const getRandomConnector = () => {
        const randomConnector =
            connectorsData.length && connectorsData[Math.floor(Math.random() * connectors.length)];
        setRandomConnector(randomConnector);
    };

    console.log(randomConnector)
    const removeConnector = () => {
        let id = randomConnector && randomConnector.id;
        const updatedConnectors = connectorsData.filter(
            (connector) => connector.id !== id
        );

        const localStorageData = JSON.parse(localStorage.getItem("connectors"));
        const updatedLocalStorageData = localStorageData.filter(
            (connector) => connector.id !== id
        );
        localStorage.setItem("connectors", JSON.stringify(updatedLocalStorageData));
    };
    const history = useNavigate()
    const goBack = () => {
        history(-1)
    }
    const onClick = event => {
        history('/test/start')

    }

    useEffect(() => {
        getRandomConnector()
        addRiededConnectors()
    }, [])

    useEffect(() => {
        //addRiededConnectors()
    }, [connectorsData])

    const handleConnectorClick = (index) => {
        const nextShapes = connectorsData.filter(connector => connector.id !== index); 
        setConnectorsData(nextShapes)
    };

    const testCardButtonClick = (e) => {
        handleConnectorClick(e.currentTarget.id);
        getRandomConnector()
        //addRiededConnectors()
    }
   

    return (
        <section className="connector-test">
            <div className="connector-test__container">
                <div className="connector-test__title">
                    <h2>Test</h2>
                </div>
                <Progress bgcolor="#6a1b9a" completed={connectors.length} currentValue={connectors.length - connectorsData.length} />
                <div className="connector-test__body">
                    {randomConnector && <ConnectorTestCard connector={randomConnector} testCardButtonClick={testCardButtonClick} />}
                </div>
            </div>
        </section>
    )
}

export default TestStartPage