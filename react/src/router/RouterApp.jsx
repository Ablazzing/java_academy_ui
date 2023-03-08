import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import * as RouterConstants from './RouterConstants'
import { privateRoutes, authRoutes } from './RouterRoutes'
import LayoutAuth from '../layouts/LayoutAuth'
import LayoutApp from '../layouts/LayoutApp'

const RouterApp = () => {
	const isAuth = useSelector(state => state.user.auth)

	return (
		<Routes>
			<Route element={ <LayoutApp /> }>
				{isAuth && privateRoutes.map(({ Path, Component }) => 
					<Route path={ Path } element={ <Component /> } key={ Path } exact />
				)}
			</Route>
			<Route element={ <LayoutAuth /> }>
				{!isAuth && authRoutes.map(({ Path, Component }) => 
					<Route path={ Path } element={ <Component /> } key={ Path } exact />
				)}
			</Route>
			<Route path="*" element={<Navigate to={ isAuth ? RouterConstants.ROUTE_HOME : RouterConstants.ROUTE_AUTH_SIGN_IN } replace />} />
		</Routes>
	)
}

export default RouterApp