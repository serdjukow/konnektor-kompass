import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import PageModal from "../../components/PageModal/PageModal"
import ModalSlider from "../../components/ModalSlider/ModalSlider"
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

const PrepositionenList = ({ data = {}, viewport = 'grid' }) => {
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

    const dataFilter = (type) => data?.filter(data => data.type.toLowerCase() === type.toLowerCase())

    function findItemById(id) {
        let index = data?.indexOf(data?.find((data) => data.id === id));
        setActiveSlide(index)
    }

    // const categoryToHTML = (category) => {
    //     return (
    //         <div className="category blue">
    //             <div className="category__title"><h2>{category.title}</h2></div>
    //             <div className="category__words">
    //                 {dataFilter('mit Genitiv').map(el => (
    //                     <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
    //                 ))}
    //             </div>
    //         </div>
    //     )
    // }

    if (!!Object.keys(data).length) {
        return (
            viewport === 'grid' ? (
                <>
                    <PageModal isOpen={isModalOpen} onClose={closeModal}><ModalSlider activeSlide={activeSlide} data={data} /></PageModal>
                    <div className="category blue">
                        <div className="category__title"><h2>Präpositionen mit Genitiv</h2></div>
                        <div className="category__words">
                            {dataFilter('mit Genitiv').map(el => (
                                <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category yellow">
                        <div className="category__title "><h2>Präpositionen mit Dativ</h2></div>
                        <div className="category__words">
                            {dataFilter('mit Dativ').map(el => (
                                <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category green">
                        <div className="category__title"><h2>Präpositionen mit Akkusativ</h2></div>
                        <div className="category__words">
                            {dataFilter('mit Akkusativ').map(el => (
                                <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
                            ))}
                        </div>
                    </div>
                    <div className="category violet">
                        <div className="category__title"><h2>Präpositionen mit Dativ oder Akkusativ</h2></div>
                        <div className="category__words">
                            {dataFilter('mit Dativ oder Akkusativ').map(el => (
                                <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
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
                                        <Th>Präpositionen</Th>
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
                                        <Th>Adjektiv</Th>
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
export default PrepositionenList

