import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	HOME_ROUTE,
	KONNEKTOREN_ROUTE,
	KONNEKTOREN_TEST_ROUTE,
	RESULT_ROUTE,
	KONNEKTOREN_TEST_START_ROUTE,
	KONNEKTOREN_UEBERSICHT_ROUTE,
	PREPOSITIONEN_ROUTE,
	PREPOSITIONEN_UEBERSICHT_ROUTE,
	NOMEN_MIT_PREPOSITIONEN_ROUTE,
	VERBEN_MIT_PREPOSITIONEN_ROUTE,
	ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE,
	WORDS_ROUTE,
	FAQ_ROUTE
} from './utils/consts'

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const KonnektorenPages = lazy(() => import('./Pages/KonnektorenPages'))
const KonnektorenPage = lazy(() => import('./Pages/Konnektoren/KonnektorenPage/KonnektorenPage'))
const KonnektorenUebersichtPage = lazy(() => import('./Pages/Konnektoren/KonnektorenUebersichtPage/KonnektorenUebersichtPage'))


const PrepositionenPages = lazy(() => import('./Pages/PrepositionenPages'))
const PrepositionenPage = lazy(() => import('./Pages/Prepositionen/PrepositionenPage/PrepositionenPage'))
const PrepositionenUebersichtPage = lazy(() => import('./Pages/Prepositionen/PrepositionenUebersichtPage/PrepositionenUebersichtPage'))
const NomenPrepositionen = lazy(() => import('./Pages/Prepositionen/NomenPrepositionen/NomenPrepositionen'))
const VerbenPrepositionen = lazy(() => import('./Pages/Prepositionen/VerbenPrepositionen/VerbenPrepositionen'))
const AdjektivePrepositionen = lazy(() => import('./Pages/Prepositionen/AdjektivePrepositionen/AdjektivePrepositionen'))

const TestPage = lazy(() => import('./Pages/Konnektoren/TestPage/TestPage'))
const TestStartPage = lazy(() => import('./Pages/Konnektoren/TestStartPage/TestStartPage'))
const ResultPage = lazy(() => import('./Pages/Konnektoren/ResultPage/ResultPage'))

const WordsPages = lazy(() => import('./Pages/WordsPages'))
const WordsPage = lazy(() => import('./Pages/Words/WordsPage/WordsPage'))
const WordsUebersicht = lazy(() => import('./Pages/Words/WordsUebersicht/WordsUebersicht'))

const ServicePages = lazy(() => import('./Pages/ServicePages'))
const FaqPages = lazy(() => import('./Pages/FaqPage/FaqPage'))




export const useRoutes = () => {
	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<HomePage />}>
				<Route index element={<HomePage />} />
			</Route>

			<Route path={HOME_ROUTE} element={<KonnektorenPages />}>
				<Route path={KONNEKTOREN_ROUTE} element={<KonnektorenPage />} />
				<Route path={KONNEKTOREN_UEBERSICHT_ROUTE} element={<KonnektorenUebersichtPage />} />
				<Route path={KONNEKTOREN_TEST_ROUTE} element={<TestPage />} />
				<Route path={KONNEKTOREN_TEST_START_ROUTE} element={<TestStartPage />} />
				<Route path={RESULT_ROUTE} element={<ResultPage />} />
			</Route>

			<Route path={HOME_ROUTE} element={<PrepositionenPages />}>
				<Route path={PREPOSITIONEN_ROUTE} element={<PrepositionenPage />} />
				<Route path={PREPOSITIONEN_UEBERSICHT_ROUTE} element={<PrepositionenUebersichtPage />} />
				<Route path={NOMEN_MIT_PREPOSITIONEN_ROUTE} element={<NomenPrepositionen />} />
				<Route path={VERBEN_MIT_PREPOSITIONEN_ROUTE} element={<VerbenPrepositionen />} />
				<Route path={ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE} element={<AdjektivePrepositionen />} />
			</Route>

			<Route path={HOME_ROUTE} element={<WordsPages />}>
				<Route path={WORDS_ROUTE} element={<WordsPage />} />
				<Route path={`${WORDS_ROUTE}/:theme`} element={<WordsUebersicht />} />
			</Route>

			<Route path={HOME_ROUTE} element={<ServicePages />}>
				<Route path={FAQ_ROUTE} element={<FaqPages />} />
			</Route>

			<Route path="*" element={<HomePage />} />
		</Routes>
	)
}
