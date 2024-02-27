import { useEffect, useState, useContext } from "react";
import DataContext from "../../context/DataContext";


const ConnectorList = ({ connectors }) => {
    const { chengeIsOpen, setModalContent } = useContext(DataContext);
    const [subjunktion, setSubjunktion] = useState([])
    const [konjunktion, setKonjunktion] = useState([])
    const [konjunktionaladverb, setKonjunktionaladverb] = useState([])

    const connectorenFilter = (type) => connectors?.filter(connector => connector.connector_type.toLowerCase() === type.toLowerCase())

    const getSubjunktion = () => setSubjunktion(connectorenFilter('subjunktionen'))

    const getKonjunktion = () => setKonjunktion(connectorenFilter('konjunktion'))

    const getKonjunktionaladverb = () => setKonjunktionaladverb(connectorenFilter("konjunktionaladverbien"))

    useEffect(() => {
        getSubjunktion()
        getKonjunktion()
        getKonjunktionaladverb()
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
            <div className="category subjunktion">
                <div className="category__title"><h2>Subjunktion (z.B.: weil, warum, dass, …)</h2></div>
                <div className="category__words">
                    {subjunktion.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category konjunktion">
                <div className="category__title "><h2>Konjunktion (z.B.: und, oder, denn, …)</h2></div>
                <div className="category__words">
                    {konjunktion.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category konjunktionaladverb">
                <div className="category__title"><h2>Konjunktionaladverb (z.B.: deswegen, seitdem, trotzdem, …)</h2></div>
                <div className="category__words">
                    {konjunktionaladverb.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>           
        </>
    );
}
export default ConnectorList