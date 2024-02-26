import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	HOME_ROUTE,
	KONNEKTOREN_ROUTE,
	TEST_ROUTE
} from './utils/consts'


const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const KonnektorenPage = lazy(() => import('./Pages/KonnektorenPage/KonnektorenPage'))
const TestPage = lazy(() => import('./Pages/TestPage/TestPage'))

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

			<Route path={HOME_ROUTE} element={<TestPage />}>
				<Route path={TEST_ROUTE} element={<TestPage />} />
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

			{/*<Route path="*" element={<Error500 />} /> */}
		</Routes>
	)
}
