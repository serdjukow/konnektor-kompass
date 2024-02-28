import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Loader from '../../Layouts/Loader/Loader'

const ConnectorList = ({ connectors }) => {
    const { chengeIsOpen, setModalContent } = useContext(DataContext);
    const connectorenFilter = (type) => connectors?.filter(connector => connector.connector_type.toLowerCase() === type.toLowerCase()) 

    function findConnectorById(id) {
        return connectors?.find(connector => connector.id === id);
    }
    
    const addContent = (e) => {
        let el_id = e.target.id
        chengeIsOpen()
        setModalContent(findConnectorById(el_id))
    }
    
    return (
        connectors ? (<>
            <div className="category subjunktionen">
                <div className="category__title"><h2>Konnektoren mit Nebensatz (= Subjunktionen)</h2></div>
                <div className="category__words">
                    {connectorenFilter('subjunktionen').map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category konjunktionen">
                <div className="category__title "><h2>Konnektoren mit Hauptsatz (Position 0) (= Konjunktionen)</h2></div>
                <div className="category__words">
                    {connectorenFilter('konjunktionen').map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category konjunktionaladverbien">
                <div className="category__title"><h2>Konnektoren mit Hauptsatz (Position 1) (= Konjunktionaladverbien)</h2></div>
                <div className="category__words">
                    {connectorenFilter("konjunktionaladverbien").map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
            <div className="category infinitivgruppe">
                <div className="category__title"><h2>Konnektoren mit Infinitivgruppe</h2></div>
                <div className="category__words">
                    {connectorenFilter("infinitivgruppe").map(el => (
                        <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                    ))}
                </div>
            </div>
        </>) : (<Loader/>)
    )
}
export default ConnectorList

