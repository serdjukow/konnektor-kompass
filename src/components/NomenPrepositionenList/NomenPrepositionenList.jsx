import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import PageModal from "../PageModal/PageModal"
import ModalSlider from "../ModalSlider/ModalSlider"
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

const NomenPrepositionenList = ({ data = {}, viewport = 'grid' }) => {
    const { isModalOpen, setIsModalOpen } = useContext(DataContext);
    const [activeSlide, setActiveSlide] = useState(0)

    const openModal = (e) => {
        setIsModalOpen(true);
        let slideId = e.target.id
        findItemById(slideId)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const dataFilter = (type) => data?.filter(data => data.casus.toLowerCase() === type.toLowerCase())

    function findItemById(id) {
        let index = data?.indexOf(data?.find((data) => data.id === id));
        setActiveSlide(index)
    }


    if (!!Object.keys(data).length) {
        return (
            viewport === 'grid' ? (
                <>
                    <PageModal isOpen={isModalOpen} onClose={closeModal}><ModalSlider activeSlide={activeSlide} data={data} /></PageModal>
                    <div className="category yellow">
                        <div className="category__title"><h2>Nomen + Akkusativ</h2></div>
                        <div className="category__words">
                            {dataFilter('Akkusativ').map(el => (
                                <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category green">
                        <div className="category__title "><h2>Nomen + Dativ</h2></div>
                        <div className="category__words">
                            {dataFilter('Dativ').map(el => (
                                <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
                            ))}
                        </div>
                    </div>
                </>
            )
                :
                (
                    <>
                        <TableContainer w="100%" bgColor="#fff" p="10" borderRadius="4">
                            <Table variant='simple' >
                                <Thead>
                                    <Tr>
                                        <Th>№</Th>
                                        <Th>Nomen</Th>
                                        <Th>Präposition + Kasus</Th>
                                        <Th>Beispielsatz</Th>
                                    </Tr>
                                </Thead>
                                <Tbody size='xl'>
                                    {data.map((el, id) => (
                                        <Tr key={el.id}>
                                            <Td>{id + 1}</Td>
                                            <Td>{el.title}</Td>
                                            <Td>{el.type}</Td>
                                            <Td dangerouslySetInnerHTML={createMarkup(el.example)}></Td>
                                        </Tr>
                                    ))}
                                </Tbody>          
                                <Tfoot>
                                    <Tr>
                                        <Th>№</Th>
                                        <Th>Nomen</Th>
                                        <Th>Präposition + Kasus</Th>
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
export default NomenPrepositionenList

