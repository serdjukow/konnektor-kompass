import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Loader from '../../Layouts/Loader/Loader'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
function createMarkup(example) {
    return { __html: example };
}

const ConnectorList = ({ data = {}, viewport = 'grid' }) => {
    const { chengeIsOpen, setModalContent } = useContext(DataContext);
    const connectorenFilter = (type) => data?.filter(connector => connector.connector_type.toLowerCase() === type.toLowerCase())

    function findConnectorById(id) {
        let index = data?.indexOf(data?.find((connector) => connector.id === id));
        return index
    }

    const addContent = (e) => {
        let slideId = e.target.id
        chengeIsOpen()
        setModalContent([findConnectorById(slideId), data])
    }

    if (!!Object.keys(data).length) {
        return (
            viewport === 'grid' ? (
                <>
                    <div className="category blue">
                        <div className="category__title"><h2>Konnektoren mit Nebensatz (= Subjunktionen)</h2></div>
                        <div className="category__words">
                            {connectorenFilter('subjunktionen').map(el => (
                                <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category yellow">
                        <div className="category__title "><h2>Konnektoren mit Hauptsatz (Position 0) (= Konjunktionen)</h2></div>
                        <div className="category__words">
                            {connectorenFilter('konjunktionen').map(el => (
                                <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category green">
                        <div className="category__title"><h2>Konnektoren mit Hauptsatz (Position 1) (= Konjunktionaladverbien)</h2></div>
                        <div className="category__words">
                            {connectorenFilter("konjunktionaladverbien").map(el => (
                                <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category violet">
                        <div className="category__title"><h2>Konnektoren mit Infinitivgruppe</h2></div>
                        <div className="category__words">
                            {connectorenFilter("infinitivgruppe").map(el => (
                                <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category gray">
                        <div className="category__title"><h2>Konnektoren mit besonderer Position</h2></div>
                        <div className="category__words">
                            {connectorenFilter("besonderer-position").map(el => (
                                <span key={el.id} id={el.id} onClick={addContent} className="category__word">{el.connector}</span>
                            ))}
                        </div>
                    </div>
                </>
            )
                :
                (
                    <>
                        <TableContainer w="100%" p="10" borderRadius="4">
                            <Table variant='simple' >
                                <Thead>
                                    <Tr>
                                        <Th>№</Th>
                                        <Th>Konnektor</Th>
                                        <Th>Beispielsatz</Th>
                                    </Tr>
                                </Thead>
                                <Tbody size='xl'>
                                    {data.sort((a, b) => a.connector.localeCompare(b.connector)).map((el, id) => (
                                        <Tr key={el.id}>
                                            <Td>{id + 1}</Td>
                                            <Td>{el.connector}</Td>
                                            <Td dangerouslySetInnerHTML={createMarkup(el.example)}></Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>№</Th>
                                        <Th>Konnektor</Th>
                                        <Th>Beispielsatz</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </>
                )
        )
    }

}
export default ConnectorList

