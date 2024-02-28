import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	HOME_ROUTE,
	KONNEKTOREN_ROUTE,
	TEST_ROUTE,
	RESULT_ROUTE,
	TEST_START_ROUTE
} from './utils/consts'


const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const KonnektorenPage = lazy(() => import('./Pages/KonnektorenPage/KonnektorenPage'))
const TestPages = lazy(() => import('./Pages/TestPages'))
const TestPage = lazy(() => import('./Pages/TestPage/TestPage'))
const TestStartPage = lazy(() => import('./Pages/TestStartPage/TestStartPage'))
const ResultPage = lazy(() => import('./Pages/ResultPage/ResultPage'))

// const BlogPage = lazy(() => import('./components/BlogPage'))
// const Blogs = lazy(() => import('./components/pages/Blogs/Blogs'))
// const BlogDetails = lazy(() => import('./components/pages/Blogs/BlogDetails'))

export const useRoutes = () => {
	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<HomePage />}>
				<Route index element={<HomePage />} />				
			</Route>

			<Route path={HOME_ROUTE} element={<KonnektorenPage />}>
				<Route path={KONNEKTOREN_ROUTE} element={<KonnektorenPage />} />				
			</Route>

			<Route path={HOME_ROUTE} element={<TestPages />}>
				<Route path={TEST_ROUTE} element={<TestPage />} />				
				<Route path={TEST_START_ROUTE} element={<TestStartPage />} />
				<Route path={RESULT_ROUTE} element={<ResultPage />} />
			</Route>

			{/* <Route path={HOME_ROUTE} element={<BlogPage />}>
				<Route path={BLOGS_ROUTE} element={<Blogs />} />
				<Route path={`${BLOGS_ROUTE}/:id`} element={<BlogDetails />} />
			</Route> */}



			{/* Test Pages */}

			{/* <Route path={HOME_ROUTE} element={<QuizzPages />}>
				<Route path={`test`} element={<WindowType />} />
				<Route path={`test/answer`} element={<BuildingType />} />
				<Route path={`test/result`} element={<Noise />} />				 
			</Route> */}

			<Route path="*" element={<HomePage />} />
		</Routes>
	)
}
