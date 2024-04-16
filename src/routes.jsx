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
	ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE
} from './utils/consts'

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const KonnektorenPage = lazy(() => import('./Pages/Konnektoren/KonnektorenPage/KonnektorenPage'))
const KonnektorenUebersichtPage = lazy(() => import('./Pages/Konnektoren/KonnektorenUebersichtPage/KonnektorenUebersichtPage'))
const KonnektorenPages = lazy(() => import('./Pages/KonnektorenPages'))

const PrepositionenPages = lazy(() => import('./Pages/PrepositionenPages'))
const PrepositionenPage = lazy(() => import('./Pages/Prepositionen/PrepositionenPage/PrepositionenPage'))
const PrepositionenUebersichtPage = lazy(() => import('./Pages/Prepositionen/PrepositionenUebersichtPage/PrepositionenUebersichtPage'))
const NomenPrepositionen = lazy(() => import('./Pages/Prepositionen/NomenPrepositionen/NomenPrepositionen'))
const VerbenPrepositionen = lazy(() => import('./Pages/Prepositionen/VerbenPrepositionen/VerbenPrepositionen'))
const AdjektivePrepositionen = lazy(() => import('./Pages/Prepositionen/AdjektivePrepositionen/AdjektivePrepositionen'))

const TestPage = lazy(() => import('./Pages/Konnektoren/TestPage/TestPage'))
const TestStartPage = lazy(() => import('./Pages/Konnektoren/TestStartPage/TestStartPage'))
const ResultPage = lazy(() => import('./Pages/Konnektoren/ResultPage/ResultPage'))

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

			<Route path="*" element={<HomePage />} />
		</Routes>
	)
}
