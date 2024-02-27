import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import DataContext from "../../context/DataContext.jsx";
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";

const ResultPage = () => {
    const { width, height } = useWindowSize()
    const { connectors } = useContext(DataContext);
    const history = useNavigate()
    const goBack = () => {
        history(-1)
    }

    return (
        <section id="result">
            <h2>result</h2>
            <div className="info-panel">
                <span className="connectors-value">{connectors.length || 0}</span>
                <span className="answer-wrong">0</span>
                <span className="answer-right">0</span>
            </div>
            <div className="options">
                <button
                    onClick={goBack}
                    className="option"
                >
                    Back
                </button>
            </div>
            <Confetti
                width={width}
                height={height}
            />
        </section>
    )
}

export default ResultPage