import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import ButtonStartTest from '../../../components/ButtonStartTest/ButtunStartTest.jsx'
import CustomSelect from '../../../components/CustomSelect/CustomSelect.jsx';
import ConnectorsContext from '../../../context/DataContext'

import { KONNEKTOREN_TEST_START_ROUTE } from '../../../utils/consts'

const TestPage = () => {
    const { connectors, activeItem, setActiveItem, updateCurrentConnectors } = useContext(ConnectorsContext);
    const history = useNavigate()
    const onClick = () => {
        history(KONNEKTOREN_TEST_START_ROUTE)
    }

    const [options,] = useState([
        {
            label: "20 Fragen",
            value: "20",
        },
        {
            label: "30 Fragen",
            value: "30",
        },
        {
            label: "40 Fragen",
            value: "40",
        },
        {
            label: "50 Fragen",
            value: "50",
        },
        {
            label: "Alle Fragen",
            value: +connectors.length,
        },
    ])

    const handleChangeSelect = (e) => {
        setActiveItem(e)
        sessionStorage.setItem("activeItem", JSON.stringify(e));
        updateCurrentConnectors(+e.value)
    }

    return (
        <section className="connector-test">
            <div className="connector-test__start-container">
                <div className="connector-test__text">
                    <h2>Anzahl der Fragen auswählen</h2>
                    <p>Um den Test an Ihre Bedürfnisse anzupassen, können Sie die Anzahl der Fragen auswählen, die im Test angezeigt werden sollen.</p>
                    <p>Je nach Ihrer Auswahl werden nur die entsprechende Anzahl von Fragen im Test angezeigt.</p>
                    <br />
                    <div className="connector-test__select">
                        <CustomSelect
                            options={options}
                            placeHolder='Anzahl auswählen'
                            onChange={(e) => handleChangeSelect(e)}
                            activeItem={activeItem}
                        />
                    </div>
                </div>
            </div>
            <div className="connector-test__start-container">
                <ButtonStartTest onClick={onClick}>Start Test</ButtonStartTest>
            </div>
        </section>
    )
}

export default TestPage