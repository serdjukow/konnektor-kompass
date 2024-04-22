import { createContext } from 'react'

const noop = () => { }

const DataContext = createContext({
	isOpen: Boolean,
	chengeIsOpen: noop,
	isModalOpe: Boolean,
	setIsModalOpen: noop,
	setModalContent: noop,
	connectorAnswers: [],
	setConnectorAnswers: noop,
	answerState: '',
	setAnswerState: noop
})

export default DataContext