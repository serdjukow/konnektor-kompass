import { Suspense, useState, useEffect, createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loader from './Layouts/Loader/Loader'
import { useRoutes } from './routes'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DataContext from './context/DataContext'
import Modal from './components/Modal/Modal'
import "./App.scss";
import { v4 as uuidv4 } from 'uuid';



const AppPage = () => {
	const routes = useRoutes()
	const [connectors, setConnectors] = useState([
		...(JSON.parse(localStorage.getItem("connectors")) || []),
	]);
	const [isOpen, setIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState({})

	async function fetchConnectors() {
		try {
			const response = await fetch("db/db3.json");
			if (!response.ok) {
				throw new Error("Ошибка загрузки данных");
			}
			const data = await response.json();
			const newDate = data.map(el => {
				return {
					...el,
					'id': uuidv4()
				}
			})
			localStorage.setItem("connectors", JSON.stringify(newDate));
			setConnectors(newDate);
		} catch (error) {
			console.error("Ошибка:", error.message);
		}
	}

	useEffect(() => {
		!connectors.length && fetchConnectors();
	});


	const chengeIsOpen = () => {
		setIsOpen(!isOpen)
	}


	return (

		<DataContext.Provider
			value={{
				connectors: [...connectors],
				isOpen,
				chengeIsOpen,
				setModalContent
			}}
		>
			<BrowserRouter>
				<div className="wrapper">
					<Header connectors={connectors} />
					<div className="page"><Suspense fallback={<Loader />}>{routes}</Suspense></div>
					<Footer />
					<Modal modalContent={modalContent} isOpen={isOpen} chengeIsOpen={chengeIsOpen} />
				</div>
			</BrowserRouter>
		</DataContext.Provider>

	)
}

export default AppPage;
