import React, { useState, useContext, useEffect, useRef } from "react";
import DataContext from "../../context/DataContext.jsx";
import ConnectorTestCard from "../../components/ConnectorTestCard/ConnectorTestCard.jsx";
import Progress from '../../components/Progress/Progress.jsx'
import 'react-circular-progressbar/dist/styles.css';
import ResultPage from '../../Pages/ResultPage/ResultPage.jsx'
import { v4 as uuidv4 } from "uuid";
import data from '../../db/db.json'

const TestStartPage = () => {
    const { connectors, setConnectors } = useContext(DataContext);
    const [randomConnector, setRandomConnector] = useState({});
    const [unriededConnectors, setUnriededConnectors] = useState(connectors);
    const buttonRef = useRef(null);

    const addRiededConnectors = () => {
        let unread = connectors?.filter(connector => connector?.read === false);
        setUnriededConnectors(unread)
    }

    const getRandomConnector = () => {
        const randomConnector = unriededConnectors[Math.floor(Math.random() * unriededConnectors.length)]
        setRandomConnector(randomConnector);
    };

    useEffect(() => {
        addRiededConnectors()
        getRandomConnector()
    }, [])

    const handleConnectorClick = (index, feld) => {
        const newConnectors = connectors.map(item => {
            if (item.id === index) {
                return {
                    ...item,
                    "read": true,
                    "answer": feld
                }
            }
            return item
        })
        setConnectors(newConnectors)
        getRandomConnector()
    };

    const testCardButtonClick = (e) => {
        const id = buttonRef.current.id;
        addRiededConnectors()
        handleConnectorClick(id, e.target.id);
    }

    useEffect(() => {
        const newDate = data.map((el) => {
            return {
                ...el,
                id: uuidv4(),
                read: false,
                learned: false,
                answer: '',
            };
        });
        sessionStorage.setItem("connectors", JSON.stringify(newDate));
        setConnectors(newDate)
    }, []);

    const getPerzent = (x, y) => {
        return x - y
    }
    console.log(getPerzent(connectors.length, unriededConnectors.length));
    console.log(connectors.length, unriededConnectors.length);

    return (
        <>
            {randomConnector ? (
                <section className="connector-test" >
                    <div className="connector-test__container">
                        <div className="connector-test__title">
                            <h2>Test</h2>
                        </div>                       
                        <Progress bgcolor="#6a1b9a" completed={connectors.length} currentValue={getPerzent(connectors.length, unriededConnectors.length)} />
                        <div className="connector-test__body">
                            <ConnectorTestCard connector={randomConnector} testCardButtonClick={testCardButtonClick} buttonRef={buttonRef} />
                        </div>
                    </div>
                </section>
            ) : (
                <ResultPage />
            )}
        </>

    )
}

export default TestStartPage



