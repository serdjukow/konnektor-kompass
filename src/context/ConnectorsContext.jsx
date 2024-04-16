import { createContext } from 'react'

const noop = () => { }

const ConnectorsContext = createContext({
	connectors: [],
	setConnectors: noop,
	fetchConnectors: noop,
	activeItem: {},
	setActiveItem: noop,
	currentConnectors: [], 
	setCurrentConnectors: noop,
	updateCurrentConnectors: noop,
	isOpen: Boolean,
	chengeIsOpen: noop,
	setModalContent: noop
})

export default ConnectorsContext