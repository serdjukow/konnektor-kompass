import React, { useState, useContext, useEffect, useRef } from "react";
import DataContext from "../../context/DataContext.jsx";
import ConnectorTestCard from "../../components/ConnectorTestCard/ConnectorTestCard.jsx";
import Progress from '../../components/Progress/Progress.jsx'
import 'react-circular-progressbar/dist/styles.css';
import ResultPage from '../../Pages/ResultPage/ResultPage.jsx'

const TestStartPage = () => {
    const { currentConnectors, setCurrentConnectors } = useContext(DataContext);  
    const [unreadConnectors,] = useState(currentConnectors);
    const [readConnector, setReadConnector] = useState([]);
    const [randomConnector, setRandomConnector] = useState({});
    const buttonRef = useRef(null);

    useEffect(() => {
        setRandomConnector(unreadConnectors[0])
    }, [])

    const handleConnectorClick = (index, feld) => {
        const newConnectors = currentConnectors.map(item => {
            if (item.id === index) {
                const newItem = {
                    ...item,
                    "read": true,
                    "answer": feld
                }
                setReadConnector([...readConnector, newItem])
                return newItem
            }
            return item
        })
        setCurrentConnectors(newConnectors)
        unreadConnectors?.splice(0, 1)
    };

    const testCardButtonClick = (e) => {
        if (e.target.classList.contains('connector-test-card__button')) {
            handleConnectorClick(e.currentTarget.id, e.target.id);
            setRandomConnector(unreadConnectors[0])
        }
    }

    return (
        <>
            {currentConnectors.length && randomConnector  ? (
                <section className="connector-test" >
                    <div className="connector-test__container">
                        <div className="connector-test__title">
                            <h2>Test</h2>
                        </div>
                        <Progress bgcolor="#6a1b9a" completed={currentConnectors.length} currentValue={readConnector.length} />
                        <div className="connector-test__body">
                            <ConnectorTestCard connector={randomConnector} testCardButtonClick={testCardButtonClick} buttonRef={buttonRef} />
                        </div>
                    </div>
                </section>
            ) : (
                <ResultPage currentConnectors={currentConnectors} />
            )}
        </>

    )
}

export default TestStartPage



