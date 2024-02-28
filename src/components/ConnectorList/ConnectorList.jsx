import { useEffect, useState, useContext } from "react";
import DataContext from "../../context/DataContext";


const ConnectorList = ({ connectors }) => {
    const { chengeIsOpen, setModalContent } = useContext(DataContext);
    const [subjunktionen, setsubjunktionen] = useState([])
    const [konjunktionen, setKonjunktionen] = useState([])
    const [konjunktionaladverbien, setKonjunktionaladverbien] = useState([])
    const [infinitivgruppe, setInfinitivgruppe] = useState([])

    const connectorenFilter = (type) => connectors?.filter(connector => connector.connector_type.toLowerCase() === type.toLowerCase())

    const getsubjunktionen = () => setsubjunktionen(connectorenFilter('subjunktionen'))

    const getKonjunktionen = () => setKonjunktionen(connectorenFilter('konjunktionen'))

    const getKonjunktionaladverb = () => setKonjunktionaladverbien(connectorenFilter("konjunktionaladverbien"))

    const getInfinitivgruppe = () => setInfinitivgruppe(connectorenFilter("infinitivgruppe"))

    useEffect(() => {
        getsubjunktionen()
        getKonjunktionen()
        getKonjunktionaladverb()
        getInfinitivgruppe()
    }, [])

    function findConnectorById(id) {
        return connectors?.find(connector => connector.id === id);
    }

    const addContent = (e) => {
        let el_id = e.target.id
        chengeIsOpen()
        setModalContent(findConnectorById(el_id))
    }

    return (
        <>
            <div className="category subjunktionen">
                <div className="category__title"><h2>Konnektoren mit Nebensatz (= Subjunktionen)</h2></div>
                <div className="category__words">
                    {subjunktionen.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category konjunktionen">
                <div className="category__title "><h2>Konnektoren mit Hauptsatz (Position 0) (= Konjunktionen)</h2></div>
                <div className="category__words">
                    {konjunktionen.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category konjunktionaladverbien">
                <div className="category__title"><h2>Konnektoren mit Hauptsatz (Position 1) (= Konjunktionaladverbien)</h2></div>
                <div className="category__words">
                    {konjunktionaladverbien.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category infinitivgruppe">
                <div className="category__title"><h2>Konnektoren mit Infinitivgruppe</h2></div>
                <div className="category__words">
                    {infinitivgruppe.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
        </>
    );
}
export default ConnectorList