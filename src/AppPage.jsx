import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loader from './Layouts/Loader/Loader'
import { useRoutes } from './routes'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DataContext from './context/DataContext'
import Modal from './components/Modal/Modal'
import "./App.scss";

const AppPage = () => {
	const routes = useRoutes()	
	const [isOpen, setIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [connectorAnswers, setConnectorAnswers] = useState([])
	const [answerState, setAnswerState] = useState()

	const chengeIsOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<DataContext.Provider
			value={{
				isOpen,
				chengeIsOpen,
				setModalContent,
				isModalOpen,
				setIsModalOpen,
				connectorAnswers,
				setConnectorAnswers,
				answerState, 
				setAnswerState
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
