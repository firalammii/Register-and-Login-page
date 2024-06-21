import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
			 <Routes>
				<Route path='/'>
					<Route index element={<Login />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/login' element={<Login />} />
				</Route>
			 </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App