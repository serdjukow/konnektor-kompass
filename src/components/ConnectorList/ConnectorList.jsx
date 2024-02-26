import { useEffect, useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import Modal from '../../components/Modal/Modal'


const ConnectorList = ({ connectors }) => {
    const { chengeIsOpen, setModalContent } = useContext(DataContext);
    const [subjunktion, setSubjunktion] = useState([])
    const [konjunktion, setKonjunktion] = useState([])
    const [konjunktionaladverb, setKonjunktionaladverb] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    // const [modalContent, setModalContent] = useState({})
    // const chengeIsOpen = () => {
    //     setIsOpen(!isOpen)
    // }


    const connectorenFilter = (type) => connectors.filter(connector => connector.connector_type.toLowerCase() === type.toLowerCase())

    const getSubjunktion = () => setSubjunktion(connectorenFilter('subjunktionen'))

    const getKonjunktion = () => setKonjunktion(connectorenFilter('konjunktion'))

    const getKonjunktionaladverb = () => setKonjunktionaladverb(connectorenFilter("konjunktionaladverbien"))

    useEffect(() => {
        getSubjunktion()
        getKonjunktion()
        getKonjunktionaladverb()
    }, [])

    function findConnectorById(id) {
        return connectors.find(connector => connector.id === id);
    }

    const addContent = (e) => {
        let el_id = e.target.id
        chengeIsOpen()
        setModalContent(findConnectorById(el_id))
    }

    return (
        <>
            <div className="category">
                <div className="category-title subjunktion"><h2>Subjunktion (z.B.: weil, warum, dass, …)</h2></div>
                <div className="word-container">
                    {subjunktion.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category">
                <div className="category-title konjunktion"><h2>Konjunktion (z.B.: und, oder, denn, …)</h2></div>
                <div className="word-container">
                    {konjunktion.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category">
                <div className="category-title konjunktionaladverb"><h2>Konjunktionaladverb (z.B.: deswegen, seitdem, trotzdem, …)</h2></div>
                <div className="word-container">
                    {konjunktionaladverb.map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="word">{el.connector}</span>
                    ))}
                </div>
            </div>
            {/* <Modal modalContent={modalContent} isOpen={isOpen} chengeIsOpen={chengeIsOpen}/> */}
        </>
    );
}
export default ConnectorList