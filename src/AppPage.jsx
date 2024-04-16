import { Suspense, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loader from './Layouts/Loader/Loader'
import { useRoutes } from './routes'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DataContext from './context/DataContext'
import Modal from './components/Modal/Modal'
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import data from './db/db.json'

const AppPage = () => {
	const routes = useRoutes()
	const [connectors, setConnectors] = useState([
		...(JSON.parse(sessionStorage.getItem("connectors")) || []),
	]);
	const [isOpen, setIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(JSON.parse(sessionStorage.getItem("activeItem")) || { label: 'Alle Fragen', value: +connectors.length })
	const [currentConnectors, setCurrentConnectors] = useState([]);

	function updateCurrentConnectors(value) {
		const shuffledConnectors = connectors.sort(() => Math.random() - 0.5);
		const selectedQuestions = shuffledConnectors.slice(0, value);
		setCurrentConnectors(selectedQuestions);
	}

	useEffect(() => {
		const newDate = data.map((el, id) => {
			return {
				...el,
				id: uuidv4() + id,
				read: false,
				learned: false,
				answer: '',
			};
		});
		sessionStorage.setItem("connectors", JSON.stringify(newDate));
		setConnectors(newDate)
	}, []);

	const chengeIsOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<DataContext.Provider
			value={{
				connectors,
				setConnectors,
				isOpen,
				chengeIsOpen,
				setModalContent,
				activeItem,
				setActiveItem,
				currentConnectors,
				setCurrentConnectors,
				updateCurrentConnectors,
				isModalOpen,
				setIsModalOpen
			}}
		>
			<BrowserRouter>
				<div className="wrapper">
					<Header />
					<div className="page"><Suspense fallback={<Loader />}>{routes}</Suspense></div>
					<Modal modalContent={modalContent} isOpen={isOpen} chengeIsOpen={chengeIsOpen} />
					<Footer />
				</div>

			</BrowserRouter>
		</DataContext.Provider>
	)
}

export default AppPage;
