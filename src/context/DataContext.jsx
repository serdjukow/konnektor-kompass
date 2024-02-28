import { createContext } from 'react'

const noop = () => { }

const DataContext = createContext({
	connectors: [],
	isOpen: Boolean,
	chengeIsOpen: noop,
	setModalContent: noop,
	fetchConnectors: noop
})

export default DataContext