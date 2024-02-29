import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import DataContext from "../../context/DataContext.jsx";
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";
import { v4 as uuidv4 } from "uuid";
import data from '../../db/db.json'
import ButtonStartTest from '../../components/ButtonStartTest/ButtunStartTest.jsx'

const ResultPage = () => {
    const { width, height } = useWindowSize()
    const { connectors, setConnectors } = useContext(DataContext);
    const history = useNavigate()
    const restsrt = () => {
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
        history('/test')
    }

    const onClick = () => {
        history('/test')
    }
    return (
        <section id="result" className="result">
            <h2 className="result__title">Deine Ergebnisse</h2>
            <div className="result__container">
                <div className="result__table result-table">
                    <div className="result-table__row">
                        <div className="result-table__cell cell-header">Nr.</div>
                        <div className="result-table__cell cell-header">Konnektor</div>
                        <div className="result-table__cell cell-header">Antwort</div>
                        <div className="result-table__cell cell-header">Richtige Antwort</div>
                    </div>
                    {connectors.map((item, id) => (
                        <div key={item.id} className="result-table__row">
                            <div className="result-table__cell cell-header">{id + 1}</div>
                            <div className="result-table__cell ">{item.connector}</div>
                            <div className={`result-table__cell ${item.answer !== item.sentence_type ? 'wrong' : 'right'}`}>{item.answer}</div>
                            <div className="result-table__cell">{`${item.sentence_type} (${item.connector_type})`}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="result__buttons">
                <ButtonStartTest onClick={onClick}>Neuer Test</ButtonStartTest>
            </div>

            <Confetti
                width={width}
                height={height}
            />
        </section>
    )
}

export default ResultPage