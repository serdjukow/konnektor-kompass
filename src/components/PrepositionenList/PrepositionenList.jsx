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
    useColorModeValue,
} from '@chakra-ui/react'
import { projectColorScheme } from "../../utils/theme";

function createMarkup(example) {
    return { __html: example };
}

const blocksSet = [
    "mit Genitiv",
    "mit Dativ",
    "mit Akkusativ",
    "mit Dativ oder Akkusativ"
]

const PrepositionenList = ({ data = {}, viewport = 'grid' }) => {
    const { isModalOpen, setIsModalOpen } = useContext(DataContext);
    const [activeSlide, setActiveSlide] = useState(0)

    // Цвета для темной/светлой темы
    const tableBg = useColorModeValue('white', 'gray.800')
    const headerBg = useColorModeValue('gray.50', 'gray.700')
    const headerColor = useColorModeValue('gray.700', 'gray.200')
    const cellColor = useColorModeValue('gray.800', 'gray.200')
    const cellSecondaryColor = useColorModeValue('gray.600', 'gray.400')
    const hoverBg = useColorModeValue('gray.50', 'gray.700')

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

    if (!!Object.keys(data).length) {
        return (
            viewport === 'grid' ? (
                <>
                    <PageModal isOpen={isModalOpen} onClose={closeModal}><ModalSlider activeSlide={activeSlide} data={data} /></PageModal>
                    {blocksSet.map(block => (
                        <div key={block} className={`category ${projectColorScheme[block]}`}>
                            <div className="category__title"><h2>Präpositionen {block}</h2></div>
                            <div className="category__words">
                                {dataFilter(`${block}`).map(el => (
                                    <span key={el.id} id={el.id} onClick={openModal} className="category__word">{el.title}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            )
                :
                (
                    <>
                        <TableContainer w="100%" p="6" borderRadius="12" bg={tableBg} boxShadow="lg">
                            <Table variant='simple' size="md">
                                <Thead bg={headerBg}>
                                    <Tr>
                                        <Th color={headerColor} fontWeight="600" fontSize="sm">№</Th>
                                        <Th color={headerColor} fontWeight="600" fontSize="sm">Präpositionen</Th>
                                        <Th color={headerColor} fontWeight="600" fontSize="sm">Präposition + Kasus</Th>
                                        <Th color={headerColor} fontWeight="600" fontSize="sm">Beispielsatz</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map((el, id) => (
                                        <Tr key={el.id} _hover={{ bg: hoverBg }} transition="background-color 0.2s">
                                            <Td color={cellSecondaryColor} fontWeight="500">{id + 1}</Td>
                                            <Td color={cellColor} fontWeight="600">{el.title}</Td>
                                            <Td color={cellSecondaryColor} fontWeight="500">{el.type}</Td>
                                            <Td className={`words-example ${projectColorScheme[el.type]}`} dangerouslySetInnerHTML={createMarkup(el.example)}></Td>
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

