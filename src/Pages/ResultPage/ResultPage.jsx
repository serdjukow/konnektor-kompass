import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";
import ButtonStartTest from '../../components/ButtonStartTest/ButtunStartTest.jsx'

const ResultPage = ({ currentConnectors }) => {
    const { width, height } = useWindowSize()
    const [allQuestions, setAllQuestions] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongtAnswers, setWrongAnswers] = useState(0)

    useEffect(() => {
        setAllQuestions(currentConnectors.length || 0)
        setCorrectAnswers(currentConnectors.filter(item => item.sentence_type === item.answer).length)
        setWrongAnswers(currentConnectors.filter(item => item.sentence_type !== item.answer).length)
    }, [])

    const history = useNavigate()

    const onClick = () => {
        history('/test')
    }

    if (!currentConnectors.length) {
        history('/test')
    }

    return (
        <section id="result" className="result">
            <h2 className="result__title">Deine Ergebnisse</h2>
            <div className="result__container">
                <div className="result__panel">
                    <div className="result__panel-item panel-item item-all">
                        <span className="panel-item__comment">Gesamt</span>
                        <span className="panel-item__value">{allQuestions}</span>
                    </div>
                    <div className="result__panel-item panel-item item-right">
                        <span className="panel-item__comment">Richtig</span>
                        <span className="panel-item__value">{correctAnswers}</span>
                    </div>
                    <div className="result__panel-item panel-item item-wrong">
                        <span className="panel-item__comment">Falsch</span>
                        <span className="panel-item__value">{wrongtAnswers}</span>
                    </div>
                </div>
                <div className="result__table result-table">
                    <div className="result-table__row">
                        <div className="result-table__cell cell-header">Nr.</div>
                        <div className="result-table__cell cell-header">Konnektor</div>
                        <div className="result-table__cell cell-header">Antwort</div>
                        <div className="result-table__cell cell-header">Richtige Antwort</div>
                    </div>
                    {currentConnectors.map((item, id) => (
                        <div key={item.id} className="result-table__row">
                            <div className="result-table__cell cell-header">{id + 1}</div>
                            <div className="result-table__cell">{item.connector}</div>
                            <div className={`result-table__cell cell-answer ${item.answer !== item.sentence_type ? 'wrong' : 'right'}`}>{item.answer.replace(/-/g, ' ')}</div>
                            <div className="result-table__cell cell-answer">{`${item.sentence_type.replace(/-/g, ' ')} (${item.connector_type})`}</div>
                        </div>
                    ))}
                </div>
                <div className="result__buttons">
                    <ButtonStartTest onClick={onClick}>Neuer Test</ButtonStartTest>
                </div>
            </div>            
            <Confetti
                width={width}
                height={height}
            />
        </section>
    )
}

export default ResultPage