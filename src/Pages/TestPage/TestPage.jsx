import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import ButtonStartTest from '../../components/ButtonStartTest/ButtunStartTest'
import CustomSelect from '../../components/CustomSelect/CustomSelect.jsx';
import DataContext from "../../context/DataContext";

const TestPage = () => {
    const { connectors, activeItem, setActiveItem, updateCurrentConnectors } = useContext(DataContext);
    const history = useNavigate()
    const onClick = () => {
        history('/test/start')
    }

    const [options, ] = useState([
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
            value: connectors.length,
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
                    <div className="connector-test__select">
                        <CustomSelect
                            options={options}
                            placeHolder='Alle Fragen'
                            onChange={(e) => handleChangeSelect(e)}
                            activeItem={activeItem}
                        />
                    </div>
                    <p>Um den Test an Ihre Bedürfnisse anzupassen, können Sie die Anzahl der Fragen auswählen, die im Test angezeigt werden sollen.</p>
                    <p>Wählen Sie einfach die gewünschte Anzahl aus der Dropdown-Liste aus und klicken Sie auf "Start", um den Test zu beginnen.</p>
                    <p>Je nach Ihrer Auswahl werden nur die entsprechende Anzahl von Fragen im Test angezeigt.</p>
                </div>
            </div>
            <div className="connector-test__start-container">
                <ButtonStartTest onClick={onClick}>Start Test</ButtonStartTest>
            </div>
        </section>
    )
}

export default TestPage