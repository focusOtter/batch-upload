import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import AdminPage from './routes/AdminPage'
import HomePage from './routes/HomePage'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<AmplifyProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="admin" element={<AdminPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</AmplifyProvider>
)
