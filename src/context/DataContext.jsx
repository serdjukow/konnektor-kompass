import { createContext } from 'react'

const noop = () => { }

const DataContext = createContext({
	connectors: [],
	isOpen: Boolean,
	chengeIsOpen: noop,
	setModalContent: noop,
	setConnectors: noop,
	fetchConnectors: noop,
	activeItem: {},
	setActiveItem: noop,
	currentConnectors: [], 
	setCurrentConnectors: noop,
	updateCurrentConnectors: noop
})

export default DataContext